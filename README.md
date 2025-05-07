
                  🚀 Country Information App with Session Cookies
📖 Overview

Welcome to the Country Information App! This app provides detailed information about countries, such as their name, region, language, and flag. It allows users to search countries, filter by region and language, and view detailed country-specific information.

Additionally, the app supports user authentication and session cookies to manage guest users' sessions.
✨ Features

    🌍 Country Information: Display country details like name, region, language, and flag.

    🔍 Search Functionality: Search countries by name.

    ⚙️ Filters: Filter countries by region and language.

    👥 Session Management for Guest Users: Automatically create and store a session for guest users.

    🔐 User Authentication: Login and register functionality.

    🍪 Cookie Consent: Display a consent message for cookies on first visit, allowing users to accept or decline cookies.

    🛡️ JWT Authentication: Handle secure user login with JWT.

💻 Technologies Used

    Frontend: React.js, React Router, js-cookie (for cookie management)

    Backend: Node.js, Express, MongoDB, bcryptjs (for password hashing), jsonwebtoken (for JWT authentication)

    Database: MongoDB

    API: Custom API for authentication and country data fetching

    Cookie Management: js-cookie (for handling session cookies)

🛠️ Backend Setup
⚙️ Prerequisites

    Node.js installed (version 14.x or higher)

    MongoDB running locally or using a cloud service (e.g., MongoDB Atlas)

📝 Steps to Set Up Backend
1. **Clone the repository**:
    ```bash
    git clone <your-repository-url>
    cd your-project-folder
    ```

2. **Install dependencies**:
    Install the required packages using npm:
    ```bash
    npm install
    ```

3. **Create environment variables**:
    Create a `.env` file in the root directory and add the following:
    ```bash
    JWT_SECRET=<your-secret-key>
    MONGODB_URI=<your-mongodb-connection-string>
    ```

4. **Run the server**:
    Start the server:
    ```bash
    npm start
    ```
    This will run the backend server on `http://localhost:5000`.

🌐 Frontend Setup
⚙️ Prerequisites

    Node.js installed (version 14.x or higher)

    npm or yarn package manager

📝 Steps to Set Up Frontend
1. **Clone the repository**:
    ```bash
    git clone <your-repository-url>
    cd your-project-folder
    ```

2. **Install dependencies**:
    ```bash
    npm install
    ```

3. **Run the app**:
    Start the frontend app:
    ```bash
    npm start
    ```

    This will run the frontend on `http://localhost:3000`.

🔑 API Endpoints
📝 Authentication API

    🚀 Register User
  - **URL**: `POST /api/auth/register`
  - **Body**:
    ```json
    {
      "username": "your-username",
      "email": "user@example.com",
      "password": "your-password"
    }
    ```
  - **Response**:
    ```json
    {
      "token": "JWT_TOKEN"
    }
    ```

- 🔑 Login User
  - **URL**: `POST /api/auth/login`
  - **Body**:
    ```json
    {
      "email": "user@example.com",
      "password": "your-password"
    }
    ```
  - **Response**:
    ```json
    {
      "token": "JWT_TOKEN",
      "username": "user-username"
    }
    ```

🌍 Country Information API

    📜 Fetch All Countries
  - **URL**: `GET /api/countries`
  - **Response**:
    ```json
    [
      {
        "name": "Country Name",
        "region": "Region",
        "languages": ["Language1", "Language2"],
        "flag": "URL-to-flag-image"
      },
      ...
    ]
    ```

- 🔍 Fetch Country by Name
  - **URL**: `GET /api/countries/name/:name`
  - **Response**:
    ```json
    {
      "name": "Country Name",
      "capital": "Capital",
      "region": "Region",
      "languages": ["Language1", "Language2"],
      "flag": "URL-to-flag-image"
    }
    ```

- 🌏 Fetch Countries by Region
  - **URL**: `GET /api/countries/region/:region`
  - **Response**:
    ```json
    [
      {
        "name": "Country Name",
        "region": "Region",
        "languages": ["Language1", "Language2"],
        "flag": "URL-to-flag-image"
      },
      ...
    ]
    ```

🍪 Session Management with Cookies

    🍪 Session Cookie: A session ID is created for guest users and stored in a cookie when they first visit the site.

    ⏳ Cookie Expiration: The cookie expires after 5 minutes.

    💬 Accept/Decline Cookie Consent: When a user first visits the site, they are asked to accept or decline cookies. If accepted, a session cookie is set for 5 minutes. If declined, the banner is hidden, and no cookies are set.

    📦 Use js-cookie: The js-cookie library is used to manage the session cookie in the frontend.

🔧 How to Use the Application

1. **Run the backend server** (`npm start` in the backend folder) and the frontend server (`npm start` in the frontend folder).
2. **Visit** the app at `http://localhost:3000`.
3. **Search for countries** using the search bar.
4. **Filter countries** by region and language.
5. **Login/Logout** using the provided authentication system.
6. **Guest User**: A session cookie is automatically created for the guest user when they first visit the website.

👨‍💻 Contributing

1. Fork the repository.
2. Clone your forked repository.
3. Create a new branch (`git checkout -b feature/your-feature`).
4. Commit your changes (`git commit -am 'Add new feature'`).
5. Push to the branch (`git push origin feature/your-feature`).
6. Open a pull request.

📝 License

This project is licensed under the MIT License.

🌟 Final Notes

    💡 Quality of Code: This project follows best practices for React and Node.js development. It includes modular components and well-structured code.

    ⚠️ Error Handling: Proper error handling is implemented in the backend for login, registration, and API calls.

    🔐 Session Management: Secure session management is ensured using cookies and JWT.



📬 Contact

Maintainer: Kavindu Kalhara Ediriweera

Email: kavindukalharaofficial@gmail.com

GitHub: github.com/kalhara-ediriweera

Phone: +94710347359

