# Luxury E-commerce Website

A modern, industry-standard luxury e-commerce website built with React.js, featuring a premium user experience with Tailwind CSS styling and state management with Zustand.

## 📋 Project Structure

```
src/
├── assets/              # Images and icons
├── components/          # Reusable components
│   ├── Layout/         # Header, Footer
│   ├── Common/         # Button, Card, Loading
│   ├── Product/        # ProductCard, ProductDetail
│   ├── Cart/           # CartItemList, CartSummary
│   └── Checkout/       # CheckoutForm
├── pages/              # Page components
│   ├── HomePage
│   ├── ProductPage
│   ├── ProductDetailPage
│   ├── CartPage
│   ├── CheckoutPage
│   ├── AccountPage
│   └── NotFoundPage
├── store/              # Zustand state management
│   ├── cartStore.js
│   └── authStore.js
├── services/           # API services
│   ├── api.js
│   └── index.js
├── utils/              # Utility functions
├── hooks/              # Custom React hooks
├── context/            # React context API
├── constants/          # App constants
├── styles/             # CSS files
└── data/               # Mock data
```

## 🚀 Getting Started

### Prerequisites
- Node.js 16+
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Create `.env` file from `.env.example`:
```bash
cp .env.example .env
```

3. Update environment variables in `.env`

### Development

Start the development server:
```bash
npm start
```

The application will open at `http://localhost:3000`

### Build

Create a production build:
```bash
npm run build
```

## 🎨 Design Features

- **Luxury Color Palette**: Custom gold and luxury brown colors
- **Premium Typography**: Serif fonts for headings, clean sans-serif for body
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Animations**: Smooth transitions using Framer Motion
- **State Management**: Zustand for lightweight state management
- **API Integration**: Axios for API calls with interceptors

## 📦 Key Dependencies

- **React 18.2**: UI framework
- **React Router 6**: Client-side routing
- **Tailwind CSS**: Utility-first styling
- **Zustand**: State management
- **Framer Motion**: Animation library
- **Axios**: HTTP client
- **React Hot Toast**: Notifications
- **React Icons**: Icon library

## 🛠️ Configuration

### Tailwind CSS
Custom theme configuration in `tailwind.config.js` with luxury colors and custom spacing.

### Environment Variables
```
REACT_APP_API_URL=http://localhost:3001/api
REACT_APP_STRIPE_PUBLIC_KEY=your_stripe_public_key_here
REACT_APP_ENVIRONMENT=development
```

## 📝 Scripts

```bash
npm start        # Start development server
npm build        # Build for production
npm test         # Run tests
npm lint         # Run ESLint
npm format       # Format code with Prettier
```

## 🎯 Features

- ✨ Product catalog with filtering and sorting
- 🛒 Shopping cart management
- 💳 Checkout process
- 👤 User authentication
- 📱 Responsive mobile design
- 🎨 Elegant UI/UX
- ⚡ Fast performance
- 🔒 Secure payment handling

## 🔧 Future Enhancements

- [ ] Payment gateway integration (Stripe/PayPal)
- [ ] User reviews and ratings
- [ ] Wishlist functionality
- [ ] Product recommendations
- [ ] Admin dashboard
- [ ] Inventory management
- [ ] Email notifications
- [ ] Analytics tracking

## 📄 License

MIT License - feel free to use this project for your own purposes.

## 💬 Support

For support, please open an issue in the repository.
