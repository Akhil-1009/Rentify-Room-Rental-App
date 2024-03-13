import { useEffect, useState } from "react";
import Sidebar from "../../components/nav/Sidebar";
import axios from "axios";
import Profile from "../../components/Profile";
// copy of AdCard
// import UserAdCard from "../../components/cards/UserAdCard";
import UserRecentCard from "../../components/cards/recent/UserRecentCard";
import styles from "../../components/cards/recent/recent.module.css"

export default function Dashboard() {
  const [ads, setAds] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchAds();
  }, []);

  const fetchAds = async () => {
    try {

      const { data } = await axios.get(`/user-ads/${page}`);
      setAds(data.ads);
      setTotal(data.total);
    } catch (err) {
      console.log(err);
    }
  };
  // if page state is > 1, run useEffect to fetch additional ads
  useEffect(() => {
    if (page === 1) return;

    const loadMore = async () => {
      try {
        setLoading(true);
        const { data } = await axios.get(`/user-ads/${page}`);
        setAds([...ads, ...data.ads]);
        setTotal(data.total);
        setLoading(false);
      } catch (err) {
        console.log(err);
        setLoading(false);
      }
    };
    // execute
    loadMore();
  }, [page]);

  return (
    <div className="contaienr-fluid">
      <Profile title="DashBoard" />
      {/* <h1 className="display-1 bg-primary text-light p-5">Dashboard</h1> */}
      <Sidebar />
      <div className="container mt-5 text-center">
        <h1>
          {total > 0 ? `You have ${total} ads` : "You have not posted any ads"}
        </h1>
      </div>


      <section className={`${styles.recent} ${styles.padding1}`}>
        <div className='container'>
          <UserRecentCard adsForRent={ads} />
        </div>
      </section>

      <div className="container mt-3 mb-3">
        {ads && ads.length < total && (
          <div className="text-center mt-4 mb-4">
            <button
              disabled={loading}
              className="btn btn-warning"
              onClick={(e) => {
                e.preventDefault();
                setPage(page + 1);
              }}
            >
              {loading ? "Loading..." : `${ads?.length} / ${total} Load more`}
            </button>
          </div>
        )}
      </div>
    </div >
  );
}