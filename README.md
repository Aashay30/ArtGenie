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

