import datetime
import sqlalchemy as sa
from sqlalchemy.ext.declarative import declarative_base
from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
import jwt
from flask_bcrypt import Bcrypt
import os

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///nominations.db'
app.config['JWT_SECRET_KEY'] = os.environ.get('JWT_SECRET_KEY')
db = SQLAlchemy(app)
bcrypt = Bcrypt(app)

Base = declarative_base()

class User(Base):
    __tablename__ = 'users'
    id = sa.Column(sa.Integer, primary_key=True)
    username = sa.Column(sa.String, unique=True, nullable=False)
    password = sa.Column(sa.String, nullable=False)
    is_admin = sa.Column(sa.Boolean, default=False)

    def set_password(self, password):
        self.password = bcrypt.generate_password_hash(password).decode('utf-8')

    def check_password(self, password):
        return bcrypt.check_password_hash(self.password, password)

class NominationCategory(Base):
    __tablename__ = 'nomination_categories'
    id = sa.Column(sa.Integer, primary_key=True)
    name = sa.Column(sa.String, nullable=False)

class Nominee(Base):
    __tablename__ = 'nominees'
    id = sa.Column(sa.Integer, primary_key=True)
    name = sa.Column(sa.String, nullable=False)
    category_id = sa.Column(sa.Integer, sa.ForeignKey('nomination_categories.id'))
    category = sa.relationship('NominationCategory')

class VotingSession(Base):
    __tablename__ = 'voting_sessions'
    id = sa.Column(sa.Integer, primary_key=True)
    start_time = sa.Column(sa.DateTime)
    end_time = sa.Column(sa.DateTime)

@app.route('/api/voting_sessions', methods=['POST'])
def start_voting_session():
    try:
        # Authentication logic
        auth_header = request.headers.get('Authorization')
        if not auth_header:
            return jsonify({'error': 'Unauthorized'}), 401
        token = auth_header.split(' ')[1]
        user_id = jwt.decode(token, app.config['JWT_SECRET_KEY'], algorithms=['HS256'])['user_id']
        user = User.query.get(user_id)
        if not user or not user.is_admin:
            return jsonify({'error': 'Unauthorized'}), 401

        # Input validation
        if not request.json:
            return jsonify({'error': 'Invalid request'}), 400
        if 'start_time' not in request.json:
            return jsonify({'error': 'Missing start time'}), 400

        # Create voting session
        voting_session = VotingSession(start_time=datetime.datetime.utcnow())
        db.session.add(voting_session)
        db.session.commit()

        return jsonify({'message': 'Voting session started'}), 201
    except sa.exc.OperationalError as e:
        return jsonify({'error': 'Database connection error'}), 500
    except jwt.ExpiredSignatureError:
        return jsonify({'error': 'Token has expired'}), 401
    except jwt.InvalidTokenError:
        return jsonify({'error': 'Invalid token'}), 401

@app.route('/api/voting_sessions', methods=['PATCH'])
def end_voting_session():
    try:
        # Authentication logic
        auth_header = request.headers.get('Authorization')
        if not auth_header:
            return jsonify({'error': 'Unauthorized'}), 401
        token = auth_header.split(' ')[1]
        user_id = jwt.decode(token, app.config['JWT_SECRET_KEY'], algorithms=['HS256'])['user_id']
        user = User.query.get(user_id)
        if not user or not user.is_admin:
            return jsonify({'error': 'Unauthorized'}), 401

        # Get the current voting session
        voting_session = VotingSession.query.order_by(VotingSession.id.desc()).first()
        if not voting_session:
            return jsonify({'error': 'No active voting session'}), 404

        # End the voting session
        voting_session.end_time = datetime.datetime.utcnow()
        db.session.commit()

        return jsonify({'message': 'Voting session ended'}), 200
    except sa.exc.OperationalError as e:
        return jsonify({'error': 'Database connection error'}), 500
    except jwt.ExpiredSignatureError:
        return jsonify({'error': 'Token has expired'}), 401
    except jwt.InvalidTokenError:
        return jsonify({'error': 'Invalid token'}), 401

if __name__ == '__main__':
    app.run(debug=True)