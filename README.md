
# Saraha App - Backend

A simple anonymous messaging application built using Node.js, Express.js, and MySQL.

## Features

- User Registration (Signup)
- Password Hashing using bcrypt
- User Login
- JWT Authentication
- Send Anonymous Messages
- Receive Messages (Inbox)

## Technologies Used

- Node.js
- Express.js
- MySQL
- Sequelize ORM
- bcrypt
- JSON Web Token (JWT)
- Postman

## Installation

1. Clone the repository.
2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file in the root directory and configure:

```env
PORT=3000
DB_HOST=localhost
DB_PORT=3306
DB_NAME=saraha_db
DB_USER=your_database_user
DB_PASSWORD=your_database_password
JWT_SECRET=your_secret_key
```

4. Run the project:

```bash
npm run dev
```

## API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| POST | /users/signup | Register a new user |
| POST | /users/login | Login |
| POST | /messages/send | Send anonymous message |
| GET | /messages/inbox | Get received messages |

## Author

Mennatallah Elshaer
