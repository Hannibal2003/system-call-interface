from flask import Flask, request, jsonify, render_template
import os
import time

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')

# Read File 
@app.route('/system-calls/read-file', methods=['POST'])
def read_file():
    data = request.get_json()
    filename = data.get('filename', '')

    if not filename or not os.path.exists(filename):
        return jsonify({"error": "File not found"}), 404

    with open(filename, 'r') as file:
        content = file.read()

    file_info = os.stat(filename)
    size = file_info.st_size
    modified = time.ctime(file_info.st_mtime)

    return jsonify({"content": content, "size": size, "modified": modified})

# Write File
@app.route('/system-calls/write-file', methods=['POST'])
def write_file():
    data = request.get_json()
    filename = data.get('filename', '')
    content = data.get('content', '')

    try:
       
        with open(filename, 'a') as file:
            file.write(content + "\n")  

        return jsonify({"message": "File updated successfully" if os.path.exists(filename) else "File created successfully"})

    except Exception as e:
        return jsonify({"error": str(e)}), 500

# Delete File 
@app.route('/system-calls/delete-file', methods=['POST'])
def delete_file():
    data = request.get_json()
    filename = data.get('filename', '')

    if not os.path.exists(filename):
        return jsonify({"error": "File not found"}), 404

    os.remove(filename)
    return jsonify({"message": "File deleted successfully"})

if __name__ == '__main__':
    app.run(debug=True)
