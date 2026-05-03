# 🛒 Amazon Clone

A fully functional Amazon-inspired e-commerce application built with React and JavaScript (Vite). This project recreates the core shopping experience with a responsive design, product management, cart functionality, and multiple custom features.

**Live Demo:** [Coming Soon - Deploy to Netlify](#) 🚀

---

## 📋 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation & Setup](#installation--setup)
- [Project Structure](#project-structure)
- [Implemented Features](#implemented-features)
- [Roadmap & Future Improvements](#roadmap--future-improvements)
- [Contributing](#contributing)
- [Author](#author)

---

## ✨ Features

### ✅ Completed Features

#### 1. **Header Component** ✔️
- Top Navigation Bar with Amazon logo
- Clickable logo routing to home page
- Delivery location selector
- Search bar with icon
- Language selector (EN with flag)
- Account & Lists dropdown
- Returns & Orders section
- Shopping cart icon with item count badge
- Responsive sub-navigation menu

#### 2. **Homepage Layout** (In Progress)
- [ ] Hero banner (carousel or single banner)
- [ ] Product categories section
- [ ] Product grid display (8+ products)
- [ ] Product cards with image, title, price, and rating

#### 3. **Shopping Core Functionality** (In Progress)
- [ ] Add to cart functionality
- [ ] Remove from cart
- [ ] Cart page/side panel
- [ ] Item quantity display
- [ ] Subtotal calculation
- [ ] LocalStorage persistence for cart

#### 4. **Responsiveness** (In Progress)
- [ ] Desktop layout (laptops)
- [ ] Tablet layout
- [ ] Mobile layout (phones)
- [ ] Hamburger menu for mobile navigation
- [ ] Responsive product grid (4 → 2 → 1 columns)
- [ ] Mobile-friendly search bar

### 🎯 Custom Features (To Be Implemented)

#### **Feature 1 - Manual Implementation** (Without AI)
- [ ] Product Filtering (by category / price range)
- [ ] Search functionality (search products by name)
- [ ] Wishlist / Save for later
- [ ] Quantity selector in cart (+ / -)

#### **Feature 2 - AI-Assisted Implementation** (With Cursor)
- [ ] Dark Mode (toggle + remembers preference)
- [ ] Product Sorting (price low→high, high→low, by rating)
- [ ] Advanced product filtering

#### **Feature 3 - AI-Assisted Implementation** (With Cursor)
- [ ] Checkout Flow UI
- [ ] Shipping form (name, address, etc.)
- [ ] Delivery options (standard/express)
- [ ] Order confirmation page
- [ ] Recommended Products section ("You may also like")

---

## 🛠️ Tech Stack

| Technology | Purpose |
|-----------|---------|
| **React** | Frontend UI library |
| **JavaScript (ES6+)** | Programming language |
| **Vite** | Build tool & dev server |
| **CSS3** | Styling & responsive design |
| **React Router** | Client-side routing |
| **Material-UI Icons** | Icon components |
| **LocalStorage** | Client-side data persistence |
| **Netlify** | Deployment platform |

---

## 📦 Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn package manager

### Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/LutendoLumina/amazon-clone.git
   cd amazon-clone
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```
   or
   ```bash
   yarn install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```
   or
   ```bash
   yarn dev
   ```

4. **Open in browser**
   - Navigate to `http://localhost:5173` (Vite default port)
   - The app will hot-reload as you make changes

5. **Build for production**
   ```bash
   npm run build
   ```

---

## 📁 Project Structure

```
amazon-clone/
├── src/
│   ├── components/
│   │   ├── Header/
│   │   │   ├── Header.jsx
│   │   │   └── Header.css
│   │   ├── HomePage/
│   │   │   ├── HomePage.jsx
│   │   │   └── HomePage.css
│   │   ├── ProductCard/
│   │   │   ├── ProductCard.jsx
│   │   │   └── ProductCard.css
│   │   ├── Cart/
│   │   │   ├── Cart.jsx
│   │   │   └── Cart.css
│   │   └── ...
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── ProductDetail.jsx
│   │   ├── CartPage.jsx
│   │   └── ...
│   ├── assets/
│   │   ├── images/
│   │   └── icons/
│   ├── App.jsx
│   ├── App.css
│   └── main.jsx
├── public/
├── .gitignore
├── package.json
├── vite.config.js
└── README.md
```

---

## 🚀 Implemented Features

### 1. Header Component
- **Status:** ✅ Completed
- **Description:** Fully responsive Amazon-style header with logo, search bar, account section, and cart icon
- **Features:**
  - Amazon logo with home page routing
  - Delivery location selector
  - Search functionality
  - Language selector
  - Account & Lists dropdown
  - Cart badge with item count
  - Sub-navigation menu

### 2. Responsive Design
- **Status:** 🔄 In Progress
- **Desktop:** Full layout with all sections visible
- **Tablet:** Adjusted spacing and column layout
- **Mobile:** Hamburger menu, single-column grid, optimized touch targets

---

## 🗺️ Roadmap & Future Improvements

### Phase 1: Core Features (Current)
- [ ] Complete homepage with hero banner
- [ ] Product grid and individual product cards
- [ ] Add to cart & remove from cart
- [ ] Cart page with totals
- [ ] LocalStorage persistence

### Phase 2: Custom Features
- [ ] **Manual Feature:** Product filtering or search functionality
- [ ] **AI Feature 1:** Dark mode toggle with preference storage
- [ ] **AI Feature 2:** Advanced checkout flow with order confirmation

### Phase 3: Enhancement
- [ ] Product sorting (price, rating)
- [ ] Wishlist functionality
- [ ] Recommended products section
- [ ] Product reviews & ratings
- [ ] User authentication (optional)

### Phase 4: Deployment
- [ ] Deploy to Netlify
- [ ] Set up CI/CD pipeline
- [ ] Performance optimization
- [ ] SEO optimization

---

## 🎥 Demo & Documentation

A comprehensive Loom walkthrough video demonstrating all features, custom implementations, and AI assistance usage will be provided upon project completion.

---

## 📝 Contributing

Contributions are welcome! If you'd like to contribute:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📧 Contact & Support

**Author:** Lutendo Lumina  
**GitHub:** [@LutendoLumina](https://github.com/LutendoLumina)

For questions or support, feel free to open an issue on the GitHub repository.

---

## 📄 License

This project is open source and available under the MIT License.

---

## 🙏 Acknowledgments

- Amazon for the design inspiration
- React and Vite communities for excellent tools
- Material-UI for icon components
- Cursor AI for code assistance

---

**Status:** 🚧 Under Development  
**Last Updated:** May 2026  
**Progress:** Header Component ✅ | Core Features 🔄 | Custom Features ⏳ | Deployment ⏳