import { useState, useEffect } from "react";
import axios from "axios";
import Awards from "../components/home/awards/Awards";
import Recent from "../components/cards/recent/Recent";
import Hero from "../components/home/top/hero";
import { Chat } from "../components/home/Chat";
import { ScrollToTop } from "../components/misc/ScrollToTop";
import { QueContact } from "../components/home/QueContact.js";

export default function Home() {
  const [adsForRent, setAdsForRent] = useState([]);

  useEffect(() => {
    fetchAds();
  }, []);

  const fetchAds = async () => {
    try {
      const { data } = await axios.get("/ads");
      console.log("inside Home.js fetchAds function", data);

      setAdsForRent(data.adsForRent);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <ScrollToTop />
      <Chat />
      <Hero />
      <Recent adsForRent={adsForRent} />
      <Awards />
      <QueContact />

    </div>
  );
}

