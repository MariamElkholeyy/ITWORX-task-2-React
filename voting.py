from sqlalchemy import Column, Integer, String, Boolean, ForeignKey
from sqlalchemy.ext.declarative import declarative_base
from fastapi import FastAPI
from sqlalchemy.orm import sessionmaker
from models import Nominee , Vote 


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

