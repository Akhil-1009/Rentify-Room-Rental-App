
import { useState } from "react";
import CurrencyInput from 'react-currency-input-field';
import ImageUpload from "./ImageUpload";
import AutocompleteComponent from "./AutocompleteComponent";
import axios from "axios";
import toast from "react-hot-toast";
import { useAuth } from "../../context/auth";
import RadioButtonsLaundry from "./RadioButton/RadioButtonLaundry";
import RadioButtonsWifi from "./RadioButton/RadioButtonWifi";
import RadioButtonsRowater from "./RadioButton/RadioButtonRowater";

export default function AdForm({ type }) {
  //context
  const [auth, setAuth] = useAuth();
  //state
  const [ad, setAd] = useState({
    photos: [],
    uploading: false,
    price: "",
    address: {},
    bedrooms: "",
    bathrooms: "",
    title: "",
    type,
    description: "",
    loading: false,
    laundry: "",
    wifi: "",
    ROwater: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setAd({ ...ad, loading: true });
      const { data } = await axios.post("/ad", ad);
      if (data?.error) {
        toast.error(data.error);
        setAd({ ...ad, loading: false });
      } else {

        //upadate user in context
        setAuth({ ...auth, user: data.user })
        //update user in local storage
        const fromLS = JSON.parse(localStorage.getItem("auth"));
        fromLS.user = data.user;
        localStorage.setItem("auth", JSON.stringify(fromLS));
        toast.success("Ad created successfully");

        //reload page on redirect
        window.location.href = "/dashboard";
      }
    } catch (err) {
      console.log(err);
      setAd({ ...ad, loading: false });
    }
  };
  return (
    <>
      <div className="card-container">
        <div className="card">
          <form>
            <h1 style={{ textAlign: "center", fontWeight: 'bolder', width: "100%" }}>Ad Post</h1>
            <ImageUpload ad={ad} setAd={setAd} />

            <AutocompleteComponent ad={ad} setAd={setAd} />
            <input
              style={{
                border: '1px solid rgba(0, 0, 0, 0.1)',
                width: '100%',
                borderRadius: '5px',
                fontSize: '17px',
                marginTop: '20px'
              }}
              type='text'
              placeholder='Enter title (not more than 20 char)'
              value={ad.title}
              onChange={(e) => setAd({ ...ad, title: e.target.value })}
              required />

            <CurrencyInput
              style={{
                border: '1px solid rgba(0, 0, 0, 0.1)',
                width: '100%',
                borderRadius: '5px',
                fontSize: '17px',
                marginTop: '20px'
              }}
              placeholder="Enter price"
              defaultValue={ad.price}
              onValueChange={(value) => setAd({ ...ad, price: value })}
            />


            <select
              value={ad.bedrooms}
              style={{
                width: '100%',
                padding: '8px',
                border: '1px solid rgba(0, 0, 0, 0.1)',
                borderRadius: '5px',
                marginTop: '20px',
                marginBottom: '20px',
                fontSize: '16px',
              }}
              onChange={(e) => setAd({ ...ad, bedrooms: e.target.value })}
              required
            >
              <option value="">Select number of bedrooms</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="3">4</option>
              <option value="3">5</option>
            </select>
            <select
              value={ad.bathrooms}
              style={{
                width: '100%',
                padding: '8px',
                border: '1px solid rgba(0, 0, 0, 0.1)',
                borderRadius: '5px',
                fontSize: '16px',
              }}
              onChange={(e) => setAd({ ...ad, bathrooms: e.target.value })}
              required
            >
              <option value="">Select number of bathrooms</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>

            <RadioButtonsLaundry ad={ad} setAd={setAd} />
            <RadioButtonsWifi ad={ad} setAd={setAd} />
            <RadioButtonsRowater ad={ad} setAd={setAd} />
            <hr />

            <textarea
              style={{
                border: '1px solid rgba(0, 0, 0, 0.1)',
                width: '100%',
                borderRadius: '5px',
                marginBottom: '20px',
                marginTop: '5px',
                paddingLeft: '15px',
                paddingTop: '10px',
                fontSize: '20px',
              }}
              type="text"
              cols='30' rows='7' value={ad.description}
              placeholder="Write description"
              onChange={(e) => setAd({ ...ad, description: e.target.value })}></textarea>

            <div style={{
              display: "flex",
              justifyContent: "center",
              width: "100%"
            }}>
              <button
                onClick={handleSubmit}
                disabled={ad.loading}
                style={{
                  fontSize: '17px',
                  margin: "auto",
                  backgroundColor: "green",
                  color: "white",
                  borderRadius: "10px",
                  padding: "5px",


                }}
                className={`mb-5 ${ad.loading ? 'disabled' : ''}`}
              >
                {ad.loading ? 'Saving...' : 'Submit'}
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* <pre>{JSON.stringify(ad, null, 4)}</pre> */}

    </>
  );
}