
import Sidebar from "../../../components/nav/Sidebar";
import ProfileUpdate from "../../../components/forms/ProfileUpdate";
import Profile from "../../../components/Profile";

export default function ProfileUp() {
  return (
    <div className="contaienr-fluid">
      <Profile title="Profile Update" />
      <Sidebar />
      <div className="container mt-2">
        <ProfileUpdate />
      </div>
    </div>
  );
}