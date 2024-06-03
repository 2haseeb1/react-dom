import { Link } from 'react-router-dom';
import banner from '../assets/book.svg';

const Banner = () => {
  return (
    <div>
      <div className="hero h-auto bg-[#edebf6] rounded-[24px] py-6 lg:h-[550px] w-[80%]  md:w-[1170px] mx-auto">
        <div className="hero-content flex-col justify-center md:flex-row-reverse items-center ">
          <img src={banner} className="w-[250px] md:w-[300px] lg:w-[358px] rounded-lg shadow-2xl lg:mr-[120px] mb-6 lg:mb-0" />
          <div className='text-center lg:text-left mt-6 lg:mt-[35px] lg:ml-[120px]'>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight lg:leading-[80px]">
              Books to freshen up your bookshelf
            </h1>
            <Link to="/view-list">
              <button className="text-white btn btn-primary normal-case bg-[#23BE0A] text-[14px] border-none outline-none font-sans font-[700] rounded-[8px] mt-6 lg:mt-[70px] mb-6 lg:mb-[30px]">
                View The List
              </button>
            </Link> 
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
