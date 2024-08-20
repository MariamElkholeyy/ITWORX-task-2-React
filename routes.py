import psycopg2
import psycopg2.extras
import json
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from models import Nominee , Vote , Database , User , get_db ,Depends 
from fastapi import FastAPI

# Database connection settings
DB_HOST = 'localhost'
DB_NAME = 'itworx'
DB_USER = 'postgres'
DB_PASSWORD = '1234'

# Connect to the database
conn = psycopg2.connect(
    host=DB_HOST,
    database=DB_NAME,
    user=DB_USER,
    password=DB_PASSWORD
)

# Create a cursor object to execute queries
cur = conn.cursor(cursor_factory=psycopg2.extras.DictCursor)

def fetchall():
        return cur.fetchall()

def login(username, password):
    cur.execute("SELECT * FROM users WHERE username = %s AND password = %s", (username, password))
    user = cur.fetchone()
    if user:
        return json.dumps({'message': 'Login successful'})
    else:
        return json.dumps({'message': 'Invalid credentials'}), 401

def register(username, password):
    cur.execute("INSERT INTO users (username, password) VALUES (%s, %s)", (username, password))
    conn.commit()
    return json.dumps({'message': 'Registration successful'})

def logout():
    # Implement logout logic here
    return json.dumps({'message': 'Logout successful'})

# def get_home():
#     cur.execute("SELECT * FROM nominations")
#     nominations = cur.fetchall()
#     return json.dumps([dict(row) for row in nominations])

# def get_nominations():
#     cur.execute("SELECT * FROM nominations")
#     nominations = cur.fetchall()
#     return json.dumps([dict(row) for row in nominations])

# def get_nomination(id):
#     cur.execute("SELECT * FROM nominations WHERE id = %s", (id,))
#     nomination = cur.fetchone()
#     if nomination:
#         return json.dumps(dict(nomination))
#     else:
#         return json.dumps({'message': 'Nomination not found'}), 404

# def create_nomination(title, description):
#     cur.execute("INSERT INTO nominations (title, description) VALUES (%s, %s)", (title, description))
#     conn.commit()
#     return json.dumps({'message': 'Nomination created successfully'})

# def update_nomination(id, title, description):
#     cur.execute("UPDATE nominations SET title = %s, description = %s WHERE id = %s", (title, description, id))
#     conn.commit()
#     return json.dumps({'message': 'Nomination updated successfully'})

# def delete_nomination(id):
#     cur.execute("DELETE FROM nominations WHERE id = %s", (id,))
#     conn.commit()
#     return json.dumps({'message': 'Nomination deleted successfully'})

# def get_votes():
#     cur.execute("SELECT * FROM votes")
#     votes = cur.fetchall()
#     return json.dumps([dict(row) for row in votes])

# def cast_vote(nomination_id, user_id):
#     cur.execute("INSERT INTO votes (nomination_id, user_id) VALUES (%s, %s)", (nomination_id, user_id))
#     conn.commit()
#     return json.dumps({'message': 'Vote cast successfully'})

# def get_vote(id):
#     cur.execute("SELECT * FROM votes WHERE id = %s", (id,))
#     vote = cur.fetchone()
#     if vote:
#         return json.dumps(dict(vote))
#     else:
#         return json.dumps({'message': 'Vote not found'}), 404

# def delete_vote(id):
#     cur.execute("DELETE FROM votes WHERE id = %s", (id,))
#     conn.commit()
#     return json.dumps({'message': 'Vote deleted successfully'})

# def get_nomination_form():
#     cur.execute("SELECT * FROM nomination_categories")
#     categories = cur.fetchall()
#     return json.dumps([dict(row) for row in categories])

# def submit_nomination_form(title, description):
#     cur.execute("INSERT INTO nominations (title, description) VALUES (%s, %s)", (title, description))
#     conn.commit()
#     return json.dumps({'message': 'Nomination form submitted successfully'})

# Database connection
engine = create_engine('sqlite:///voting.db')
Session = sessionmaker(bind=engine)
routes = FastAPI()

@routes.get("/nominees")
def get_nominees():
    with Session() as session:
        nominees = session.query(Nominee).all()
        return nominees

@routes.post("/vote/{nominee_id}")
def cast_vote(nominee_id: int, voter_id: int):
    with Session() as session:
        # Check if the voter has already voted for this nominee
        existing_vote = session.query(Vote).filter_by(nominee_id=nominee_id, voter_id=voter_id).first()
        if existing_vote:
            return {"message": "You've already voted for this nominee."}

        # Cast the vote
        vote = Vote(nominee_id=nominee_id, voter_id=voter_id)
        session.add(vote)
        session.commit()

        return {"message": "Vote cast successfully."}


@routes.post("/votes/")
def create_vote(nominee_id: int, user_id: int, period_id: int, timespan: int, db: Database = Depends(get_db)):
    vote = Vote.create(db, nominee_id, user_id, period_id, timespan)
    return {"vote_id": vote.vote_id}

@routes.get("/users/{user_id}")
def get_user(user_id: int, db: Database = Depends(get_db)):
    user = User.get_by_id(db, user_id)
    if user:
        return user
    else:
        return {"message": "User not found"}

@routes.post("/nominations/")
async def create_nomination(nominee_user_id: int, nominator_user_id: int, reason_for_nomination: str, db: Database = Depends(get_db)):
    try:
        nominee = Nominee.create(db, nominee_user_id, nominator_user_id, reason_for_nomination)
        return {"message": "Nominee created successfully"}
    except ValueError as e:
        return {"error": str(e)}


@routes.get("/my-nominations")
async def get_my_nominations(user_id: int):
    cur.execute("SELECT * FROM nominations WHERE user_id = %s", (user_id,))
    nominations = fetchall()
    return [nomination(**nomination) for nomination in nominations]

@routes.get("/current-nominations")
async def get_current_nominations():
    cur.execute("SELECT * FROM nominations")
    nominations = cur.fetchall()
    return [nomination(**nomination) for nomination in nominations]

@routes.get("/nominations/")
def get_all_nominations(db: Database = Depends(get_db)):
    nominations = Nominee.get_all(db)
    return nominations

# Example usage:
# print(login('username', 'password'))
# print(register('newuser', 'newpassword'))
# print(get_home())
# print(get_nominations())
# print(get_nomination(1))
# print(create_nomination('New Nomination', 'This is a new nomination'))
# print(update_nomination(1, 'Updated Nomination', 'This is an updated nomination'))
# print(delete_nomination(1))
# print(get_votes())
# print(cast_vote(1, 1))
# print(get_vote(1))
# print(delete_vote(1))
# print(get_nomination_form())
# print(submit_nomination_form('New Nomination', 'This is a new nomination'))