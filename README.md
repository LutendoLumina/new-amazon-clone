# 🛒 Amazon Clone

A fully functional Amazon-inspired e-commerce application built with React and JavaScript (Vite). This project recreates the core shopping experience with a responsive design, product management, cart functionality, and multiple custom features.

**Live Demo:** [https://lutendo-amazon-clone.netlify.app/]

---

## 🛠️ Tech Stack

| Technology | Purpose |
|-----------|---------|
| **React 18** | Frontend UI library with Hooks |
| **JavaScript (ES6+)** | Programming language |
| **Vite** | Build tool & dev server |
| **CSS3** | Styling & responsive design |
| **React Router v6** | Client-side routing |
| **Context API** | Global state management |
| **useReducer Hook** | Complex state logic |
| **Material-UI Icons** | Icon components |
| **LocalStorage API** | Client-side data persistence |
| **Intl.NumberFormat** | Currency localization |

---

## 📁 Project Structure

```
amazon-clone/
├── src/
│   ├── assets/
│   │   ├── amazon-logo.png
│   │   ├── home_image.jpg
|   |   └── categories/
│   │   └── products/
│   ├── components/
│   │   ├── layouts/
│   │   │   └── Header/
│   │   │       ├── Header.jsx
│   │   │       └── Header.css
|   |   |   └── Footer/
│   │   │       ├── Footer.jsx
│   │   │       └── Footer.css
│   │   ├── Home/
│   │   │   ├── Home.jsx
│   │   │   └── Home.css
│   │   ├── Category/
│   │   │   └── CategoryCard.jsx
│   │   ├── Product/
│   │   │   ├── Product.jsx
│   │   │   └── Product.css
│   │   ├── Cart/
│   │   │   ├── Cart.jsx
│   │   │   ├── Cart.css
│   │   │   ├── CartProduct.jsx
│   │   │   └── CartProduct.css
│   │   ├── Checkout/
│   │   │   ├── Checkout.jsx
│   │   │   └── Checkout.css
│   │   └── Orders/
│   │       ├── Orders.jsx
│   │       └── Orders.css
│   ├── context/
│   │   ├── StateProvider.jsx
│   │   └── reducer.js
│   ├── hooks/
│   │   └── useShop.jsx
│   ├── data/
│   │   ├── categories.js
│   │   └── products.js
│   ├── App.jsx
│   └── main.jsx
├── README.md
└── package.json
```

---

## ✨ Complete Feature List

### 1. **Header Component** ✅
- Top Navigation Bar with Amazon logo
- Clickable logo routing to home page
- Delivery location selector (South Africa)
- Search bar with real-time filtering
- **Account & Lists Dropdown** with login/logout functionality:
  - Sign in button for new users
  - Email-based login form
  - User session display when logged in
  - "Your Orders", "Your Account", "Your Lists" links
  - Sign out button
- **Dynamic cart icon badge** showing total quantity (not just item count)
- Responsive sub-navigation menu
- Material-UI icons integration

### 2. **Category Navigation Grid** ✅
- Dynamic "Category Square" layout
- Floating overlapping effect on Hero Banner (negative margin technique)
- 4-column grid on desktop, 2 on tablet, 1 on mobile
- Reusable CategoryCard components
- Centralized data management

### 3. **Dynamic Product Results Page** ✅
- URL-driven filtering using React Router `useParams`
- Products dynamically filtered by category ID
- Responsive product grid with Flexbox
- Currency localization (South African Rand - ZAR)

### 4. **Global State Management** ✅
- Context API + useReducer pattern
- "Single Source of Truth" for cart state
- Custom `useShop` hook for business logic
- LocalStorage persistence for cart data across sessions

### 5. **Shopping Cart with Smart Quantity Management** ✅
- **Core Feature:** Prevents duplicate items in cart
- Increment quantity with "+" button
- Decrement quantity with "-" button (removes when qty = 0)
- Visual quantity counter in picker UI
- Dynamic subtotal calculation: `price × quantity`
- Item count badge shows total quantity across all items

### 6. **Shopping Basket Page** ✅
- Full cart display with all items
- Item prices shown with quantity multiplier
- Accurate subtotal based on all quantities
- "Proceed to checkout" button
- Responsive layout (sidebar on desktop, full-width on mobile)
- Advertisement banner

### 7. **Checkout & Order Summary** ✅
- Shipping form (Full Name, Email, Address)
- Mock payment form with card details
- Live order summary showing:
  - Product quantities with multipliers (e.g., `x3`)
  - Line-item totals (price × qty per item)
  - Grand total calculation
  - Gift message option
- "Complete Purchase" button with order processing
- Form validation

### 8. **Order History & Confirmation** ✅
- Automatic order creation on purchase
- Unique order ID generation (#AMZ-XXXXXX-2026)
- Order date tracking
- Order total calculation and storage
- Orders page displays all past purchases
- Each order shows:
  - Order ID and date
  - All items with correct quantities
  - Line-item prices
  - Order total
- Read-only view (no edit/delete on orders)
- Empty state when no orders exist
- LocalStorage persistence of order history

### 9. **Search Functionality** ✅
- Real-time product search by name
- Case-insensitive filtering
- Combined with category filtering
- Global state integration

### 10. **Responsive Design** ✅
- Mobile-first approach
- Desktop: 4-column grid
- Tablet: 2-column grid
- Mobile: 1-column layout
- Touch-friendly buttons and spacing
- Hamburger menu on mobile (optional)

---

## Future Improvements 🔄
- [ ] **Payment Integration:** Real Stripe integration for actual payments
- [ ] **User Authentication:** Login/register functionality
- [ ] **Dark Mode:** Toggle with preference storage
- [ ] **Product Reviews:** User ratings and reviews system

---

## 📧 Contact & Support

**Author:** Lutendo Matshidze  
**GitHub:** [@LutendoLumina](https://github.com/LutendoLumina)
