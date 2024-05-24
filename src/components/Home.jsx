import { Outlet } from "react-router-dom";
import Header from "./Header";
import Banner from "./Banner";
import ShowBooks from "./ShowBooks";
const Home = () => {
  return (
    <div className="w-[1170px] mx-auto">
      <Header></Header>
      <Banner></Banner>
      <ShowBooks></ShowBooks>
      <Outlet></Outlet>
    </div>
  );
};

export default Home;
