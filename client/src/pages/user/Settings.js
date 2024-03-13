import Sidebar from "../../components/nav/Sidebar";
import PasswordUpdate from "../../components/forms/PasswordUpdate";
import Profile from "../../components/Profile";

export default function Settings() {
  return (
    <div className="contaienr-fluid">
      <Profile title="Set Password" />
      <Sidebar />
      <div style={{ flex: 1 }} className="container mt-2">
        <PasswordUpdate />
      </div>
    </div>
  );
}