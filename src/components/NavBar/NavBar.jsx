import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

const NavBar = ({ user, handleLogout }) => {
  return (
    <>
      {user ? (
        <nav className="p-5 bg-white shadow md:flex md:items-center md:justify-between">
          <div>
            <span className="text-2xl cursor-pointer mr-1 pt-2">
            <ion-icon name="wine-outline"></ion-icon>
              <NavLink to='/'>Shakn</NavLink>
            </span>
          </div>
          <ul className="md:flex md:items-center md:pb-0 pb-12 abosulite md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in">
            <li className="mx-4 my-6 md:my-0">
              <NavLink
                to="/add"
                className="text-xl hover:text-orange-600 duration-300"
              >
                Add Cocktail
              </NavLink>
            </li>
            <li className="mx-4 my-6 md:my-0">
              <NavLink
                to="/cocktails"
                className="text-xl hover:text-orange-600 duration-300"
              >
                View Cocktails
              </NavLink>
            </li>
            <li className="mx-4 my-6 md:my-0">
              <NavLink
                to="/profiles"
                className="text-xl hover:text-orange-600 duration-300"
              >
                Profiles
              </NavLink>
            </li>
            <li className="mx-4 my-6 md:my-0">
              <NavLink
                to="/favorites"
                className="text-xl hover:text-orange-600 duration-300"
              >
                My Collection
              </NavLink>
            </li>
            <li className="mx-4 my-6 md:my-0">
              <NavLink
                to="/changePassword"
                className="text-xl hover:text-orange-600 duration-300"
              >
                Change Password
              </NavLink>
            </li>
            <li className="mx-4 my-6 md:my-0">
              <NavLink
                to=""
                onClick={handleLogout}
                className="text-xl hover:text-orange-600 duration-300"
              >
                LOG OUT
              </NavLink>
            </li>
          </ul>
        </nav>
      ) : (
        <nav className="p-5 bg-white shaodw md:flex md:items-center md:justify-between">
          <div>
            <span className="text-2xl cursor-pointer">
              <ion-icon name="wine-outline"></ion-icon>
              Shakn
            </span>
          </div>
          <ul className="md:flex md:items-center md:pb-0 pb-12 abosulite md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9">
            <li className="mx-4 my-6 md:my-0">
              <Link to="/login">Log In</Link>
            </li>
            <li className="mx-4 my-6 md:my-0">
              <Link to="/signup">Sign Up</Link>
            </li>
          </ul>
        </nav>
      )}
    </>
  );
};

export default NavBar;
