import psycopg2
from fastapi import FastAPI, Depends
from psycopg2.extras import DictCursor
from pydantic import BaseModel

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

cur = conn.cursor(cursor_factory=psycopg2.extras.DictCursor)

class Database:
    def __init__(self):
        self.conn = psycopg2.connect(
            database="itworx",
            user="postgres",
            password="1234",
            host="localhost",
            port="5234"
        )
        self.cur = self.conn.cursor()

    def execute(self, query, params=None):
        self.cur.execute(query, params)
        return self.cur

    def fetchall(self):
        return self.cur.fetchall()

    def fetchone(self):
        return self.cur.fetchone()

    def commit(self):
        self.conn.commit()

    def close(self):
        self.cur.close()
        self.conn.close()

def get_db():
    db = Database()
    try:
        yield db
    finally:
        db.close()

app = FastAPI()

class User:
    def __init__(self, db):
        self.db = db

    
#user creation


class User:
    def __init__(self, user_id, name, email, is_admin, role, created_on, field , db):
        self.db = db
        self.user_id = user_id
        self.name = name
        self.email = email
        self.is_admin = is_admin
        self.role = role
        self.created_on = created_on
        self.field = field

    def create_user(self, name, email):
        sql = "INSERT INTO users (name, email) VALUES (%s, %s) RETURNING user_id"
        self.db.execute(sql, (name, email))
        self.db.commit()
        return self.db.fetchone()[0]
    
    
    @classmethod
    def get_by_id(cls, db, user_id):
        sql = "SELECT * FROM users WHERE user_id = %s"
        db.execute(sql, (user_id,))
        row = db.fetchone()
        if row:
            return cls(*row)
        return None


#Create User
@app.post("/users/")
def create_user(name: str, email: str, db: Database = Depends(get_db)):
    user = User(db)
    user_id = user.create_user(name, email)
    return {"user_id": user_id}

# ... Vote model ...
@app.get("/users/{user_id}")
def get_user(user_id: int, db: Database = Depends(get_db)):
    user = User.get_by_id(db, user_id)
    if user:
        return user
    else:
        return {"message": "User not found"}


class Vote:
    def __init__(self, vote_id, nominee_id, user_id, period_id, timespan):
        self.vote_id = vote_id
        self.nominee_id = nominee_id
        self.user_id = user_id
        self.period_id = period_id
        self.timespan = timespan

    @classmethod
    def create(cls, db, nominee_id, user_id, period_id, timespan):
        sql = "INSERT INTO vote (nominee_id, user_id, period_id, timespan) VALUES (%s, %s, %s, %s) RETURNING vote_id"
        db.execute(sql, (nominee_id, user_id, period_id, timespan))
        db.commit()
        vote_id = db.fetchone()[0]
        return cls(vote_id, nominee_id, user_id, period_id, timespan)

#Votes 

@app.post("/votes/")
def create_vote(nominee_id: int, user_id: int, period_id: int, timespan: int, db: Database = Depends(get_db)):
    vote = Vote.create(db, nominee_id, user_id, period_id, timespan)
    return {"vote_id": vote.vote_id}


#Nominees
class Nominee:
    def __init__(self, nominee_id, nominee_user_id, nominator_user_id, reason_for_nomination):
        self.nominee_id = nominee_id
        self.nominee_user_id = nominee_user_id
        self.nominator_user_id = nominator_user_id
        self.reason_for_nomination = reason_for_nomination

    @classmethod
    def create(cls, db, nominee_user_id, nominator_user_id, reason_for_nomination):
        try:
            sql = "INSERT INTO nominees (nominee_user_id, nominator_user_id, reason_for_nomination) VALUES (%s, %s, %s)"
            db.execute(sql, (nominee_user_id, nominator_user_id, reason_for_nomination))
            db.commit()
            nominee_id = db.cursor.fetchone()[0]
            return cls(nominee_id, nominee_user_id, nominator_user_id, reason_for_nomination)
        except psycopg2.errors.UniqueViolation as e:
            raise ValueError("User is already nominated")

    @classmethod
    def get_by_id(cls, db, nominee_id):
        sql = "SELECT * FROM nominees WHERE nominee_id = %s"
        db.execute(sql, (nominee_id,))
        row = db.fetchone()
        if row:
            return cls(*row)
        return None

    @classmethod
    def get_all(cls, db):
        sql = "SELECT * FROM nominees"
        db.execute(sql)
        rows = db.fetchall()
        return [cls(*row) for row in rows]

@app.post("/votes/")
def create_vote(nominee_id: int, user_id: int, period_id: int, timespan: int, db: Database = Depends(get_db)):
    vote = Vote.create(db, nominee_id, user_id, period_id, timespan)
    return {"vote_id": vote.vote_id}

@app.get("/users/{user_id}")
def get_user(user_id: int, db: Database = Depends(get_db)):
    user = User.get_by_id(db, user_id)
    if user:
        return user
    else:
        return {"message": "User not found"}

@app.post("/nominations/")
async def create_nomination(nominee_user_id: int, nominator_user_id: int, reason_for_nomination: str, db: Database = Depends(get_db)):
    try:
        nominee = Nominee.create(db, nominee_user_id, nominator_user_id, reason_for_nomination)
        return {"message": "Nominee created successfully"}
    except ValueError as e:
        return {"error": str(e)}


@app.get("/my-nominations")
async def get_my_nominations(user_id: int):
    cur.execute("SELECT * FROM nominations WHERE user_id = %s", (user_id,))
    nominations = cur.fetchall()
    return [nomination(**nomination) for nomination in nominations]

@app.get("/current-nominations")
async def get_current_nominations():
    cur.execute("SELECT * FROM nominations")
    nominations = cur.fetchall()
    return [nomination(**nomination) for nomination in nominations]

@app.get("/nominations/")
def get_all_nominations(db: Database = Depends(get_db)):
    nominations = Nominee.get_all(db)
    return nominations