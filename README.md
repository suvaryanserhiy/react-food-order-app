# 🍽️ React Food Order App

A modern, full-stack food ordering application built with React and Express.js. Browse delicious meals, add them to your cart, and place orders seamlessly.

## 📋 Table of Contents

- [Features](#-features)
- [Demo](#-demo)
- [Installation](#-installation)
- [Usage](#-usage)
- [Project Structure](#-project-structure)
- [Technologies Used](#-technologies-used)
- [API Endpoints](#-api-endpoints)
- [Development](#-development)
- [Contributing](#-contributing)
- [License](#-license)

## ✨ Features

- **Browse Meals**: View a wide selection of delicious meals with images, descriptions, and prices
- **Shopping Cart**: Add items to cart, adjust quantities, and view total price
- **Checkout Process**: Complete order with customer information form
- **Order Management**: Submit orders to backend API with validation
- **Responsive Design**: Modern UI with smooth user experience
- **Error Handling**: Comprehensive error handling for API calls and form validation
- **Loading States**: User-friendly loading indicators during data fetching

## 🎬 Demo

_Add screenshots or a link to a live demo here_

## 🚀 Installation

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/react-food-order-app.git
   cd react-food-order-app
   ```

2. **Install frontend dependencies**
   ```bash
   npm install
   ```

3. **Install backend dependencies**
   ```bash
   cd backend
   npm install
   cd ..
   ```

## 💻 Usage

### Running the Application

1. **Start the backend server**
   ```bash
   cd backend
   npm start
   ```
   The backend server will run on `http://localhost:3000`

2. **Start the frontend development server** (in a new terminal)
   ```bash
   npm run dev
   ```
   The frontend will be available at `http://localhost:5173` (or the port shown in your terminal)

3. **Open your browser**
   Navigate to the frontend URL to start using the application

### Building for Production

```bash
npm run build
```

The production build will be created in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## 📁 Project Structure

```
react-food-order-app/
├── backend/
│   ├── app.js                 # Express server configuration
│   ├── data/
│   │   ├── available-meals.json  # Meal data
│   │   └── orders.json          # Order storage
│   ├── public/
│   │   └── images/              # Meal images
│   └── package.json
├── src/
│   ├── components/
│   │   ├── Cart.jsx            # Shopping cart component
│   │   ├── CartItem.jsx        # Individual cart item
│   │   ├── Checkout.jsx        # Checkout form
│   │   ├── Error.jsx           # Error display component
│   │   ├── Header.jsx          # App header
│   │   ├── MealItem.jsx        # Individual meal card
│   │   ├── Meals.jsx           # Meals list container
│   │   └── UI/
│   │       ├── Button.jsx      # Reusable button component
│   │       ├── Input.jsx       # Reusable input component
│   │       └── Modal.jsx       # Modal dialog component
│   ├── hooks/
│   │   └── useHttp.js          # Custom HTTP hook
│   ├── store/
│   │   ├── CartContext.jsx     # Cart state management
│   │   └── UserProgressContext.jsx  # UI state management
│   ├── util/
│   │   └── formatting.js       # Utility functions
│   ├── App.jsx                 # Main app component
│   ├── main.jsx                # App entry point
│   └── index.css               # Global styles
├── public/
│   └── logo.jpg                # App logo
├── index.html                  # HTML template
├── vite.config.js              # Vite configuration
└── package.json
```

## 🛠️ Technologies Used

### Frontend
- **React 19** - UI library
- **Vite** - Build tool and dev server
- **React Context API** - State management
- **Custom Hooks** - Reusable logic (useHttp)
- **ESLint** - Code linting

### Backend
- **Express.js** - Web framework
- **Body Parser** - Request body parsing
- **Node.js File System** - Data persistence

## 🔌 API Endpoints

### GET `/meals`
Fetches all available meals.

**Response:**
```json
[
  {
    "id": "m1",
    "name": "Mac & Cheese",
    "price": "8.99",
    "description": "Creamy cheddar cheese...",
    "image": "images/mac-and-cheese.jpg"
  }
]
```

### POST `/orders`
Submits a new order.

**Request Body:**
```json
{
  "order": {
    "items": [
      {
        "id": "m1",
        "name": "Mac & Cheese",
        "price": 8.99,
        "quantity": 2
      }
    ],
    "customer": {
      "name": "John Doe",
      "email": "john@example.com",
      "street": "123 Main St",
      "postal-code": "12345",
      "city": "New York"
    }
  }
}
```

**Response:**
- `201 Created` - Order created successfully
- `400 Bad Request` - Missing or invalid data

## 🔧 Development

### Available Scripts

**Frontend:**
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

**Backend:**
- `npm start` - Start Express server (from backend directory)

### Code Style

The project uses ESLint for code quality. Run `npm run lint` to check for linting errors.

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

Made with ❤️ using React and Express.js
