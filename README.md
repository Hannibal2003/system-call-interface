# System Call Interface

This project appears to be a web-based interface for interacting with system calls, likely implemented using Python and Flask.

## Project Structure

-   `backend/`: Contains the Python Flask application.
    -   `app.py`: The main application file.
    -   `static/`: Static files (CSS, JavaScript, images).
    -   `templates/`: HTML template files.
    -   `logs/`: Directory for logs, including `system_calls.log`.
-   `requirements.txt`: Lists the Python dependencies required to run the backend.

## Setup

1.  **Clone the repository:**
    ```bash
    git clone <repository_url>
    cd system-call-interface
    ```
    (Replace `<repository_url>` with the actual repository URL if applicable)

2.  **Install dependencies:**
    It is recommended to use a virtual environment.
    ```bash
    # Create a virtual environment (optional but recommended)
    python -m venv venv
    # Activate the virtual environment
    # On Windows:
    # venv\Scripts\activate
    # On macOS/Linux:
    # source venv/bin/activate

    # Install dependencies
    pip install -r requirements.txt
    ```

## How to Run

1.  **Activate your virtual environment** (if you created one):
    ```bash
    # On Windows:
    # venv\Scripts\activate
    # On macOS/Linux:
    # source venv/bin/activate
    ```

2.  **Navigate to the backend directory:**
    ```bash
    cd backend
    ```

3.  **Run the Flask application:**
    ```bash
    python app.py
    ```

4.  The application should now be running, likely accessible via a web browser at `http://127.0.0.1:5000/` (or similar, depending on the Flask configuration in `app.py`).

## Usage

(Add details on how to use the web interface once the application is running. This section may need to be updated after examining `app.py` and `index.html`.)

## Logging

System call interactions are logged to `backend/logs/system_calls.log`.