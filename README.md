# 🏨 StayNest - Hotel Booking Platform

StayNest is a full-stack web application inspired by Airbnb, designed to provide a seamless and intuitive platform for users to browse, list, and review accommodations. Built with **Node.js, Express, and MongoDB**, this project showcases a complete server-rendered application with robust features for both users and property owners.

****

## ✨ Key Features

* **User Authentication:** Secure user registration and login system using Passport.js for session management.
* **Server-Side Rendering:** Uses EJS as a templating engine to dynamically generate HTML on the server.
* **CRUD Operations for Listings:**
    * **Create:** Authenticated users can easily add new properties to the platform.
    * **Read:** View detailed information for each property, including descriptions, images, and pricing.
    * **Update:** Property owners can edit the details of their listings.
    * **Delete:** Property owners have the ability to remove their listings.
* **Cloud-Based Image Uploads:** Integrates with Cloudinary for efficient and scalable image storage and management.
* **Interactive Reviews:** Users can post reviews and ratings for properties, which are displayed on the listing's detail page.
* **Schema Validation:** Implements server-side schema validation to ensure data integrity before saving to the database.
* **MVC Architecture:** Follows the Model-View-Controller (MVC) pattern for a clean, organized, and scalable codebase.

---

## 🛠️ Tech Stack & Tools

* **Frontend:**
    * **EJS:** As the templating engine for server-side rendering of views.
    * **HTML5 & CSS3:** For the structure and styling of the application.
    * **Bootstrap:** For creating a responsive and mobile-first design.
* **Backend:**
    * **Node.js & Express.js:** To build the robust and scalable server and RESTful APIs.
    * **MongoDB:** As the NoSQL database for storing data.
    * **Mongoose:** As the Object Data Modeling (ODM) library to interact with MongoDB.
* **Authentication:**
    * **Passport.js (Local Strategy):** For handling user authentication and sessions.
* **Image Handling:**
    * **Cloudinary:** For cloud-based image storage.
    * **Multer:** As middleware for handling `multipart/form-data`, used for file uploads.
* **Utilities:**
    * **connect-flash:** For displaying flash messages.
    * **express-session:** For session management.
    * **method-override:** To use HTTP verbs like PUT and DELETE in HTML forms.

---

## 🚀 Getting Started

Follow these instructions to set up and run the project on your local machine.

### **Prerequisites**

* Node.js installed on your machine.
* A MongoDB account (you can use a free cloud instance from [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)).
* A Cloudinary account for handling image uploads.

### **Installation & Setup**

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/Sheel9305/StayNest.git](https://github.com/Sheel9305/StayNest.git)
    cd StayNest
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Set up environment variables:**
    Create a file named `.env` in the root of the project and add the following variables. Replace the placeholder values with your actual credentials.
    ```env
    # Cloudinary Credentials
    CLOUD_NAME=your_cloudinary_cloud_name
    CLOUD_API_KEY=your_cloudinary_api_key
    CLOUD_API_SECRET=your_cloudinary_api_secret

    # MongoDB Connection URL
    MONGO_URL=your_mongodb_connection_string

    # Secret for signing the session ID cookie
    SECRET=a_strong_secret_string
    ```

4.  **Run the application:**
    ```bash
    npm start
    ```

The application should now be running on `http://localhost:8080`.

---


