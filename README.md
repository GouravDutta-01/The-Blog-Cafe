# The-Blog-Cafe
Welcome to The-Blog-Cafe. This is a web application that enables users to create, update, and delete their blogs. Users can also explore blogs from other authors. The frontend is built using Material-UI and React.js, while the backend is powered by Express.js, Node.js, and MongoDB.

## Features
- User authentication: Register and login to manage your blogs.
- CRUD operations for blogs: Create, read, update, and delete blogs.

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
MONGO_URL=your_mongo_db_url_here
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

## Contributing
This project is currently under active development, and your contributions are highly valued! If you'd like to contribute to the development of this project, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and commit them.
4. Push your changes to your fork.
5. Submit a pull request.
We appreciate your help in making this project better!
