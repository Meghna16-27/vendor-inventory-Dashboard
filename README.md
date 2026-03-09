## **Vendor Inventory Dashboard**

A Vendor Inventory Dashboard built with React.js, enabling vendors to manage their products efficiently with a clean UI and persistent storage. The dashboard supports full CRUD (Create, Read, Update, Delete) operations.

## **Tech Stack**

- **Frontend:** React.js  
- **State Management:** React Hooks (`useState`, `useEffect`)  
- **Storage:** NoSQL database (MongoDB)  
- **Styling:** Tailwind CSS / CSS Modules / Bootstrap

## **Features**

1. <u>Create (Product Entry)</u>  
   - Add new products using a simple form.  
   - **Fields required:**  
     - Product Name  
     - Price  
     - Category (Dropdown)  
     - Stock Quantity  
   - **Validation:** Prevent submission if any field is empty. Price and Stock must be positive numbers.  

2. <u>Read (Inventory Display)</u>  
   - Display all saved products in a **table or grid view**.  
   - Data persists on page refresh using **localStorage** or a database.  

3. <u>Update (Inline Edit)</u>  
   - Each product row has an **Edit** button.  
   - Allows updating **Price** and **Stock Quantity** only.  

4. <u>Delete (Remove Product)</u>  
   - Each product row has a **Remove** button.  
   - Deletes the item from both **UI** and **localStorage/database**.


## Styling

- Clean UI implemented with **Tailwind CSS**.  
- Responsive table for better desktop experience.  

## Notes

- **Price** and **Stock** are validated to ensure positive numbers only.  
- **Category** field uses a dropdown for consistency.  
