import { useEffect, useState } from "react";
import Sidebar from "../../../components/nav/Sidebar";
import axios from "axios";
import { useAuth } from "../../../context/auth";
import Profile from "../../../components/Profile";
import UserRecentCard from "../../../components/cards/recent/UserRecentCard";
import styles from "../../../components/cards/recent/recent.module.css"

export default function Wishlist() {
  // context
  const [auth] = useAuth();
  // const [auth, setAuth] = useAuth();
  // state
  const [ads, setAds] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (auth?.token) fetchWishlist();
  }, [auth?.token]);

  const fetchWishlist = async () => {
    try {
      const { data } = await axios.get(`/wishlist`);
      setAds(data);
      setLoading(false);
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div
        className="d-flex justify-content-center align-items-center vh-100"
        style={{ marginTop: "-7%" }}
      >
        <div className="display-1">Loading...</div>
      </div>
    );
  }

  return (
    <div >
      <Profile title="Wishlist" />
      <Sidebar />
      <div className="container mt-5 text-center">
        <h1>{ads.length} liked properties</h1>
      </div>

      <section className={`${styles.recent} ${styles.padding1}`} >
        <div className='container'>
          <UserRecentCard adsForRent={ads} />
        </div>
      </section>
    </div>
  );
}