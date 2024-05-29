
import { Link } from 'react-router-dom'
import banner from '../assets/book.svg'
const Banner = () => {
  return (
    <div>
      <div className="hero h-[550px] bg-[#edebf6] rounded-[24px]">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src={banner} className="w-[358px] rounded-lg shadow-2xl mr-[120px]" />
    <div className='mt-[35px] ml-[120px]'>
      <h1 className="text-5xl font-bold leading-[80px]">Books to freshen up your bookshelf</h1>
    
     <Link to="/view-list"><button className="text-white   btn btn-primary normal-case bg-[#23BE0A] text-[14px] border-none outline-none font-sans font-[700] rounded-[8px] mt-[70px] mb-[30px]">View The List</button></Link> 
    </div>
  </div>
</div>
    </div>
  )
}

export default Banner
