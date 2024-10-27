import { Link } from "react-router-dom";
import logo from "../../assets/logo.gif";

const AdminDashboard = () => {
  return (
    <div>
       <div className="flex justify-center">
        <img className="w-48 md:w-96" src={logo} alt="logo" />
      </div>
      <div className="cookie-regular font-bold text-nowrap block text-center mb-4 md:text-8xl">
            Product Plaza
          </div>
    </div>
  );
};

export default AdminDashboard;
