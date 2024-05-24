
import banner from '../assets/banner-removebg-preview.png'
const Banner = () => {
  return (
    <div>
      <div className="hero h-[550px] bg-[#edebf6]">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src={banner} className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">Books to freshen up your bookshelf</h1>
    
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
    </div>
  )
}

export default Banner