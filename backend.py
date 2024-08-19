import sqlalchemy as sa
from sqlalchemy.ext.declarative import declarative_base
#Falsk app settings
from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
import jwt



Base = declarative_base()

class User(Base):
    __tablename__ = 'users'
    id = sa.Column(sa.Integer, primary_key=True)
    username = sa.Column(sa.String, unique=True, nullable=False) 
    password = sa.Column(sa.String, nullable=False)
    is_admin = sa.Column(sa.Boolean, default=False)

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

# ... other models for votes, etc.

#Flask App Setup
app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///nominations.db'
db = SQLAlchemy(app)

# ... import models, create JWT secret, etc.

# API Endpoints

@app.route('/api/voting_sessions', methods=['POST'])
def start_voting_session():
    # Authentication logic
    # ...

    voting_session = VotingSession(start_time=datetime.utcnow())
    db.session.add(voting_session)
    db.session.commit()

    return jsonify({'message': 'Voting session started'}), 201