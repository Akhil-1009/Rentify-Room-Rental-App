import Sidebar from "../../../components/nav/Sidebar";
import AdForm from "../../../components/forms/AdForm";
import Profile from "../../../components/Profile";

export default function RentHouse() {
  return (
    <div className="contaienr-fluid">
      <Profile title="Rent House" />
      <Sidebar />
      <div className="container mt-2">
        <AdForm action="Rent" type="House" />
      </div>
    </div>
  );
}