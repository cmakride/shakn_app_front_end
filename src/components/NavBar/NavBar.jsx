import { Link } from "react-router-dom";
import { useState } from 'react'
import { NavLink } from "react-router-dom";



// const NavBar = ({ user, handleLogout }) => {
//   return (
//     <>
//       {user ? (
//         <nav className="p-5 bg-white shadow md:flex md:items-center md:justify-between">
//           <div>
//             <span className="text-2xl cursor-pointer mr-1 pt-2">
//             <ion-icon name="wine-outline"></ion-icon>
//               <NavLink to='/'>Shakn</NavLink>
//             </span>
//           </div>
//           <ul className="md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in">
//             <li className="mx-4 my-6 md:my-0">
//               <NavLink
//                 to="/add"
//                 className="text-xl hover:text-orange-600 duration-300"
//               >
//                 Add Cocktail
//               </NavLink>
//             </li>
//             <li className="mx-4 my-6 md:my-0">
//               <NavLink
//                 to="/cocktails"
//                 className="text-xl hover:text-orange-600 duration-300"
//               >
//                 View Cocktails
//               </NavLink>
//             </li>
//             <li className="mx-4 my-6 md:my-0">
//               <NavLink
//                 to="/profiles"
//                 className="text-xl hover:text-orange-600 duration-300"
//               >
//                 Profiles
//               </NavLink>
//             </li>
//             <li className="mx-4 my-6 md:my-0">
//               <NavLink
//                 to="/favorites"
//                 className="text-xl hover:text-orange-600 duration-300"
//               >
//                 My Collection
//               </NavLink>
//             </li>
//             <li className="mx-4 my-6 md:my-0">
//               <NavLink
//                 to="/changePassword"
//                 className="text-xl hover:text-orange-600 duration-300"
//               >
//                 Change Password
//               </NavLink>
//             </li>
//             <li className="mx-4 my-6 md:my-0">
//               <NavLink
//                 to=""
//                 onClick={handleLogout}
//                 className="text-xl hover:text-orange-600 duration-300"
//               >
//                 LOG OUT
//               </NavLink>
//             </li>
//           </ul>
//         </nav>
//       ) : (
//         <nav className="p-5 bg-white shaodw md:flex md:items-center md:justify-between">
//           <div>
//             <span className="text-2xl cursor-pointer">
//               <ion-icon name="wine-outline"></ion-icon>
//               Shakn
//             </span>
//           </div>
//           <ul className="md:flex md:items-center md:pb-0 pb-12 abosulite md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9">
//             <li className="mx-4 my-6 md:my-0">
//               <NavLink to="/login" className="text-xl hover:text-orange-600 duration-300">Log In</NavLink>
//             </li>
//             <li className="mx-4 my-6 md:my-0">
//               <NavLink to="/signup" className="text-xl hover:text-orange-600 duration-300">Sign Up</NavLink>
//             </li>
//           </ul>
//         </nav>
//       )}
//     </>
//   );
// };

// export default NavBar;

const NavBar = ({ user, handleLogout }) => {
  
  const [isNavOpen, setIsNavOpen] = useState(false)

  return (
    <>

      {user ? (
        <div className="flex items-center justify-between border-b border-gray-400 py-8">
        <nav>
          <section className="MOBILE-MENU flex lg:hidden">
          <div className="HAMBURGER-ICON space-y-2" onClick={() => setIsNavOpen((prev) => !prev)}>
          
        
            <ion-icon name="wine-outline"></ion-icon>
            <br></br>
              <NavLink to='/'>Shakn</NavLink>
  

            <span className="text-2xl cursor-pointer mr-1 pt-2"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>

          </div>

          <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
            <div
              className="absolute top-0 right-0 px-8 py-8" onClick={() => setIsNavOpen(false)}
            >
              <svg
                className="h-8 w-8 text-gray-600"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
          </div>

          <ul className="flex flex-col items-center justify-between min-h-[250px]">
            <li className="border-b border-gray-400 my-8 uppercase">
              <NavLink
                onClick={() => setIsNavOpen(false)}
                to="/add"
                className="text-xl hover:text-orange-600 duration-300 "
              >
                Add Cocktail
              </NavLink>
            </li>
            <li className="border-b border-gray-400 my-8 uppercase">
              <NavLink
                onClick={() => setIsNavOpen(false)}
                to="/cocktails"
                className="text-xl hover:text-orange-600 duration-300"
              >
                View Cocktails
              </NavLink>
            </li>
            <li className="border-b border-gray-400 my-8 uppercase">
              <NavLink
                onClick={() => setIsNavOpen(false)}
                to="/profiles"
                className="text-xl hover:text-orange-600 duration-300"
              >
                Profiles
              </NavLink>
            </li>
            <li className="border-b border-gray-400 my-8 uppercase">
              <NavLink
                onClick={() => setIsNavOpen(false)}
                to="/favorites"
                className="text-xl hover:text-orange-600 duration-300"
              >
                My Collection
              </NavLink>
            </li>
            <li className="border-b border-gray-400 my-8 uppercase">
              <NavLink
                onClick={() => setIsNavOpen(false)}
                to="/changePassword"
                className="text-xl hover:text-orange-600 duration-300"
              >
                Change Password
              </NavLink>
            </li>
            <li className="border-b border-gray-400 my-8 uppercase">
              <NavLink
                to=""
                onClick={handleLogout}
                className="text-xl hover:text-orange-600 duration-300"
              >
                LOG OUT
              </NavLink>
            </li>
          </ul>
        </div>
      </section>

          <ul className="DESKTOP-MENU hidden space-x-8 lg:flex">
          <li className="border-b border-gray-400 my-8 uppercase">
              <NavLink
                to="/add"
                className="text-xl hover:text-orange-600 duration-300"
              >
                Add Cocktail
              </NavLink>
            </li>
            <li className="border-b border-gray-400 my-8 uppercase">
              <NavLink
                to="/cocktails"
                className="text-xl hover:text-orange-600 duration-300"
              >
                View Cocktails
              </NavLink>
            </li>
            <li className="border-b border-gray-400 my-8 uppercase">
              <NavLink
                to="/profiles"
                className="text-xl hover:text-orange-600 duration-300"
              >
                Profiles
              </NavLink>
            </li>
            <li className="border-b border-gray-400 my-8 uppercase">
              <NavLink
                to="/favorites"
                className="text-xl hover:text-orange-600 duration-300"
              >
                My Collection
              </NavLink>
            </li>
            <li className="border-b border-gray-400 my-8 uppercase">
              <NavLink
                to="/changePassword"
                className="text-xl hover:text-orange-600 duration-300"
              >
                Change Password
              </NavLink>
              </li>
              <li className="border-b border-gray-400 my-8 uppercase">
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
        <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        background: white;
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
      }
    `}</style>
      </div>


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
              <NavLink to="/login" className="text-xl hover:text-orange-600 duration-300">Log In</NavLink>
            </li>
            <li className="mx-4 my-6 md:my-0">
              <NavLink to="/signup" className="text-xl hover:text-orange-600 duration-300">Sign Up</NavLink>
            </li>
            <li className="border-b border-gray-400 my-8 uppercase">
              <NavLink
                to="/profiles"
                className="text-xl hover:text-orange-600 duration-300"
              >
                Profiles
              </NavLink>
            </li>

          </ul>
        </nav>
      )}
    </>
  );
};

export default NavBar;