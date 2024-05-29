import { NavLink } from "react-router-dom"


const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
      <NavLink to="/"> <button className="btn btn-outline">Home</button></NavLink>
      <NavLink to="/listedbooks"> <button className="btn btn-outline">Listed Books</button></NavLink>
      <NavLink to="/pagestoread"> <button className="btn btn-outline">Pages to Read</button></NavLink>
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">BookVibe</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 space-x-2">
      <NavLink to="/"> <button className="btn btn-outline">Home</button></NavLink>
      <NavLink to="/view-list"> <button className="btn btn-outline">Listed Books</button></NavLink>
      <NavLink to="/pagestoread"> <button className="btn btn-outline">Pages to Read</button></NavLink>
    </ul>
  </div>
  <div className="navbar-end flex gap-2">
    <a className="btn bg-primary text-white">SignIn</a>
    <a className="btn text-white bg-secondary">SignUp</a>
  </div>
</div>
    </div>
  )
}

export default Navbar
const NavbarTwo = () => {
  return (
    <div className="w-[1170px] mx-auto">
      <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
      <NavLink to="/"> Home</NavLink>
      <NavLink to="/listedbooks"> Listed Books</NavLink>
      <NavLink to="/pagestoread">Pages to Read</NavLink>
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">BookVibe</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 space-x-2">
      <NavLink to="/"> Home</NavLink>
      <NavLink to="/view-list"> Listed Books</NavLink>
      <NavLink to="/pagestoread"> Pages to Read</NavLink>
    </ul>
  </div>
  <div className="navbar-end flex gap-2">
    <a className="btn bg-primary text-white">SignIn</a>
    <a className="btn text-white bg-secondary">SignUp</a>
  </div>
</div>
    </div>
  )
}

export { NavbarTwo }
