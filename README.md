# React Login Count and Date Application

## Overview
This application allows users to log in, tracks the number of logins, and records the date of each login. The frontend is built with React.js, while the backend uses Node.js, Express, and MongoDB. 

## Prerequisites
Make sure you have Node.js and npm installed on your machine.

## Backend Setup (Node.js)

### 1. Install Necessary Packages
Run the following command to install the required packages:

```bash
npm install dotenv nodemon bcrypt express mongoose 
dotenv: This package loads environment variables from a .env file into process.env. It allows you to separate secrets like database connection strings, API keys, and other sensitive data from your codebase.

nodemon: A utility that monitors changes in your Node.js application and automatically restarts the server. This is helpful during development to save time by avoiding manual restarts.

bcrypt: A library for hashing passwords. It helps to securely store user passwords in the database by generating a cryptographic hash that makes it difficult for attackers to reverse-engineer.

express: A minimal and flexible Node.js web application framework that provides a robust set of features for building web and mobile applications. It simplifies routing and middleware management.

mongoose: An Object Data Modeling (ODM) library for MongoDB and Node.js. It provides a straightforward schema-based solution to model your application data and makes it easier to interact with MongoDB.

cors: Middleware that allows you to configure Cross-Origin Resource Sharing (CORS) in your application. This is essential for connecting your React frontend with your Node.js backend, as it enables requests from different origins.

Frontend Setup (React.js)
1. Install Necessary Packages
Navigate to your React project directory and install the following package:

npm install axios

axios: A promise-based HTTP client for the browser and Node.js. It is used to make HTTP requests from your React frontend to the backend API. Axios simplifies handling requests and responses, including GET, POST, PUT, and DELETE operations.
Running the Application

Backend

Create a .env file in the root of your backend project with the necessary environment variables, such as your database connection string and JWT secret.
Start the backend server with nodemon:

nodemon server.js
Frontend
Start the React application:

npm start
Your application should now be running with the React frontend and Node.js backend connected.

![image](https://github.com/user-attachments/assets/9792c0c8-38cf-4ce6-a6e3-801fbebfe877)

**Sign Up Page**


![image](https://github.com/user-attachments/assets/6cca9257-f1fe-48af-a6c3-f11438aaa33a)

### Sign In Page

![image](https://github.com/user-attachments/assets/408a16cd-e193-4d1f-8c3c-9f44f6d030ad)

**User Profile Page**

![image](https://github.com/user-attachments/assets/802bf941-09df-4577-8a04-33fdaf7f85ed)

**User details gets stored in MongoDB Collections.**




