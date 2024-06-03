import { useState, useEffect } from 'react';
import Navbar from './Navbar';
import location from '../assets/location.svg';
import profile from '../assets/profile.svg';
import page from '../assets/page.svg';
import { FiChevronDown } from 'react-icons/fi';
import Tag from './Tag'; 

const TabData = () => {
  const [activeTab, setActiveTab] = useState('read');
  const [sortOption, setSortOption] = useState('');
  const [readData, setReadData] = useState([]);
  const [wishlistData, setWishlistData] = useState([]);

  useEffect(() => {
    const storedReadData = localStorage.getItem('readList');
    if (storedReadData) {
      setReadData(JSON.parse(storedReadData));
    }

    const storedWishlist = localStorage.getItem('wishlist');
    if (storedWishlist) {
      setWishlistData(JSON.parse(storedWishlist));
    }
  }, []);

  const handleTabChange = (tabName) => {
    setActiveTab(tabName);
  };

  const handleSortChange = (e) => {
    const sortValue = e.target.value;
    setSortOption(sortValue);

    let sortedReadData = [...readData];
    let sortedWishlistData = [...wishlistData];

    if (sortValue === 'rating') {
      sortedReadData.sort((a, b) => b.rating - a.rating);
      sortedWishlistData.sort((a, b) => b.rating - a.rating);
    } else if (sortValue === 'pages') {
      sortedReadData.sort((a, b) => b.totalPages - a.totalPages);
      sortedWishlistData.sort((a, b) => b.totalPages - a.totalPages);
    } else if (sortValue === 'year') {
      sortedReadData.sort((a, b) => b.yearOfPublishing - a.yearOfPublishing);
      sortedWishlistData.sort((a, b) => b.yearOfPublishing - a.yearOfPublishing);
    }

    setReadData(sortedReadData);
    setWishlistData(sortedWishlistData);
  };

  return (
    <div className='w-[90%] md:w-[80%] lg:w-[1170px] mx-auto'>
      <Navbar />

      <h3 className='text-center text-[#131313] text-[20px] md:text-[24px] lg:text-[28px] font-[700] bg-[#1313130d] py-2 my-[20px] md:my-[30px]'>Home</h3>
      <div className='flex justify-center mb-[50px] md:mb-[100px]'>
        <div className="relative w-[145px]">
          <select
            className="select select-info pl-3 w-full bg-[#23BE0A] rounded-md px-[5px] text-white font-[600] border-none outline-none appearance-none"
            onChange={handleSortChange}
            value={sortOption}
          >
            <option disabled value="" className='text-[16px] bg-gray-300'>Sort By</option>
            <option value="rating" className="font-sans bg-gray-300">Rating</option>
            <option value="pages" className="font-sans bg-gray-300">Number of Pages</option>
            <option value="year" className="font-sans bg-gray-300">Publisher Year</option>
          </select>
          <FiChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none text-white" />
        </div>
      </div>

      <div role="tablist" className="tabs tabs-lifted flex flex-col md:flex-row justify-center">
        <a role="tab" className={`tab ${activeTab === 'wishlist' ? 'tab-active' : ''}`} onClick={() => handleTabChange('wishlist')}>Wishlist Books</a>
        <a role="tab" className={`tab ${activeTab === 'read' ? 'tab-active' : ''}`} onClick={() => handleTabChange('read')}>Read Books</a>
   
      </div>

      {activeTab === 'wishlist' && <WishListData data={wishlistData} />}
      {activeTab === 'read' && <ReadData data={readData} />}
    </div>
  );
};

export default TabData;

const ReadData = ({ data }) => {
  return (
    <div className='w-full'>
      {data.map((item, idx) => <ReadItemData key={idx} item={item} />)}
    </div>
  );
};

