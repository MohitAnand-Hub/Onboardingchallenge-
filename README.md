Proplens Sales Admin Panel
Project Overview
This is a front-end implementation of the Sales Admin Panel, built with Next.js 14, TypeScript, and Tailwind CSS. The application is designed to be a small, production-quality prototype, replicating the two provided mock-up screens.

The key features and implemented components include:

Responsive Layout: A two-column layout that adapts for both desktop (1440px) and mobile (375px) breakpoints.

Interactive Project Management: Users can add new projects via a modal and delete existing ones. The project list updates in real-time on the page.

SOP & Policies Page: A separate, fully-styled page for managing standard operating procedures, complete with a file upload section and a list of existing documents, matching the mock-up precisely.

Client-Side Navigation: The sidebar uses Next.js's routing to provide smooth, client-side navigation between the "Our projects" and "SOP & Policies" pages.

End-to-End Testing: The project includes a Cypress E2E test to verify the critical navigation and core interactive flows of the application.

Prerequisites
Before you begin, ensure you have the following installed on your machine:

Node.js (version 18.x or later)

npm (comes with Node.js)

Project Setup and Execution
Follow these steps to set up and run the complete scenario on your local machine.

1. Clone the repository and install dependencies
First, clone the project from its Git repository and navigate into the project directory.

git clone <repository-url>
cd sales-admin-panel

Next, install all the required npm packages. This includes the Next.js framework, React, Tailwind CSS, and Cypress.

npm install

2. Run the development server
Start the Next.js development server in one terminal. This will compile your code and make the application available locally.

npm run dev

The application will be accessible at http://localhost:3000. Keep this server running as it is required for the tests.

3. Run the E2E tests
With the development server running, open a new terminal and launch the Cypress Test Runner.

npm run cypress:open

This command will open the Cypress application. From the Cypress UI, click on the navigation.cy.ts file under the E2E Testing section. This will run the tests in an automated browser instance.
<img width="1912" height="1021" alt="image" src="https://github.com/user-attachments/assets/dda93127-1e8a-4e17-8f39-c5168f7df53f" />

The test script will verify that:

The home page renders correctly with all key elements visible.

The "Add New Project" modal can be opened, and a new project can be added.

An existing project can be deleted successfully from the list.

The Cypress Test Runner provides a visual log of all commands and assertions, allowing you to see the test pass in real-time. This confirms that the critical navigation and interactive flows are working as expected
