# The-Blog-Cafe
## Important Note :
This repository is currently under active development and is not yet complete. Contributions are welcome!
## Getting Started
Follow these steps to set up and run the project locally on your machine.
### Clone the Repository
```bash
git clone https://github.com/GouravDutta-01/The-Blog-Cafe.git
```
Navigate to the root directory of the project
```bash
cd The-Blog-Cafe
```
### Frontend Setup
Navigate to the frontend directory:
```bash
cd frontend
```
Install dependencies:
```bash
npm install
```
### Backend Setup
Open a new terminal in the project's root directory and navigate to the backend directory:
```bash
cd backend
```
Create a .env file in the backend directory and add the following content:
```env
MONGO_URL=your_mongo_db_uri_here
```
Replace <b>your_mongo_db_url_here</b> with your actual MongoDB connection URL.<br/><br/>
Create an <b>"images"</b> folder inside the backend directory. This folder will be used to store uploaded images.
```bash
mkdir images
```
Install dependencies:
```bash
npm install
```
### Run the Application
<b>Backend</b><br/>
Open a new terminal in the project's root directory and navigate to the backend directory:
```bash
cd backend
```
Run the backend:
```bash
npm start
```
The backend will start at http://localhost:5000<br/><br/>
<b>Frontend</b><br/>
Open a new terminal in the project's root directory and navigate to the frontend directory:
```bash
cd frontend
```
Run the frontend:
```bash
npm start
```
Now, you should be able to access the full application by visiting http://localhost:3000 in your web browser.
