Vendor Inventory Dashboard

A Vendor Inventory Dashboard built with React.js, enabling vendors to manage their products efficiently with a clean UI and persistent storage. The dashboard supports full CRUD (Create, Read, Update, Delete) operations.

 Tech Stack

Frontend: React.js

State Management: React Hooks (useState, useEffect)

Storage: NoSQL database (MongoDB)

Styling: Tailwind CSS / CSS Modules /Bootstrap

 Features
1. Create (Product Entry)

Add new products using a simple form.

Fields required:

Product Name

Price

Category (Dropdown)

Stock Quantity

Validation: Prevent submission if any field is empty. Price and Stock must be positive numbers.

2. Read (Inventory Display)

Display all saved products in a table or grid view.

Data persists on page refresh using localStorage or database.

3. Update (Inline Edit)

Each product row has an Edit button.

Allows updating Price and Stock Quantity only.

4. Delete (Remove Product)

Each product row has a Remove button.

Deletes the item from both UI and database

