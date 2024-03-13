import Sidebar from "../../../components/nav/Sidebar";
// import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Profile from "../../../components/Profile";

export default function AdCreate() {
  // state
  // const [rent, setRent] = useState(false);
  // hooks
  const navigate = useNavigate();

  // const handleRent = () => {
  //   setRent(true);
  // };

  return (
    <div >
      <Profile title="Ad Create" />
      <Sidebar />
      <div
        className="d-flex justify-content-center align-items-center vh-100"
        style={{ marginTop: "-7%" }}
      >
        <div className="col-lg-6">
          <button className="btn btn-secondary p-5 col-12">
            <span className="h2">Rent</span>
          </button>
          <div className="my-1 d-flex ">
            <button
              onClick={() => navigate(`/ad/create/rent/Room`)}
              className="btn btn-secondary p-5 col-6"
            >
              Room
            </button>
            <button
              onClick={() => navigate(`/ad/create/rent/House`)}
              className="btn btn-secondary p-5 col-6"
            >
              Flat/House
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}


