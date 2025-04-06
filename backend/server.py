from flask import Flask
app = Flask(__name__)

@app.route('/')
def hello():
    return 'Hello World!'

@app.route('/api')
def api():
    return {"members": ["Member1", "Member2", "Member3"],}

if __name__ == '__main__':
    app.run(debug=True)