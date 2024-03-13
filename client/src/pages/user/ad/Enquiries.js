import { useEffect, useState } from "react";
import Sidebar from "../../../components/nav/Sidebar";
import axios from "axios";
import { useAuth } from "../../../context/auth";
import Profile from "../../../components/Profile";
import UserRecentCard from "../../../components/cards/recent/UserRecentCard";
import styles from "../../../components/cards/recent/recent.module.css"

export default function Enquiries() {
  // context
  // const [auth, setAuth] = useAuth();
  const [auth] = useAuth();
  // state
  const [ads, setAds] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (auth?.token) fetchEnquiriedProperties();
  }, [auth?.token]);

  const fetchEnquiriedProperties = async () => {
    try {
      const { data } = await axios.get(`/enquiried-properties`);
      // console.log(data);
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
    <div className="contaienr-fluid">
      <Profile title="Enquiries" />
      <Sidebar />
      <div className="container mt-5 text-center">
        <h1>{ads.length} enquiried properties</h1>
      </div>

      <section className={`${styles.recent} ${styles.padding1}`} >
        <div className='container'>
          <UserRecentCard adsForRent={ads} />
        </div>
      </section>

    </div>
  );
}