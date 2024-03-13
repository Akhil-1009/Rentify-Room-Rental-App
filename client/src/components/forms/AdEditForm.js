// components/forms/AdEditForm.js
import CurrencyInput from "react-currency-input-field";
import toast from "react-hot-toast";
import axios from "axios";
import { useNavigate } from "react-router-dom";
// import AutocompleteComponent from "./AutocompleteComponent";
import EditAutocompleteComponent from "./EditAutocompleteComponent";
import ImageUpload from "./ImageUpload";
import RadioButtonsLaundry from "./RadioButton/RadioButtonLaundry";
import RadioButtonsWifi from "./RadioButton/RadioButtonWifi";
import RadioButtonsRowater from "./RadioButton/RadioButtonRowater";

export default function AdEditForm({ ad, setAd }) {
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!ad.photos?.length) {
        toast.error("Photo is required");
        return;
      } else if (!ad.price) {
        toast.error("Price is required");
        return;
      } else if (!ad.description) {
        toast.error("Description is required");
        return;
      } else {
        setAd({ ...ad, loading: true });
        console.log("value of as at submitting time:", ad)
        const { data } = await axios.put(`/ad/${ad._id}`, ad);
        console.log("update response => ", data);
        if (data?.error) {
          toast.error(data.error);
          setAd({ ...ad, loading: false });
        } else {
          if (data?.ok) {
            toast.success("Ad updated successfully");
            navigate("/dashboard");
          }
        }
      }
    } catch (err) {
      console.log(err);
      setAd({ ...ad, loading: false });
    }
  };
  const handleDelete = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.delete(`/ad/${ad._id}`);
      if (data.error) {
        toast.error(data.error);
      } else {
        toast.success("Ad deleted");
        navigate("/dashboard");
      }
    } catch (err) {
      console.log(err);
      toast.error("Failed to delete ad. Try again.");
    }
  };

  return (
    <>
      <div className="card-container">
        <div className="card">
          <form>
            <h1 style={{ textAlign: "center", fontWeight: 'bolder' }}>Edit Ad </h1>
            <ImageUpload ad={ad} setAd={setAd} />

            <EditAutocompleteComponent ad={ad} setAd={setAd} />

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
              // className="form-control mb-3"
              onValueChange={(value) => setAd({ ...ad, price: value })}
            />


            <select
              // className="form-control mb-3"
              value={ad.bedrooms}
              style={{
                width: '100%',
                padding: '8px',
                // paddingLeft: "5px",
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
                // marginBottom: '20px',
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
                paddingLeft: '15px',
                paddingTop: '10px',
                fontSize: '20px',
              }}
              type="text"
              cols='30'
              rows='7'
              value={ad.description}
              placeholder="Write description"
              onChange={(e) => setAd({ ...ad, description: e.target.value })}></textarea>

            <div style={{

              display: "flex",
              width: "100%",
              justifyContent: "space-between"
            }}>
              <button
                onClick={handleSubmit}
                disabled={ad.loading}
                style={{ fontSize: '17px' }}
                className={`mb-5  ${ad.loading ? 'disabled' : ''}`}
              >
                {ad.loading ? 'Saving...' : 'Update'}
              </button>
              <button
                onClick={handleDelete}
                disabled={ad.loading}
                style={{ fontSize: '17px' }}
                className={`mb-5  btn-danger  ${ad.loading ? 'disabled' : ''}`}

              >
                Delete Ad
              </button>
            </div>
          </form>
        </div>
      </div>


      {/* <br /> */}
      {/* <pre>{JSON.stringify(ad, null, 4)}</pre> */}
    </>
  );
}

