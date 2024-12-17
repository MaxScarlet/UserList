import { Component } from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent {
    overview = "This project is an Angular web application designed to manage users. The application includes components for displaying, creating, updating, and deleting users, as well as a service for performing CRUD operations using mock API endpoints.";

    features = [
        "User List: Displays a list of users.",
        "User Detail: Shows the details of a specific user by ID.",
        "User Form: Allows adding and editing user details.",
        "Routing: Configured routes for navigating between components.",
        "CRUD Operations: Implemented using a service with HTTP requests to a mock API."
    ];

    mockApiDetails = {
        inMemoryWebApi: {
            title: "In-Memory Web API",
            description: "Allows simulating backend server communication in Angular by providing mock API endpoints.",
            notes: [
                "Allows data persistence.",
                "Requires real server to be set up."
            ]
        },
        simpleExpress: {
            title: "Simple Express",
            description: "A simple Express server that holds the users array externally.",
            notes: [
                "Allows data persistence.",
                "Requires real server to be set up."
            ]
        }
    };
}
