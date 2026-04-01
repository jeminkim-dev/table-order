import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { CartProvider } from './contexts/CartContext';
import AuthGuard from './components/AuthGuard';
import SetupPage from './pages/SetupPage';
import MenuPage from './pages/MenuPage';
import CartPage from './pages/CartPage';
import OrderConfirmPage from './pages/OrderConfirmPage';
import OrderSuccessPage from './pages/OrderSuccessPage';
import OrderHistoryPage from './pages/OrderHistoryPage';

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <CartProvider>
          <Routes>
            <Route path="/table/setup" element={<SetupPage />} />
            <Route element={<AuthGuard />}>
              <Route path="/table" element={<MenuPage />} />
              <Route path="/table/cart" element={<CartPage />} />
              <Route
                path="/table/order/confirm"
                element={<OrderConfirmPage />}
              />
              <Route
                path="/table/order/success"
                element={<OrderSuccessPage />}
              />
              <Route path="/table/orders" element={<OrderHistoryPage />} />
            </Route>
            <Route path="*" element={<Navigate to="/table" replace />} />
          </Routes>
        </CartProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}
