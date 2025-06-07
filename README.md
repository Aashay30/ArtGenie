# 🎨 Art Genie  

**Turn your imagination into stunning AI-generated art!**  

Welcome to **Art Genie**, the ultimate web application where you can create breathtaking images from text prompts. Powered by cutting-edge AI and built with the MERN stack, Art Genie is your gateway to exploring the fusion of technology and creativity.  

---

![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)![ReactJS](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)![Framer Motion](https://img.shields.io/badge/Framer-black?style=for-the-badge&logo=framer&logoColor=blue)![NodeJS](https://img.shields.io/badge/Node%20js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)![ExpressJS](https://img.shields.io/badge/Express%20js-000000?style=for-the-badge&logo=express&logoColor=white)![MongoDB](	https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)![RazorPay](https://img.shields.io/badge/Razorpay-02042B?style=for-the-badge&logo=razorpay&logoColor=3395FF)![JWT](https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=JSON%20web%20tokens&logoColor=white)

---

## 🚀 Features  

✨ **Text-to-Image Generation**  
- Input any text prompt, and let Art Genie transform your words into stunning visuals using Google Gemini AI.  

💳 **Buy Credits Seamlessly**  
- Purchase more credits to generate additional images using Razorpay's secure payment gateway.  

🔒 **Secure User Authentication**  
- Your data is safe with us! Authentication is powered by JWT and bcrypt for maximum security.  

💃 **Smooth Animations**  
- Enjoy a visually engaging experience with seamless transitions and animations using Framer Motion.  

📱 **Responsive Design**  
- Access Art Genie on any device. Tailwind CSS ensures a stunning, user-friendly interface across all screen sizes.  

---

## 🛠️ Tech Stack  

**Frontend**:  
- React.js  
- Tailwind CSS for responsive design and styling  
- Framer Motion for animations  

**Backend**:  
- Node.js  
- Express.js  
- MongoDB + Mongoose  

**Other Tools**:  
- Clipdrop API for AI-generated images  
- Razorpay for payments  
- JWT and bcrypt for authentication  

---

## 🛒 How It Works  

1. **Sign Up / Log In** 🔑  
   Create an account or log in to access the features.  

2. **Enter a Text Prompt** ✍️  
   Describe your idea or vision in words.  

3. **Generate AI Art** 🎨  
   Click on "Generate" and watch your words turn into stunning artwork!  

4. **Buy Credits** 💳  
   Purchase more credits directly through Razorpay when needed.  

5. **Download and Share** 🖼️  
   Save your masterpiece or share it with the world!  

---

## 📸 Screenshots  

Take a visual tour of **Art Genie**:  

### 1. Signup Page  
Users can create an account to access the platform.  
![Signup Page](https://github.com/Aashay30/ArtGenie/blob/main/screenshots/Signup%20Page.png)  

### 2. Login Page  
Returning users can log in securely.  
![Login Page](https://github.com/Aashay30/ArtGenie/blob/main/screenshots/Login%20Page.png)  

### 3. Main Page (Logged Out)  
Explore the homepage when not logged in.  
![Main Page](https://github.com/Aashay30/ArtGenie/blob/main/screenshots/Main%20Page.png)  

### 4. Main Page (Logged In)  
Once logged in, users can access features to generate AI images.  
![Main Page Logged In](https://github.com/Aashay30/ArtGenie/blob/main/screenshots/Main%20Page%20Loggedin.png)  

### 5. Pricing Page  
Buy credits easily to generate more AI images.  
![Pricing Page](https://github.com/Aashay30/ArtGenie/blob/main/screenshots/Pricing%20Page.png)  

### 6. Generate Image Page  
Enter a text prompt to generate stunning AI art.  
![Generate Image Page](https://github.com/Aashay30/ArtGenie/blob/main/screenshots/Generate%20Image%20Page.png)  

### 7. Loading Page  
Enjoy smooth animations while your image is being created.  
![Loading Page](https://github.com/Aashay30/ArtGenie/blob/main/screenshots/Loading%20Page.png)  

### 8. Result Page  
View and download the AI-generated masterpiece.  
![Result Page](https://github.com/Aashay30/ArtGenie/blob/main/screenshots/Result%20Page.png)  

### 9. Generate Another Page  
Create more art seamlessly with the “Generate Another” option.  
![Generate Another Page](https://github.com/Aashay30/ArtGenie/blob/main/screenshots/Generate%20Image%20Page.png)  


---

## 📦 Installation  

## Project Structure

```
artgenie/
├── client/
│   ├── .env
│   ├── .gitignore
│   ├── eslint.config.js
│   ├── package.json
│   ├── postcss.config.js
│   ├── tailwind.config.js
│   ├── vite.config.js
│   ├── index.html
│   ├── src/
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   ├── index.css
│   │   ├── assets/
│   │   │   └── assets.js
│   │   ├── components/
│   │   │   ├── Description.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── GenerateButton.jsx
│   │   │   ├── Header.jsx
│   │   │   ├── Login.jsx
│   │   │   ├── Navbar.jsx
│   │   │   ├── Steps.jsx
│   │   │   └── Testimonial.jsx
│   │   ├── context/
│   │   │   └── AppContext.jsx
│   │   ├── pages/
│   │   │   ├── BuyCredit.jsx
│   │   │   ├── Home.jsx
│   │   │   └── Result.jsx
│   │   └── ...
├── server/
│   ├── .env
│   ├── package.json
│   ├── server.js
│   ├── config/
│   │   └── mongodb.js
│   ├── controllers/
│   │   ├── imageController.js
│   │   └── userController.js
│   ├── middlewares/
│   │   └── auth.js
│   ├── models/
│   │   ├── transactionModel.js
│   │   └── userModel.js
│   ├── routes/
│   │   ├── imageRoutes.js
│   │   └── userRoutes.js
│   └── ...
```

Clone the repository and install dependencies:  

```bash
git clone https://github.com/Aashay30/art-genie.git
cd art-genie
```

### Backend Setup  

```bash
cd server  
npm install  
npm start
```

### Frontend Setup  

```bash
cd client  
npm install  
npm start  
```

---

# Key Features

## API Integrations
- **Clipdrop API 🎨:** Integrated for AI-powered image generation from text prompts.
- **Razorpay 💳:** Seamlessly handles secure credit purchases and payment transactions.

## Authentication Flow
- **JWT-Based Token System 🔑:** Implements secure authentication using JWT for session management.
- **Password Security 🛡️:** Utilizes bcrypt for hashing and securing user passwords.

## State Management
- **React Context API 🔄:** Manages global state efficiently, ensuring smooth data flow across the application.

## Database Structure
- **MongoDB Collections 🗃️:** 
  - **Users Collection 👤:** Stores user credentials and profile details.
  - **Transactions Collection 💰:** Logs payment history and credit purchases.
  - **Art Generation Logs 📝:** Maintains records of generated images and text prompts.

## 🏗️ System Architecture
- **Frontend**: React.js ⚛️, Tailwind CSS 🎨, Framer Motion ✨
- **Backend**: Node.js & Express.js 🚀
- **Database**: MongoDB 🗄️
- **Payment Gateway**: Razorpay 💳
- **Authentication**: JWT and bcrypt 🔑🛡️
- **AI Integration**: Clipdrop API for text-to-image generation 🤖🎨

## 📖 API Documentation

### User Routes
- `POST /api/v1/users/register` ✍️: Register a new user.
- `POST /api/v1/users/login` 🔑: Authenticate a user and return a JWT.

### Image Routes
- `POST /api/v1/images/generate` 🎨: Generate an AI image from a text prompt.
- `GET /api/v1/images/:id` 📷: Retrieve details of a generated image.

---

## 🚧 Challenges & Problems Faced During Art Genie Development (STAR Format)

---

### 🔑 Secure Authentication & User Data Protection

- **Situation:** Art Genie required robust authentication and secure user data handling for a public-facing AI art platform.
- **Task:** Implement a secure authentication system and protect sensitive user data.
- **Action:** Integrated JWT for stateless authentication, used bcrypt for password hashing, and enforced secure API endpoints with middleware.
- **Result:** Achieved a secure login and registration flow, ensuring user data privacy and building user trust.

---

### 💳 Razorpay Payment Integration

- **Situation:** Users needed a seamless way to purchase credits for generating more AI images.
- **Task:** Integrate a reliable payment gateway and handle payment verification securely.
- **Action:** Used Razorpay’s Node.js SDK for payment processing, implemented server-side verification, and managed transaction logs in MongoDB.
- **Result:** Enabled smooth, secure credit purchases with real-time feedback, increasing user engagement and monetization.

---

### 🎨 Real-Time AI Image Generation

- **Situation:** Users expected fast, high-quality image generation from text prompts.
- **Task:** Integrate an AI image generation API and optimize the user experience during processing.
- **Action:** Connected to the Clipdrop API for text-to-image, implemented async request handling, and added animated loading states with Framer Motion.
- **Result:** Delivered a responsive, visually engaging experience with minimal wait times and clear feedback during image generation.

---

### 🛡️ API Security & Rate Limiting

- **Situation:** Open AI endpoints could be abused, leading to excessive costs or service disruption.
- **Task:** Protect AI generation endpoints from abuse and ensure fair usage.
- **Action:** Added authentication checks, implemented credit deduction logic, and set up basic rate limiting on sensitive routes.
- **Result:** Prevented unauthorized access and abuse, ensuring platform stability and cost control.

---

### 📱 Responsive & Animated UI

- **Situation:** The app needed to look great and work smoothly on all devices, with engaging transitions.
- **Task:** Build a responsive, animated UI that delights users on desktop and mobile.
- **Action:** Used Tailwind CSS for responsive layouts and Framer Motion for smooth animations and transitions.
- **Result:** Achieved a modern, mobile-friendly interface with delightful user interactions and high engagement.

---

### 🗃️ Database Design & Scalability

- **Situation:** Needed to store user data, transactions, and generated art efficiently for future growth.
- **Task:** Design a scalable MongoDB schema for users, transactions, and art logs.
- **Action:** Modeled collections for users, transactions, and image logs; used Mongoose for schema validation and relationships.
- **Result:** Ensured reliable data storage, easy retrieval, and scalability for future features like user galleries and analytics.

---

### 🔄 State Management & Global Context

- **Situation:** Multiple components needed access to user state, credits, and art generation status.
- **Task:** Implement efficient global state management.
- **Action:** Leveraged React Context API to manage authentication, credits, and image generation state across the app.
- **Result:** Provided a seamless, consistent user experience with accurate state updates and minimal prop drilling.

---

### 🧪 Error Handling & User Feedback

- **Situation:** Users needed clear feedback for errors (e.g., failed payments, invalid prompts, API issues).
- **Task:** Handle errors gracefully and inform users without breaking the flow.
- **Action:** Implemented try/catch blocks, displayed user-friendly error messages, and used animated loaders for async operations.
- **Result:** Reduced user frustration and improved trust by providing clear, actionable feedback for all operations.

---

### 🚀 Deployment & Environment Management

- **Situation:** The app required smooth deployment and secure handling of environment variables for both frontend and backend.
- **Task:** Set up reliable deployment pipelines and manage secrets securely.
- **Action:** Used Vercel for frontend deployment, managed environment variables for API keys and secrets, and documented setup steps for contributors.
- **Result:** Achieved fast, reliable deployments with no secret leaks and easy onboarding for new developers.

---

### 📚 Rapid Learning & API Integration

- **Situation:** Needed to quickly learn and integrate new APIs (Clipdrop, Razorpay) with limited documentation.
- **Task:** Master new tools and deliver features on a tight timeline.
- **Action:** Studied API docs, explored community examples, and iteratively built/tested integrations.
- **Result:** Successfully delivered advanced features and became proficient in new technologies, demonstrating adaptability and fast learning.

---

## 📝 Summary

Art Genie’s development journey highlights expertise in full-stack engineering, secure authentication, payment integration, real-time AI API usage, responsive UI/UX, and robust error handling. Each challenge was met with a structured, results-driven approach, making these experiences ideal for behavioral interview discussions.

---

## 🌟 Key Takeaways from the Art Genie Project

---

### 1. Full-Stack Development Mastery ⚛️🖥️
- Built a production-ready application using the MERN stack (MongoDB, Express, React, Node.js).
- Designed and implemented both frontend and backend, ensuring seamless integration and data flow.

---

### 2. Secure Authentication & User Management 🔐
- Gained hands-on experience with JWT-based authentication and bcrypt for password security.
- Developed middleware to protect sensitive routes and manage user sessions securely.

---

### 3. Payment Gateway Integration 💳
- Successfully integrated Razorpay for real-time, secure credit purchases.
- Implemented server-side payment verification and transaction logging, ensuring financial integrity.

---

### 4. Real-Time AI API Integration 🎨🤖
- Integrated Clipdrop API for text-to-image generation, handling asynchronous workflows and error states.
- Optimized user experience with animated loaders and progress indicators.

---

### 5. Responsive & Animated UI Design 📱✨
- Leveraged Tailwind CSS and Framer Motion to create a visually appealing, fully responsive, and interactive interface.
- Ensured consistent UX across devices and screen sizes.

---

### 6. Robust State Management 🔄
- Utilized React Context API for efficient global state management, reducing prop drilling and improving maintainability.
- Ensured real-time updates for user credits, authentication, and generated images.

---

### 7. Database Design & Scalability 🗃️🚀
- Modeled scalable MongoDB schemas for users, transactions, and art logs using Mongoose.
- Prepared the application for future features like user galleries and analytics.

---

### 8. Error Handling & User Feedback 🧪✅
- Implemented comprehensive error handling and user-friendly feedback for all major workflows.
- Used animated loaders and clear messages to keep users informed and engaged.

---

### 9. Deployment & Environment Management 🚀🔒
- Deployed the application on Vercel and managed environment variables securely for both frontend and backend.
- Documented setup and deployment steps for easy onboarding and collaboration.

---

### 10. Rapid Learning & Adaptability 📚⚡
- Quickly learned and integrated new APIs (Clipdrop, Razorpay) with limited documentation.
- Demonstrated adaptability and problem-solving in a fast-paced development environment.

---

### 11. Production-Ready Best Practices 🛠️
- Maintained high code quality with ESLint, Prettier, and modular architecture.
- Followed best practices for security, scalability, and maintainability throughout the project.

---

## 📝 Summary

The Art Genie project provided deep experience in building secure, scalable, and user-friendly full-stack applications. It highlights strengths in authentication, payment integration, real-time API usage, responsive UI/UX, and rapid problem-solving—making these takeaways valuable for future roles and interviews.

---
 
## 🔮 Future Enhancements
- Add support for multiple languages in text prompts 🌐.
- Implement user profiles with saved artwork 👤🖼️.
- Introduce social sharing features for generated images 📲.

## 🛠️ Skills Demonstrated
- Full-stack development with the MERN stack ⚛️🌐.
- API integration and payment gateway implementation 🔌💳.
- Responsive UI design with Tailwind CSS 📱🎨.
- State management using React Context API 🔄.
- Authentication and security with JWT and bcrypt 🔑🛡️.


