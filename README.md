# WebApp - Angular Application

## Overview

This project is an Angular web application designed to manage users. The application includes components for displaying, creating, updating, and deleting users, as well as a service for performing CRUD operations using mock API endpoints.

## Features

- **User List**: Displays a list of users.
- **User Detail**: Shows the details of a specific user by ID.
- **User Form**: Allows adding and editing user details.
- **Routing**: Configured routes for navigating between components.
- **CRUD Operations**: Implemented using a service with HTTP requests to a mock API.

## Mock API
- **In-Memory Web API**: Allows simulating backend server communication in angular by providing mock API endpoints
    Note:
    - Allows data persistence
    - Requires real server to be set up
    npm:https://www.npmjs.com/package/angular-in-memory-web-api 

- **Simple Express**: simple express server that hold the users array externally.
    Note:
    - Allows data persistence
    - Requires real server to be set up