const ReadItemData = ({ item }) => {
  return (
    <div className='flex flex-col lg:flex-row gap-4 md:gap-8 mb-8 border-2 border-gray-200 rounded-2xl py-2 h-auto lg:h-72 items-center'>
      <div className='flex-shrink-0 w-36 h-36 md:w-56 md:h-56 bg-gray-300 rounded-2xl flex justify-center items-center ml-[30px]'>
        <img src={item.image} alt="" className='w-24 h-32 md:w-32 md:h-44 object-cover' />
      </div>
      <div className='flex-grow space-y-3 w-full lg:w-3/4 px-4 md:px-0'>
        <p className='text-gray-900 font-playfair text-2xl md:text-3xl font-bold'>{item.bookName}</p>
        <p className='font-sans text-gray-700 text-sm md:text-base font-medium'>By: <span>{item.author}</span></p>
        <p className='flex flex-col md:flex-row gap-2 text-gray-900 font-bold font-sans'>
          Tag <span className='flex gap-2 text-green-600 font-medium'>{item.tags ? item.tags.slice(0, 2).map((tag, idx) => <Tag key={idx} tag={tag} />) : null}</span>
          <span className='mt-2 md:mt-0 md:ml-2'>
            <span className='flex text-gray-700 font-medium font-sans gap-1'><img src={location} alt="" className='w-5' />{`year of publishing: ${item.yearOfPublishing}`}</span>
          </span>
        </p>
        <span className='flex gap-1 items-center'><img src={profile} alt="" className="w-5" /><span className='text-gray-600'>{`publisher: ${item.publisher}`}</span><span className='flex text-gray-600'><img src={page} alt="" />{`page ${item.totalPages}`}</span></span>
        <hr className='w-[calc(100%-40px)] my-5' />
        <div className='flex flex-wrap gap-3'>
          <div className='flex'>
            <p className='bg-blue-100 text-blue-500 px-3 py-1 rounded-3xl flex items-center text-base justify-center flex-grow'>{`Category: ${item.category}`}</p>
          </div>
          <div className='flex'>
            <span className='bg-yellow-100 text-yellow-500 px-3 py-1 rounded-3xl flex items-center text-base justify-center flex-grow '>{`Rating: ${item.rating}`}</span>
          </div>
          <div className='flex'>
            <p className='bg-green-600 text-white px-3 py-1 rounded-3xl flex items-center text-base md:text-lg justify-center font-medium'>{`View Details`}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const WishListData = ({ data }) => {
  return (
    <div className='w-full mt-[20px]'>
      {data.map((item, idx) => <WishListComponent key={idx} item={item} />)}
    </div>
  );
};

const WishListComponent = ({ item }) => {
  return (
    <div className='flex flex-col lg:flex-row gap-4 md:gap-8 mb-8 border-2 border-gray-200 rounded-2xl py-2 h-auto lg:h-72 items-center'>
      <div className='flex-shrink-0 w-36 h-36 md:w-56 md:h-56 bg-gray-300 rounded-2xl flex justify-center items-center ml-[30px]'>
        <img src={item.image} alt="" className='w-24 h-32 md:w-32 md:h-44 object-cover' />
      </div>
      <div className='flex-grow space-y-3 w-full lg:w-3/4 px-4 md:px-0'>
        <p className='text-gray-900 font-playfair text-2xl md:text-3xl font-bold'>{item.bookName}</p>
        <p className='font-sans text-gray-700 text-sm md:text-base font-medium'>By: <span>{item.author}</span></p>
        <div className='flex flex-col md:flex-row gap-2 text-gray-900 font-bold font-sans'>
          Tag <div className='flex gap-2 text-green-600 font-medium '>{item.tags ? item.tags.slice(0, 2).map((tag, idx) => <Tag key={idx} tag={tag} />) : null}</div>
          <span className='mt-2 md:mt-0 md:ml-2'>
            <span className='flex text-gray-700 font-medium font-sans gap-1'><img src={location} alt="" className='w-5' />{`year of publishing: ${item.yearOfPublishing}`}</span>
          </span>
        </div>
        <span className='flex gap-1 items-center'><img src={profile} alt="" className="w-5" /><span className='text-gray-600'>{`publisher: ${item.publisher}`}</span><span className='flex text-gray-600'><img src={page} alt="" />{`page ${item.totalPages}`}</span></span>
        <hr className='w-full my-5' />
        <div className='flex flex-wrap gap-3 w-full'>
          <div className='flex'>
            <p className='bg-blue-100 text-blue-500 px-1 rounded-3xl w-43 md:w-50 h-10 flex items-center text-base justify-center '>{`Category: ${item.category}`}</p>
          </div>
          <div className='flex'>
            <span className='bg-yellow-100 text-yellow-500 px-1 rounded-3xl w-32 md:w-44 h-10 flex items-center text-base justify-center '>{`Rating: ${item.rating}`}</span>
          </div>
          <div className='flex'>
            <p className='bg-green-600 text-white px-1 rounded-3xl w-32 md:w-44 h-10 flex items-center text-base md:text-lg justify-center font-medium'>{`View Details`}</p>
          </div>
        </div>
      </div>
    </div>
  );
};





export { ReadItemData, ReadData, WishListComponent, WishListData,Tag };
