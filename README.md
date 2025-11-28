#🛍️ MERN Stack E-commerce Store  
This is an E-commerce Store  
  
✨ Features  
Product Catalog: Simple CRUD capability  
  
🛠️ Tech Stack  
Frontend  
React: JavaScript library for building the user interface.  
React Router: For navigation and routing.  
Zustand: For state management.  
Backend  
Node.js & Express.js: Server-side runtime environment and web application framework.  
MongoDB & Mongoose: NoSQL database and an ODM (Object Data Modeling) library for Node.js.  
JSON Web Token (JWT): For secure authentication.  
Bcrypt: For password hashing.  ur 

🚀 Getting Started  
Follow these steps to get your development environment set up and run the project locally.  
  
Prerequisites:  
You need the following software installed on your machine:  
Node.js (LTS version recommended)  
npm (comes with Node.js)  
MongoDB (Local installation or a MongoDB Atlas account)

1. Clone the repository  
Type the following inside your terminal:
https://github.com/tapfumamanhanga/mern-product-store.git  
cd mern-ecommerce-store

2. Configure Environment Variables  
Create a file named .env in the root directory and the backend directory (if separated) and add your configuration details:  
Root/Backend .env Example:
NODE_ENV=development
PORT=5000
MONGO_URI=mongodb+srv://<user>:<password>@clustername.mongodb.net/mern_store?retryWrites=true&w=majority
JWT_SECRET=your_strong_jwt_secret
# Payment Gateway Keys (e.g., Stripe)
STRIPE_SECRET_KEY=sk_test_...


3. Install Dependencies
Install packages for both the backend and frontend.  
Bash  
  
# Install backend dependencies  
npm install  

# Change directory to the client (frontend) folder and install
cd client
npm install
cd ..
