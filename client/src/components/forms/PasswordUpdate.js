// components/forms/PasswordUpdate.js
import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

// gets prop from main nav
export default function ProfileUpdate() {
  // state
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  // hooks
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      // console.log(username, name, email, company, address, phone, about, photo);
      const { data } = await axios.put("/update-password", { password });
      if (data?.error) {
        toast.error(data.error);
        setLoading(false);
      } else {
        setLoading(false);
        toast.success("Password updated");
      }
    } catch (err) {
      console.log(err);
      toast.error("Password update failed. Try again.");
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <div className=" d-flex justify-content-center align-items-center">
        <div className="col-lg-3 ">
          <form onSubmit={handleSubmit}>
            <input
              name="password"
              type="password"
              placeholder="Enter password here"
              className="form-control mb-4"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <button style={{
              fontSize: '13px',
              backgroundColor: "green",
              color: "white",
              borderRadius: "15px",

            }}
              className="btn  mb-4 ml-4" disabled={loading}>
              {loading ? "Updating..." : "Update password"}
            </button>
            {/* btn-primary col-12 */}
          </form>
        </div>
      </div>
    </div>
  );
}