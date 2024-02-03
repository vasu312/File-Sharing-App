# Node.js File Sharing Project

Developed using a robust stack of technologies, including EJS for templating, Express.js as the web application framework, Sequelize ORM for seamless database interactions with MySQL, Multer for efficient file uploads, and Bcrypt for secure password hashing, this Node.js project stands as a comprehensive solution for facilitating file sharing functionalities.


## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js
- Express.js
- MySQL
- Sequelize ORM


## Technologies Used

 - Node.js: Server-side JavaScript runtime.
 - Express.js: Web application framework for Node.js.
 - Multer: It is a node.js middleware which is used for uploading files.
 - MySQL: Relational database for data storage.
 - Sequelize ORM: Object-Relational Mapping for easy database interaction.
 - Bcrypt: Password hashing for enhanced security.


## Getting Started

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/file-sharing-nodejs.git
   ```

2. Navigate to the project directory:
    ```bash
    cd file-sharing-nodejs
    ```

3. Install dependencies:
    ```bash
    npm install
    ```

4. Configure the database:
    - Create a MySQL database.
    - Copy the .env file and update the database credentials.
    ```bash
    DATABASE=node
    NAME=YOUR_USERNAME
    PASSWORD=YOUR_PASSWORD
    HOST=localhost
    DIALECT=mysql
    ```
    Update the values with your specific configuration details.

5. Start the application:
    Start the development server:
    ```bash
    nodemon server.js
    ```
    The application will be accessible at http://localhost:3000.


## Database Models
The project includes Sequelize models for handling users and contacts. Update the models in the models directory according to your data structure.


## Contributing
Feel free to contribute to this project. Open an issue or create a pull request.

