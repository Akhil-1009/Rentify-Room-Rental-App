
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/auth";
import { SearchProvider } from "./context/search";
// import Menu from "./components/nav/Menu";
import NavBar from "./components/nav/NavBar";
import { Toaster } from "react-hot-toast";

import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import AccountActivate from "./pages/Auth/AccountActivate";
import ForgotPassword from "./pages/Auth/ForgotPassword";
import AccessAccount from "./pages/Auth/AccessAccount";
import Dashboard from "./pages/user/Dashboard";
import AdCreate from "./pages/user/ad/AdCreate";
import PrivateRoute from "./components/nav/Routes/PrivateRoute";
import RentRoom from "./pages/user/ad/RentRoom";
import RentHouse from "./pages/user/ad/RentHouse";
// import AdView from "./pages/AdView";
import AdDetails from "./pages/AdView1";
import Footer from "./components/nav/Footer";
import ProfileUp from "./pages/user/ad/ProfileUp";
import Settings from "./pages/user/Settings";
import AdEdit from "./pages/user/ad/AdEdit";
import Wishlist from "./pages/user/ad/Wishlist";
import Enquiries from "./pages/user/ad/Enquiries";
import Search from "./pages/Search";
import Contact from "./components/forms/contact/Contact";
import About from "./pages/About";

const PageNotFound = () => (
  <div className="text-center p-5">404 PAGE NOT FOUND!</div>
);

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <SearchProvider>
          <NavBar />
          <Toaster />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/auth/account-activate/:token" element={<AccountActivate />} />
            <Route path="/auth/forgot-password" element={<ForgotPassword />} />
            <Route path="/auth/access-password/:token" element={<AccessAccount />} />
            <Route path="/" element={<PrivateRoute />}>
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="ad/create" element={<AdCreate />} />
              <Route path="ad/create/rent/Room" element={<RentRoom />} />
              <Route path="ad/create/rent/House" element={<RentHouse />} />
              <Route path="user/profile" element={<ProfileUp />} />
              <Route path="user/settings" element={<Settings />} />
              <Route path="user/ad/:slug" element={<AdEdit />} />
              <Route path="/user/wishlist" element={<Wishlist />} />
              <Route path="/user/enquiries" element={<Enquiries />} />
            </Route>
            <Route path="/ad/:slug" element={<AdDetails />} />
            <Route path="/search" element={<Search />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
          <Footer />
        </SearchProvider>
      </AuthProvider>
    </BrowserRouter >
  );
}