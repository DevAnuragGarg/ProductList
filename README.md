# 📦 Product List with Search, Filter, and Lazy Loading

## 🎯 Objective

Create a **product listing UI** using the [DummyJSON
API](https://dummyjson.com/products).

------------------------------------------------------------------------

## ✅ Requirements

-   📥 **Fetch products** and display them in a grid.\
-   🔍 **Search** functionality to filter products by query.\
-   🏷 **Category filter** to refine products by category.\
-   ♾ **Infinite scroll (lazy loading)** for seamless browsing.\
-   ⚡ **FlatList optimizations** using:
    -   `initialNumToRender` → Render a limited number initially.\
    -   `removeClippedSubviews` → Unmount items outside viewport.\
    -   `getItemLayout` → Improve scroll performance.

------------------------------------------------------------------------

## 🛠 Concepts Covered

-   **API Fetching** (DummyJSON)\
-   **Search & Filtering**\
-   **Infinite Scroll / Lazy Loading**\
-   **FlatList Performance Optimizations**

------------------------------------------------------------------------

## 🚀 Getting Started

### 1️⃣ Clone the repo

``` bash
git clone https://github.com/your-username/ProductListApp.git
cd ProductListApp
```

### 2️⃣ Install dependencies

``` bash
npm install
```

### 3️⃣ Run the project

``` bash
npx react-native run-android
# or
npx react-native run-ios