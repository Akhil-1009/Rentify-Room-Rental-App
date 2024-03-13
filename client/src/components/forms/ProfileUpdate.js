// components/forms/ProfileUpdate.js
import { useState, useEffect } from "react";
import { useAuth } from "../../context/auth";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import slugify from "slugify";
import ProfileUpload from "./ProfileUpload";
const styles = {
  border: '1px solid rgba(0, 0, 0, 0.1)',
  width: '100%',
  borderRadius: '5px',
  fontSize: '17px',
  marginTop: '20px',
  paddingLeft: "10px",
};
// gets prop from main nav
export default function ProfileUpdate() {
  // context
  const [auth, setAuth] = useAuth();
  // state
  // username name email company address phone about
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [about, setAbout] = useState("");
  const [loading, setLoading] = useState(false);
  const [photo, setPhoto] = useState(null);
  const [uploading, setUploading] = useState(false);
  // hooks
  const navigate = useNavigate();

  useEffect(() => {
    if (auth.user) {
      setUsername(auth.user?.username);
      setName(auth.user?.name);
      setEmail(auth.user?.email);
      setCompany(auth.user?.company);
      setAddress(auth.user?.address);
      setPhone(auth.user?.phone);
      setAbout(auth.user?.about);
      setPhoto(auth.user?.photo);
    }
  }, [auth.user]);

  // ProfileUpdate.js
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      // console.log(username, name, email, company, address, phone, about, photo);
      const { data } = await axios.put("/update-profile", {
        username,
        name,
        email,
        company,
        address,
        phone,
        about,
        photo,
      });
      if (data?.error) {
        toast.error(data.error);
        setLoading(false);
      } else {
        // console.log("profile update response => ", data);
        setAuth({ ...auth, user: data });

        let fromLS = JSON.parse(localStorage.getItem("auth"));
        fromLS.user = data;
        localStorage.setItem("auth", JSON.stringify(fromLS));
        setLoading(false);
        toast.success("Profile updated");
      }
    } catch (err) {
      console.log(err);
      toast.error("Profile update failed. Try again.");
      setLoading(false);
    }
  };

  return (
    <>
      <div className="card-container ">
        <div className="card">
          <form onSubmit={handleSubmit}>
            <h1 style={{ textAlign: "center", fontWeight: 'bolder', width: "100%" }}>Update Profile</h1>
            <ProfileUpload
              photo={photo}
              setPhoto={setPhoto}
              uploading={uploading}
              setUploading={setUploading}
            />

            <input
              style={styles}
              name="username"
              type="text"
              placeholder="Update your username"
              className="form-control mb-4"
              value={username}
              onChange={(e) =>
                setUsername(slugify(e.target.value.toLowerCase()))
              } />
            <input
              style={styles}
              type="text"
              placeholder="Enter your name"
              className="form-control mb-4"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <input
              style={styles}
              type="text"
              value={email}
              className="form-control mb-4"
              disabled={true}
            />

            <input

              style={styles}
              type="text"
              placeholder="Enter profession"
              className="form-control mb-4"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
            />
            <input
              style={styles}
              type="text"
              placeholder="Enter address"
              className="form-control mb-4"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
            <input
              style={styles}
              type="text"
              placeholder="Enter your phone number"
              className="form-control mb-4"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />


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
              cols='30' rows='4'
              placeholder="Write something interesting about yourself"
              className="form-control mb-4"
              value={about}
              onChange={(e) => setAbout(e.target.value)}

            ></textarea>

            <div style={{
              display: 'flex',
              justifyContent: "center",
              alignItems: "center"
            }}>
              <button
                className="btn mb-4"
                disabled={loading}
                style={{
                  fontSize: '17px',
                  backgroundColor: "green",
                  color: "white",
                  borderRadius: "15px"
                }}

              >
                {loading ? "Processing..." : "Update profile"}
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* <pre>{JSON.stringify(ad, null, 4)}</pre> */}

    </>

  );
}