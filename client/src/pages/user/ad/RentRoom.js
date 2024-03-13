import Sidebar from "../../../components/nav/Sidebar";
import AdForm from "../../../components/forms/AdForm";
import Profile from "../../../components/Profile";

export default function RentRoom() {
  return (
    <div className="contaienr-fluid">
      <Profile title="Rent Room" />
      <Sidebar />
      <div className="container mt-2">
        <AdForm type="Room" />
      </div>
    </div>
  );
}