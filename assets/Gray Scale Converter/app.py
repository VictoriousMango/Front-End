from flask import Flask, request, send_file, jsonify
from PIL import Image
import io
from flask_cors import CORS



app = Flask(__name__)
CORS(app)

@app.route('/')
def home():
    return "Hello World"

@app.route('/connectionStat', methods=['GET'])
def ConnectionStatus():
    Stat = {
        'Connection_Status' : "Connected"
    }
    return jsonify(Stat)

@app.route('/inputMethods', methods=['GET'])
def ipmethod():
    ipm = {
        'firstName' : {
            'Label' : 'First Name',
            'Type' : 'TextBox'
        },
        'lastName' : {
            'Label' : 'Last Name',
            'Type' : 'TextBox'
        },
        'img' : {
            'Label' : 'Upload the Image',
            'Type' : 'IMG-Uploader'
        },
        'pdf' : {
            "Label" : 'Upload the PDF',
            "Type" : 'PDF-Uploader'
        }
    }
    return jsonify(ipm)
@app.route('/upload', methods=['POST'])
def upload_image():
    if 'image' not in request.files:
        return "No file part", 400

    file = request.files['image']

    if file.filename == '':
        return "No selected file", 400

    try:
        # Open the image file
        img = Image.open(file.stream)

        # Convert the image to grayscale
        gray_img = img.convert('L')

        # Save the grayscale image to a BytesIO object
        img_byte_arr = io.BytesIO()
        gray_img.save(img_byte_arr, format='PNG')
        img_byte_arr.seek(0)

        # Send the grayscale image as response
        return send_file(img_byte_arr, mimetype='image/png')
    except Exception as e:
        return str(e), 500

if __name__ == '__main__':
    app.run(debug=True)
