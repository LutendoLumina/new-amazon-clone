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

#### 1. **Header Component** 
- Top Navigation Bar with Amazon logo
- Clickable logo routing to home page
- Delivery location selector
- Search bar with icon
- Account & Lists dropdown
- Shopping cart icon with item count badge
- Responsive sub-navigation menu

#### 2. **Category Navigation Grid** 
- Dynamic "Category Square" layout
- Floating overlapping effect on Hero Banner
- Reusable card components
- Centralized data management for scalability

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

## 🚀 Implemented Features

### 1. Header Component
- **Status:** ✅ Completed
- **Description:** Fully responsive Amazon-style header with logo, search bar, and cart functionality.

### 2. Category Navigation Grid
- **Status:** ✅ Completed
- **Description:** Recreated the signature Amazon "Category Square" layout that serves as the primary entry point for shoppers.
- **Key Details:**
  - **Dynamic Data Management:** Implemented a centralized data module (`src/data/categories.js`) to map over category objects.
  - **Reusable Component Architecture:** Developed a `CategoryCard` component handling dynamic props for titles and images.
  - **Advanced CSS Positioning:** Utilized a negative `margin-top` strategy with `z-index` stacking to achieve the "Amazon Overlap" effect where cards float over the hero banner.
  - **Vite Asset Optimization:** Integrated local image assets via ES6 imports for optimized performance.

### 3. Dynamic Product Results Page
- **Status:** ✅ Completed
- **Description:** A dedicated results page that dynamically filters and displays products based on the selected category.
- **Key Details:**
  - **Dynamic Routing:** Leveraged `react-router-dom` and the `useParams` hook to capture category IDs from the URL (e.g., `/category/gaming`) to drive page content.
  - **Data Filtering Logic:** Implemented client-side filtering to match products with their respective categories, ensuring a scalable "single-page" architecture for multiple departments.
  - **Responsive Product Grid:** Built a flexible layout using CSS Flexbox with `flex-wrap`, allowing products to flow horizontally on desktops and stack vertically on smaller screens.
  - **Currency Localization:** Formatted pricing to align with the South African market (ZAR) using consistent currency styling.

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

## 💡 Technical Highlights (Product Results)

In this phase, I focused on advanced React patterns and professional CSS layouts:

*   **URL-Driven State:** Instead of keeping the category in local state, I moved it to the URL. This allows users to bookmark specific categories and use the browser's back/forward buttons.
*   **Template Literals & Logic:** Used JavaScript template literals for dynamic string manipulation in navigation and header titles.
*   **Reusable Component Design:** The `ProductCard` was designed to be independent of its parent, allowing it to be used in the homepage grid or the search results page without code duplication.

---

## 📁 Project Structure
amazon-clone/
├── src/
│   ├── components/
│   │   ├── Header/
│   │   ├── Home/
│   │   ├── Category/
│   │   └── ...
│   ├── data/
│   │   └── categories.js
│   ├── assets/
│   │   └── images/
│   ├── App.jsx
│   └── main.jsx
├── public/
└── README.md

---

## 🗺️ Roadmap & Future Improvements

### Phase 1: Core Features (Current)
- [x] Header and Navigation
- [x] Category Grid Layout
- [ ] Product grid and individual product cards
- [ ] Add to cart & remove from cart logic
- [ ] LocalStorage persistence

### Phase 2: Custom Features
- [ ] **Manual Feature:** Search functionality and product filtering
- [ ] **AI Feature:** Dark mode toggle with preference storage
- [ ] **AI Feature:** Checkout flow and order confirmation

---

## 📧 Contact & Support

**Author:** Lutendo Lumina  
**GitHub:** [@LutendoLumina](https://github.com/LutendoLumina)

---

**Status:** 🚧 Under Development  
**Last Updated:** May 2026  
**Progress:** UI Components ✅ | Core Features 🔄 | Deployment ⏳