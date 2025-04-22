# E-Commerce Web App

A functional e-commerce website built using Next.js, Tailwind CSS, and React Context API with product listing, cart management, favorites, and basic authentication.

## Project Structure
```
src/
├── app/
│   ├── api/
│   │   ├── login/route.js           # Login API with static credentials
│   │   └── products/route.js        # Static product list API
│   ├── cart/page.js                 # Shopping cart page
│   ├── favorites/page.js            # Favorites page
│   ├── Login/page.js                # Login form
│   ├── Product/page.js              # Product listing page
│   ├── Dashboard/page.js            # Simple dashboard to list products
│   ├── Component/
│   │   ├── Navbar.js                # Navigation bar with cart & favorite count
│   │   └── ProductCart.js           # Product card with add-to-cart/favorite buttons
│   ├── Context/
│   │   ├── CartContext.js           # Cart context logic and provider
│   │   └── FavoriteContext.js       # Favorite context logic and provider
│   ├── layout.js                    # App layout wrapping all components
│   ├── page.js                      # Home navbar with search and navigation
│   └── styles/
│       └── globals.css              # Tailwind base style config
```

## Features
- **Product API**: Static list of 10 products served from /api/products
- **Cart**: Add, update quantity, and remove products from cart
- **Favorites**: Mark/unmark items as favorites
- **Login**: Static login validation using hardcoded credentials
- **Responsive Design**: Built using Tailwind CSS
- **LocalStorage**: Cart and favorites are persisted in browser storage

## Tech Stack
- Next.js
- React
- Tailwind CSS
- Context API
- LocalStorage
