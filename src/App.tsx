import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LoadingSpinner from './components/LoadingSpinner';
import Cart from './components/Cart';
import ConsultationModal from './components/ConsultationModal';
import ProductDetail from './components/ProductDetail';
import NewsletterPopup from './components/NewsletterPopup';
import { useAuthStore } from './store/useAuthStore';

// Lazy-loaded components
const Home = React.lazy(() => import('./pages/Home'));
const Collections = React.lazy(() => import('./pages/Collections'));
const DesignServices = React.lazy(() => import('./pages/DesignServices'));
const Showroom = React.lazy(() => import('./pages/Showroom'));
const About = React.lazy(() => import('./pages/About'));
const Blog = React.lazy(() => import('./pages/Blog'));
const Contact = React.lazy(() => import('./pages/Contact'));
const FAQ = React.lazy(() => import('./pages/FAQ'));
const Login = React.lazy(() => import('./pages/Login'));
const Wishlist = React.lazy(() => import('./pages/Wishlist'));
const Dashboard = React.lazy(() => import('./pages/admin/Dashboard'));
const UserManagement = React.lazy(() => import('./pages/admin/UserManagement'));

// Initialize React Query client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
});

function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  const { isAuthenticated, user } = useAuthStore();

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Toaster position="top-right" />
        <Cart />
        <ConsultationModal />
        <ProductDetail />
        <NewsletterPopup />
        
        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<MainLayout><Home /></MainLayout>} />
            <Route path="/collections" element={<MainLayout><Collections /></MainLayout>} />
            <Route path="/design-services" element={<MainLayout><DesignServices /></MainLayout>} />
            <Route path="/showroom" element={<MainLayout><Showroom /></MainLayout>} />
            <Route path="/about" element={<MainLayout><About /></MainLayout>} />
            <Route path="/blog" element={<MainLayout><Blog /></MainLayout>} />
            <Route path="/contact" element={<MainLayout><Contact /></MainLayout>} />
            <Route path="/faq" element={<MainLayout><FAQ /></MainLayout>} />
            <Route path="/wishlist" element={<MainLayout><Wishlist /></MainLayout>} />

            {/* Auth Routes */}
            <Route
              path="/login"
              element={
                isAuthenticated ? (
                  <Navigate to={user?.role === 'admin' ? '/admin/dashboard' : '/'} replace />
                ) : (
                  <Login />
                )
              }
            />

            {/* Admin Routes */}
            <Route
              path="/admin/*"
              element={
                !isAuthenticated ? (
                  <Navigate to="/login" replace />
                ) : user?.role !== 'admin' ? (
                  <Navigate to="/" replace />
                ) : (
                  <Routes>
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/users" element={<UserManagement />} />
                  </Routes>
                )
              }
            />

            {/* Fallback Route */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </QueryClientProvider>
  );
}