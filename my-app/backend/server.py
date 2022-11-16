from flask import Flask 
import datetime

x = datetime.datetime.now()

app = Flask(__name__)

@app.route('/data')

def get_time():

    return {

        'lyrics':'Icarus was my best friend So Im gonna make him proud in the end'
    }


if __name__ == '__main__':
    app.run(debug=True)