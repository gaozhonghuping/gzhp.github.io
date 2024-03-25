from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/meiqu')
def index():
    return render_template('meiqu.html')

@app.route('/yingqu')
def index():
    return render_template('yingqu.html')

@app.route('/aoqu')
def index():
    return render_template('aoqu.html')

@app.route('/jiaqu')
def index():
    return render_template('jiaqu.html')

@app.route('/zhongqu')
def index():
    return render_template('zhongqu.html')

@app.route('/gangqu')
def index():
    return render_template('gangqu.html')

@app.route('/qita')
def index():
    return render_template('qita.html')

if __name__ == '__main__':
    app.run(debug=True)