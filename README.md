# Simple realstate app

## What this project is about?

This project is a real estate listing application built with React. It allows users to view and filter properties based on various criteria such as bedrooms, bathrooms, parking, and price range. The application fetches property data from a local JSON file and displays it in a list format. Users can click on a property to view its details and contact the agent.

Key features include:
- Property listing with filtering options using the `useFilterHook`.
- Detailed property view with contact form validation using the `useValidationHook`.
- Routing for different pages using React Router, defined in `routes.js`.
- Components for displaying property cards (`Card`), filter range (`SlideRange`), and modals (`Modal`).

The project structure includes:
- public: Static files and data.
- src: Source code for the React application.
- Components: Reusable components.
- Hooks: Custom hooks for filtering and validation.
- Pages: Page components for different views.
- Services: Services for fetching data.

To run the project, use the following commands:
```sh
npm install
npm start
```