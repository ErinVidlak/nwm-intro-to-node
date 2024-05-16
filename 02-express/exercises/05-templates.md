# Exercise: Create a Dynamic Website with Express and EJS

## Objective
Practice using Express with the EJS template engine to render dynamic content based on server-side data.

## Task
Build a dynamic website that displays a list of items (e.g., products, books, movies) retrieved from server-side data. Each item should have a name and a brief description.

## Instructions
1. **Setup Your Express Project**:
   - If you do not already have an Express setup, create a new project and install necessary packages.
   - Install EJS as your template engine.

2. **Configure Express to Use EJS**:
   - Set EJS as the view engine and define the views directory.

3. **Create EJS Templates**:
   - Create an `index.ejs` file in the `views` directory.
   - Design the `index.ejs` to display a list of items dynamically. Each item should be represented as an HTML element with its name and description.

4. **Create Server-Side Data**:
   - In your route handler, define an array of objects. Each object should represent an item with a `name` and `description`.

5. **Render the Template with Data**:
   - Add a route that renders the `index.ejs` template, passing the array of items to it.

6. **Test Your Application**:
   - Start your Express server and navigate to your route. Ensure the web page displays all items correctly formatted.

## Example of Data Structure
```javascript
let items = [
    { name: 'Book', description: 'A detailed look at coding practices.' },
    { name: 'Movie', description: 'A compelling drama about love and loss.' },
    { name: 'Product', description: 'Latest tech gadget for 2024.' }
];
```

## Hint
- Use the EJS syntax `<%= %>` to output data into your HTML.

## Expected Output
- The web page rendered at your route should dynamically list all items, displaying their names and descriptions.
