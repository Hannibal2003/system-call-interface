const apiBase = "/system-calls/";

function showForm(action) {
    
    const forms = document.querySelectorAll('.form-section');
    forms.forEach(form => form.style.display = 'none');
    document.getElementById(action + '-form').style.display = 'block';
}

// Read file
function readFile() {
    let filename = document.getElementById("read-filename").value;

    fetch(apiBase + "read-file", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ filename: filename })
    })
    .then(response => response.json())
    .then(data => {
        if (data.content) {
            document.getElementById("file-content").innerText = data.content;
            document.getElementById("file-properties").innerText = `📏 Size: ${data.size} bytes | 📅 Last Modified: ${data.modified}`;
        } else {
            document.getElementById("file-content").innerText = "Error: " + data.error;
        }
    });
}

// Write file
function writeFile() {
    let filename = document.getElementById("write-filename").value;
    let content = document.getElementById("file-text").value;

    fetch(apiBase + "write-file", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ filename: filename, content: content })
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById("write-message").innerText = data.message || "Error: " + data.error;
    });
}

// Delete file
function deleteFile() {
    let filename = document.getElementById("delete-filename").value;

    fetch(apiBase + "delete-file", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ filename: filename })
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById("delete-message").innerText = data.message || "Error: " + data.error;
    });
}
