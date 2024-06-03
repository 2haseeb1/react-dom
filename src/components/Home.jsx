
import Header from "./Header";
import Banner from "./Banner";
import ShowBooks from "./ShowBooks";
const Home = () => {
  return (
    <div className="w-[600px] md:w-[1170px] mx-auto">
      <Header></Header>
      <Banner></Banner>
      <ShowBooks></ShowBooks>
     
    </div>
  );
};

export default Home;
