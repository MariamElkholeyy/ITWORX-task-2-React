import psycopg2
import psycopg2.extras
import json

# Database connection settings
DB_HOST = 'localhost'
DB_NAME = 'mydatabase'
DB_USER = 'myuser'
DB_PASSWORD = 'mypassword'

# Connect to the database
conn = psycopg2.connect(
    host=DB_HOST,
    database=DB_NAME,
    user=DB_USER,
    password=DB_PASSWORD
)

# Create a cursor object to execute queries
cur = conn.cursor(cursor_factory=psycopg2.extras.DictCursor)

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

def get_home():
    cur.execute("SELECT * FROM nominations")
    nominations = cur.fetchall()
    return json.dumps([dict(row) for row in nominations])

def get_nominations():
    cur.execute("SELECT * FROM nominations")
    nominations = cur.fetchall()
    return json.dumps([dict(row) for row in nominations])

def get_nomination(id):
    cur.execute("SELECT * FROM nominations WHERE id = %s", (id,))
    nomination = cur.fetchone()
    if nomination:
        return json.dumps(dict(nomination))
    else:
        return json.dumps({'message': 'Nomination not found'}), 404

def create_nomination(title, description):
    cur.execute("INSERT INTO nominations (title, description) VALUES (%s, %s)", (title, description))
    conn.commit()
    return json.dumps({'message': 'Nomination created successfully'})

def update_nomination(id, title, description):
    cur.execute("UPDATE nominations SET title = %s, description = %s WHERE id = %s", (title, description, id))
    conn.commit()
    return json.dumps({'message': 'Nomination updated successfully'})

def delete_nomination(id):
    cur.execute("DELETE FROM nominations WHERE id = %s", (id,))
    conn.commit()
    return json.dumps({'message': 'Nomination deleted successfully'})

def get_votes():
    cur.execute("SELECT * FROM votes")
    votes = cur.fetchall()
    return json.dumps([dict(row) for row in votes])

def cast_vote(nomination_id, user_id):
    cur.execute("INSERT INTO votes (nomination_id, user_id) VALUES (%s, %s)", (nomination_id, user_id))
    conn.commit()
    return json.dumps({'message': 'Vote cast successfully'})

def get_vote(id):
    cur.execute("SELECT * FROM votes WHERE id = %s", (id,))
    vote = cur.fetchone()
    if vote:
        return json.dumps(dict(vote))
    else:
        return json.dumps({'message': 'Vote not found'}), 404

def delete_vote(id):
    cur.execute("DELETE FROM votes WHERE id = %s", (id,))
    conn.commit()
    return json.dumps({'message': 'Vote deleted successfully'})

def get_nomination_form():
    cur.execute("SELECT * FROM nomination_categories")
    categories = cur.fetchall()
    return json.dumps([dict(row) for row in categories])

def submit_nomination_form(title, description):
    cur.execute("INSERT INTO nominations (title, description) VALUES (%s, %s)", (title, description))
    conn.commit()
    return json.dumps({'message': 'Nomination form submitted successfully'})

# Example usage:
print(login('username', 'password'))
print(register('newuser', 'newpassword'))
print(get_home())
print(get_nominations())
print(get_nomination(1))
print(create_nomination('New Nomination', 'This is a new nomination'))
print(update_nomination(1, 'Updated Nomination', 'This is an updated nomination'))
print(delete_nomination(1))
print(get_votes())
print(cast_vote(1, 1))
print(get_vote(1))
print(delete_vote(1))
print(get_nomination_form())
print(submit_nomination_form('New Nomination', 'This is a new nomination'))