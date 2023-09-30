import { LOGO_URL } from "../utils/constants";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();

  const { loggedInUser } = useContext(UserContext);

  //selector - subscribing to store using a selector

  const cartItems = useSelector((store) => store.cart.items)
  console.log(cartItems);

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
          <li className="px-4 font-bold text-md py-2  hover:bg-slate-200 rounded-md transition-all delay-100">
            <Link to={"/cart"}>Cart - ({cartItems.length} items)</Link>
          </li>
          <button
            className="px-5  py-2  hover:bg-slate-200 rounded-md transition-all delay-100"
            onClick={() => {
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
          >
            {btnName}
          </button>
          <li className="px-4  py-2  hover:bg-slate-200 rounded-md transition-all delay-100">
            {loggedInUser}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
