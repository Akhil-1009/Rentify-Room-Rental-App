
import { useEffect, useState } from "react";
import Sidebar from "../../../components/nav/Sidebar";
import { useParams } from "react-router-dom";
import axios from "axios";
import AdEditForm from "../../../components/forms/AdEditForm";
import Profile from "../../../components/Profile";

export default function AdEdit() {
  // state
  const [ad, setAd] = useState({
    photos: [],
    uploading: false,
    price: 0,
    address: {},
    label: "",
    bedrooms: 0,
    bathrooms: 0,
    title: "",
    type: "",
    description: "",
    loading: false,
    laundry: "",
    wifi: "",
    ROwater: "",
    street: "",
  });
  // hooks
  const params = useParams();

  useEffect(() => {
    const fetchAd = async () => {
      try {
        const { data } = await axios.get(`/ad/${params.slug}`);
        console.log("before in adEdit", data.ad);
        data.ad.laundry ? data.ad.laundry = "yes" : data.ad.laundry = "no";
        data.ad.wifi ? data.ad.wifi = "yes" : data.ad.wifi = "no";
        data.ad.ROwater ? data.ad.ROwater = "yes" : data.ad.ROwater = "no";
        console.log("after in adEdit", data.ad);
        setAd(data.ad); // {ad: {}, related: []}
      } catch (err) {
        console.log(err);
      }
    };
    if (params?.slug) fetchAd();
  }, [params?.slug]);




  return (
    <div className="contaienr-fluid">
      <Profile title="Update Ad" />
      <Sidebar />

      <div className="container mt-2">
        {ad?.label ? (
          <AdEditForm ad={ad} setAd={setAd} />
        ) : (
          ""
        )}
      </div>

      {/* <pre>{JSON.stringify(ad, null, 4)}</pre> */}
    </div>
  );
}