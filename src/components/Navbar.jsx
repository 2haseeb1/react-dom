import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className=" ">
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <NavItem to="/" name="Home" />
            <NavItem to="/view-list" name="Listed Books" />
            <NavItem to="/pages-to-read" name="Pages to Read" />
           
            <NavItem to="/authors" name="Authors" /> 
            <NavItem to="/genres" name="Genres" /> 
            </ul>
          </div>
          <p className=" text-xl">BookVibe</p>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 space-x-2">
            <NavItem to="/" name="Home" />
            <NavItem to="/view-list" name="Listed Books" />
            <NavItem to="/pages-to-read" name="Pages to Read" />
           
            <NavItem to="/authors" name="Authors" /> 
            <NavItem to="/genres" name="Genres" /> 
          </ul>
        </div>
        <div className="navbar-end flex gap-2">
          <a className="btn bg-primary text-white">SignIn</a>
          <a className="btn text-white bg-secondary">SignUp</a>
        </div>
      </div>
    </div>
  );
};

const NavItem = ({ to, name }) => {
  return (
    <li>
      <NavLink 
        to={to} 
        className={({ isActive }) =>
          isActive
            ? "active btn btn-outline border-2 border-[#23BE0A]  text-[#23BE0A] text-[18px] font-sans font-[600]"
           : "py-[14px] text-[#131313cc] fo text-[18px] font-sans font-[400]"
        }
      >
        {name}
      </NavLink>
    </li>
  );
};
const NavbarTwo = () => {
  return (
    <div className=" ">
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              <NavItem to="/" name="Home" />
              <NavItem to="/listedbooks" name="Listed Books" />
              <NavItem to="/pagestoread" name="Pages to Read" />
              <NavItem to="/authors" name="Authors" /> 
              <NavItem to="/genres" name="Genres" /> 
            </ul>
          </div>
          <p className=" text-xl">BookVibe</p>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 space-x-2">
            <NavItem to="/" name="Home" />
            <NavItem to="/view-list" name="Listed Books" />
            <NavItem to="/pages-to-read" name="Pages to Read" />
           
            <NavItem to="/authors" name="Authors" /> 
            <NavItem to="/genres" name="Genres" /> 
          </ul>
        </div>
        <div className="navbar-end flex gap-2">
          <a className="btn bg-primary text-white">SignIn</a>
          <a className="btn text-white bg-secondary">SignUp</a>
        </div>
      </div>
    </div>
  );
};

const NavItemTwo = ({ to, name }) => {
  return (
    <li>
      <NavLink 
        to={to} 
        className={({ isActive }) =>
          isActive
            ? "active btn btn-outline border-2 border-[#23BE0A]  text-[#23BE0A] text-[18px] font-sans font-[600]"
           : "py-[14px] text-[#131313cc] fo text-[18px] font-sans font-[400]"
        }
      >
        {name}
      </NavLink>
    </li>
  );
};
export {NavItemTwo}
export {NavbarTwo}
export default Navbar;
