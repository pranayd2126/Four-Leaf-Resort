
import React from 'react';
import { HashRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Rooms from './pages/Rooms';
import RoomDetails from './pages/RoomDetails';
import Banquets from './pages/Banquets';
import BanquetDetails from './pages/BanquetDetails';
import Booking from './pages/Booking';
import Admin from './pages/Admin';
import Auth from './pages/Auth';
import Profile from './pages/Profile';
import Gallery from './pages/Gallery';
import Events from './pages/Events';
import { AuthProvider } from './context/AuthContext';

const ScrollToTopHandler = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const Layout = ({ children }: { children: React.ReactNode }) => (
  <div className="flex flex-col min-h-screen">
    <Navbar />
    <main className="flex-grow">{children}</main>
    <Footer />
  </div>
);

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <ScrollToTopHandler />
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/rooms" element={<Rooms />} />
            <Route path="/rooms/:id" element={<RoomDetails />} />
            <Route path="/banquets" element={<Banquets />} />
            <Route path="/banquets/:id" element={<BanquetDetails />} />
            <Route path="/events" element={<Events />} />
            <Route path="/book/:type/:id" element={<Booking />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </Layout>
      </Router>
    </AuthProvider>
  );
};

export default App;
