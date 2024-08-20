from sqlalchemy import Column, Integer, String, Boolean
from sqlalchemy.ext.declarative import declarative_base
from fastapi import FastAPI
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker

Base = declarative_base()

class Nominee(Base):
    __tablename__ = 'nominees'
    id = Column(Integer, primary_key=True)
    name = Column(String)
    experience = Column(String)

class Vote(Base):
    __tablename__ = 'votes'
    id = Column(Integer, primary_key=True)
    nominee_id = Column(Integer, ForeignKey('nominees.id'))
    voter_id = Column(Integer)  # Assuming you have a user authentication system

app = FastAPI()

# Database connection
engine = create_engine('sqlite:///voting.db')
Session = sessionmaker(bind=engine)

@app.get("/nominees")
def get_nominees():
    with Session() as session:
        nominees = session.query(Nominee).all()
        return nominees

@app.post("/vote/{nominee_id}")
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