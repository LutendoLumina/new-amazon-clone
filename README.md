# 🛒 Amazon Clone - First Day JR Intern Assignment

A fully functional Amazon-inspired e-commerce application built with React and JavaScript (Vite). This project recreates the core shopping experience with a responsive design, product management, cart functionality, and multiple custom features.

**🎓 Assignment:** Your First Day as a JR Intern at Amazon - Build an Amazon Clone worth Jeff's approval!

**Live Demo:** [Coming Soon - Deploy to Netlify](#) 🚀

---

## 📊 Assignment Breakdown (100 Marks Total)

### ✅ 1) Base Project: Amazon Homepage Clone (40 marks)

#### ✔️ Core UI & Functionality (20 marks)
- [x] Top Navigation Bar with Amazon logo, search bar, account section, and cart icon
- [x] Amazon logo clickable to home
- [x] Cart icon with **dynamic item count badge** (shows total quantity)
- [x] Hero banner with product showcase
- [x] Product categories/cards (Electronics, Gaming, Home, Books, etc.)
- [x] Product grid with 8+ products
- [x] View product card (image, title, price, rating)
- [x] Add to Cart functionality
- [x] Remove from Cart functionality
- [x] Cart page with items, quantity, subtotal display
- [x] LocalStorage persistence for cart data

#### ✔️ Responsiveness (20 marks)
- [x] Laptop view (full multi-column layout)
- [x] Mobile optimization (hamburger menu, single column)
- [x] Search bar usable on all devices
- [x] Product grid adapts (4 → 2 → 1 columns)
- [x] Navigation collapses on mobile

---

### ✅ 2) Features Upgrade (35 marks)

#### 🧠 One Custom Feature Without Cursor (15 marks) - COMPLETED
**Feature: Advanced Quantity Management System**
- [x] **Smart Cart Quantity Selector** - No duplicate items in cart
- [x] Click "+" to increment quantity (doesn't create duplicate entry)
- [x] Click "-" to decrement quantity (removes item when qty = 0)
- [x] Quantity picker UI with +/- buttons and counter display
- [x] Cart badge shows **total quantity** (e.g., 3 items × 2 qty each = 5 in badge)
- [x] Accurate subtotal that multiplies price × quantity
- [x] All data persisted to localStorage
- [x] Works across all pages (Header, Cart, Checkout, Orders)

**Technical Highlights:**
- Modified `reducer.js` to check for existing items before adding (prevents duplicates)
- Updated `getBasketTotal()` to calculate `price × quantity`
- Implemented decrement logic that only removes when quantity = 0
- Custom `useShop` hook with intelligent `itemCount` calculation

#### 🤖 Two Custom Features With Cursor (20 marks) - COMPLETED

**Feature #1: Complete Checkout Flow UI (10 marks)**
- [x] Shipping & Payment form with name, email, address fields
- [x] Mock card payment section (Stripe-style inputs)
- [x] Order Summary sidebar with live item calculations
- [x] Line-item pricing (shows quantity × price)
- [x] "Complete Purchase" button that processes order
- [x] Order confirmation with thank you message
- [x] Form validation

**Feature #2: Order History & Persistence (10 marks)**
- [x] Separate `orders` state in global context
- [x] Orders saved to localStorage before basket is cleared
- [x] Unique Order IDs generated automatically (#AMZ-XXXXXX-2026)
- [x] Orders page displays all past purchases
- [x] Each order shows date, items with quantities, and total
- [x] Order items hidden from cart manipulation (read-only view)
- [x] "No Orders Yet" state when no purchases made
- [x] Multiple orders stacked chronologically

---

### ⏳ 3) Loom Video Walkthrough (15 marks)
- [ ] Status: Pending (Must record face-on-camera walkthrough)
- [ ] Will demonstrate:
  - Manual feature (Quantity Management)
  - AI features (Checkout Flow & Order History)
  - Cursor implementation showcase
  - Under 5 minutes

### ⏳ 4) Deployment on Netlify (10 marks)
- [ ] Status: Pending (Ready to deploy)
- [ ] Live Link: [Coming Soon]
- [ ] GitHub Repository: [@LutendoLumina](https://github.com/LutendoLumina)

---

## 📊 Current Progress

| Task | Status | Marks |
|------|--------|-------|
| Base Amazon Clone (UI & Functionality) | ✅ COMPLETE | 20/20 |
| Responsiveness | ✅ COMPLETE | 20/20 |
| Custom Feature (Quantity System) | ✅ COMPLETE | 15/15 |
| Checkout Flow UI | ✅ COMPLETE | 10/10 |
| Order History & Persistence | ✅ COMPLETE | 10/10 |
| Loom Video | ⏳ PENDING | 15/15 |
| Netlify Deployment | ⏳ PENDING | 10/10 |
| **TOTAL** | **✅ 55/100** | **55/100** |

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

### 1. Context-Aware Search (Manual Feature)
- **Status:** ✅ Completed (15-Mark Assignment Requirement)[cite: 1]
- **Description:** A custom-built search engine that allows users to find products in real-time without external libraries or AI assistance.[cite: 1]
- **Engineering Highlights:**
  - **Lifting State:** The search term is managed in the Global State Provider, allowing the `Header` to update the `Home` and `Product` results simultaneously.[cite: 1]
  - **Advanced Filtering:** Implemented a combined `.filter()` logic that respects both the `categoryId` from the URL and the `searchTerm` string.[cite: 1]
  - **Case-Insensitive Logic:** Utilized `.toLowerCase()` on both data and user input to ensure a seamless search experience.[cite: 1]

  ### 2. Global State & LocalStorage
- **Status:** ✅ Completed[cite: 1]
- **Description:** Orchestrated a "Single Source of Truth" for the application using `useReducer`.[cite: 1]
- **Key Details:**
  - **Persistence:** The `reducer.js` handles `JSON.stringify` and `JSON.parse` to sync the state with `localStorage` on every cart update.[cite: 1]
  - **Cart Intelligence:** The removal logic uses `findIndex` and `splice` to ensure only a single instance of a product is removed, preventing the accidental deletion of duplicate items.[cite: 1]

### 3. Dynamic Product Results Page
- **Status:** ✅ Completed[cite: 1]
- **Key Details:** Leveraged `react-router-dom` and the `useParams` hook to capture category IDs from the URL to drive page content dynamically.[cite: 1]

### 3. Responsive Design
- **Status:** 🔄 In Progress
- **Desktop:** Full layout with multi-column grids.
- **Mobile:** Optimized touch targets and single-column category layouts.

---

## 💡 Technical Highlights

While building the current features, I focused on several core software engineering principles:

*   **Separation of Concerns:** Metadata is stored in standalone data files, mimicking a real-world API data layer.
*   **CSS Stacking Contexts:** Mastered the use of `position: relative` and `z-index` to manage complex, overlapping layouts.
*   **DRY (Don't Repeat Yourself):** Utilized the JavaScript `.map()` function to generate the grid, ensuring the code remains clean and maintainable.

### Quantity Management System (Advanced Feature)
A sophisticated system for handling product quantities without duplicating items in the basket:

**Architecture:**
- **Reducer Logic:** The `ADD_TO_BASKET` action checks if an item already exists using `findIndex()`. If it does, it increments the `quantity` property instead of creating a duplicate.
- **Decrement Logic:** The `REMOVE_FROM_BASKET` action decrements quantity before removing. Only when quantity reaches 0 is the item spliced from the basket.
- **Total Calculation:** Updated `getBasketTotal()` to multiply `price × quantity` for accurate pricing.
- **Item Count:** Modified `itemCount` calculation in both `useShop` hook and components to sum quantities using `.reduce()` instead of counting array length.

**UI Components:**
- **Quantity Picker:** Custom styled component with +/- buttons, orange border, and centered quantity display.
- **Cart Badge:** Header badge now displays total quantity (3 items with qty 2 each = 5 in badge).
- **Order Summary:** Checkout page shows correct quantities and line-item totals.

**Key Files Modified:**
- `reducer.js` - Enhanced ADD_TO_BASKET and REMOVE_FROM_BASKET logic
- `useShop.jsx` - Updated itemCount calculation
- `CartProduct.jsx` - Added quantity display and +/- button handlers
- `CartProduct.css` - Styled quantity picker
- `Header.jsx` - Updated cart badge to show total quantity
- `Checkout.jsx` - Fixed order summary to show quantities and line totals
- `Cart.jsx` - Passes quantity prop to CartProduct component

## 💡 Technical Highlights (Product Results)

In this phase, I focused on advanced React patterns and professional CSS layouts:

*   **URL-Driven State:** Instead of keeping the category in local state, I moved it to the URL. This allows users to bookmark specific categories and use the browser's back/forward buttons.
*   **Template Literals & Logic:** Used JavaScript template literals for dynamic string manipulation in navigation and header titles.
*   **Reusable Component Design:** The `ProductCard` was designed to be independent of its parent, allowing it to be used in the homepage grid or the search results page without code duplication.

---

## 📁 Project Structure
amazon-clone/
├── public/
├── src/
│   ├── assets/
│   │   └── products/
│   ├── components/
│   │   ├── layouts/
|   |   |   |── Header/
│   │   ├── Home/
│   │   ├── Category/
│   │   └── Product/
|   ├── context/         
│   │   ├── StateProvider.jsx
│   │   └── reducer.js
│   ├── data/
│   │   └── categories.js
|   |   └── products.js
│   ├── hooks/         
│   │   └── useShop.js
│   ├── App.jsx
│   └── main.jsx
└── README.md

---

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
│   │   └── products/
│   ├── components/
│   │   ├── layouts/
│   │   │   └── Header/
│   │   │       ├── Header.jsx
│   │   │       └── Header.css
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

## 🗺️ Roadmap & Future Improvements

### Phase 1: Core Features ✅ COMPLETED
- [x] Header and Navigation
- [x] Category Grid Layout
- [x] Product grid and individual product cards
- [x] Add to cart & remove from cart logic
- [x] LocalStorage persistence
- [x] Global State Management (Context API + Reducers)
- [x] Shopping Basket with quantity management
- [x] Checkout & Order Summary

### Phase 2: Enhanced Features ✅ COMPLETED
- [x] **Manual Feature:** Search functionality and product filtering
- [x] **Quantity Feature:** Smart cart quantity increment/decrement with no duplicates
- [x] **Cart UI:** Quantity picker with +/- buttons and visual counter
- [x] **Checkout Flow:** Order summary with accurate quantity and pricing

### Phase 3: Future Improvements 🔄
- [ ] **Payment Integration:** Real Stripe integration for actual payments
- [ ] **User Authentication:** Login/register functionality
- [ ] **Order History:** View past orders and track shipments
- [ ] **Dark Mode:** Toggle with preference storage
- [ ] **Responsive Mobile:** Full mobile optimization for all pages
- [ ] **Product Reviews:** User ratings and reviews system

---

## 📧 Contact & Support

**Author:** Lutendo Lumina  
**GitHub:** [@LutendoLumina](https://github.com/LutendoLumina)

---

**Status:** 🚧 Under Development  
**Last Updated:** May 10, 2026  
**Progress:** UI Components ✅ | Core Features ✅ | Cart & Checkout ✅ | Deployment ⏳