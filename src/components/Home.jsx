import { Outlet } from "react-router-dom";
import Header from "./Header";
import Banner from "./Banner";
const Home = () => {
  return (
    <div className="w-[1170px] mx-auto">
      <Header></Header>
      <Banner></Banner>
      <Outlet></Outlet>
    </div>
  );
};

export default Home;
