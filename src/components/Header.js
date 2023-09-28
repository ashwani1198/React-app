import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();
  return (
    <div className="flex justify-between shadow-md items-center">
      <div className="">
        <img className="w-[100px]" src={LOGO_URL} />
      </div>
      <div>
        <ul className="flex font-semibold">
          <li className="px-4 py-2 hover:bg-slate-200 rounded-md transition-all delay-100">
            Online Status : {onlineStatus ? "🟢" : "🔴"}
          </li>
          <li className="px-4  py-2  hover:bg-slate-200 rounded-md transition-all delay-100">
            <Link to={"/"}>Home</Link>
          </li>
          <li className="px-4  py-2  hover:bg-slate-200 rounded-md transition-all delay-100">
            <Link to={"/about"}>About</Link>
          </li>
          <li className="px-4  py-2  hover:bg-slate-200 rounded-md transition-all delay-100">
            <Link to={"/contact"}>Contact Us</Link>
          </li>
          <li className="px-4  py-2  hover:bg-slate-200 rounded-md transition-all delay-100">
            Cart
          </li>
          <button
            className="px-5  py-2  hover:bg-slate-200 rounded-md transition-all delay-100"
            onClick={() => {
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
