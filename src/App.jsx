import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { ThemeProvider } from './context/ThemeContext';
import { AdminAuthProvider, useAdminAuth } from './admin/context/AdminAuthContext';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import Loading from './components/Common/Loading';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import ProductDetailPage from './pages/ProductDetailPage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import AccountPage from './pages/AccountPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import NotFoundPage from './pages/NotFoundPage';

// Admin Components
import AdminLoginPage from './admin/pages/AdminLoginPage';
import AdminLayout from './admin/components/AdminLayout';
import AdminDashboard from './admin/pages/AdminDashboard';
import AdminProductManagement from './admin/pages/AdminProductManagement';
import AdminCategoryManagement from './admin/pages/AdminCategoryManagement';
import AdminOrderManagement from './admin/pages/AdminOrderManagement';
import AdminUserManagement from './admin/pages/AdminUserManagement';
import AdminBannerManagement from './admin/pages/AdminBannerManagement';
import AdminReviewsManagement from './admin/pages/AdminReviewsManagement';
import AdminInventoryManagement from './admin/pages/AdminInventoryManagement';
import AdminSalesAnalytics from './admin/pages/AdminSalesAnalytics';
import AdminPaymentManagement from './admin/pages/AdminPaymentManagement';
import AdminReturnManagement from './admin/pages/AdminReturnManagement';
import AdminNotifications from './admin/pages/AdminNotifications';

import './App.css';

// Protected Admin Route
function ProtectedAdminRoute({ children }) {
  const { isAdminLoggedIn } = useAdminAuth();
  // Check both state and localStorage for immediate redirect
  const isAuthenticated = isAdminLoggedIn || localStorage.getItem('adminAuth');
  return isAuthenticated ? children : <Navigate to="/admin/login" replace />;
}

function AppContent() {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith('/admin');
  const hideFooterRoutes = ['/account', '/admin/login'];
  const shouldHideFooter = hideFooterRoutes.includes(location.pathname) || location.pathname.startsWith('/product/') || isAdminRoute;

  return (
    <div className="flex flex-col min-h-screen dark:bg-luxury-900">
      {!isAdminRoute && <Header />}
      <main className="flex-grow">
        <Suspense fallback={<Loading />}>
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<HomePage />} />
            <Route path="/collections" element={<ProductPage />} />
            <Route path="/product/:id" element={<ProductDetailPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/account" element={<AccountPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />

            {/* Admin Routes */}
            <Route path="/admin/login" element={<AdminLoginPage />} />
            <Route
              path="/admin/*"
              element={
                <ProtectedAdminRoute>
                  <Routes>
                    <Route element={<AdminLayout />}>
                      <Route path="dashboard" element={<AdminDashboard />} />
                      <Route path="products" element={<AdminProductManagement />} />
                      <Route path="categories" element={<AdminCategoryManagement />} />
                      <Route path="orders" element={<AdminOrderManagement />} />
                      <Route path="users" element={<AdminUserManagement />} />
                      <Route path="banners" element={<AdminBannerManagement />} />
                      <Route path="reviews" element={<AdminReviewsManagement />} />
                      <Route path="inventory" element={<AdminInventoryManagement />} />
                      <Route path="analytics" element={<AdminSalesAnalytics />} />
                      <Route path="payments" element={<AdminPaymentManagement />} />
                      <Route path="returns" element={<AdminReturnManagement />} />
                      <Route path="notifications" element={<AdminNotifications />} />
                      <Route path="*" element={<Navigate to="/admin/dashboard" replace />} />
                    </Route>
                  </Routes>
                </ProtectedAdminRoute>
              }
            />

            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </main>
      {!shouldHideFooter && <Footer />}
      <Toaster position="top-right" />
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AdminAuthProvider>
        <Router>
          <AppContent />
        </Router>
      </AdminAuthProvider>
    </ThemeProvider>
  );
}

export default App;
