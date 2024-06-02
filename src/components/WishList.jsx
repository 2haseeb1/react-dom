import  { useState, useEffect } from 'react';
import Navbar from './Navbar';
import arrow from '../assets/arrow.svg';
import location from '../assets/location.svg';
import profile from '../assets/profile.svg';
import page from '../assets/page.svg';

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
    }
     else if (sortValue === 'year') {
      sortedReadData.sort((a, b) => b.yearOfPublishing - a.yearOfPublishing);
      sortedWishlistData.sort((a, b) => b.yearOfPublishing - a.yearOfPublishing);
    }

    setReadData(sortedReadData);
    setWishlistData(sortedWishlistData);
  };

  return (
    <div className='w-[1170px] mx-auto'>
      <Navbar />

      <h3 className='text-center text-[#131313] text-[28px] font-[700] bg-[#1313130d] py-2 my-[30px]'>Home</h3>
      <div className='flex justify-center mb-[100px]'>
        <div>
          <select
            className="select select-info pl-3 w-[145px] bg-cover bg-[#23BE0A] rounded-md px-[5px] text-white font-[600] border-none outline-none"
            style={{
              backgroundImage: `url(${arrow})`,
              backgroundSize: '24px',
              backgroundCover: 'cover',
            }}
            onChange={handleSortChange}
            value={sortOption}
          >
            <option disabled value="" className='text-[16px] bg-gray-300'>Sort By</option>
            <option value="rating" className="font-sans bg-gray-300">Rating</option>
            <option value="pages" className="font-sans bg-gray-300">Number of Pages</option>
            <option value="year" className="font-sans bg-gray-300">Publisher Year</option>
          </select>
        </div>
      </div>

      <div role="tablist" className="tabs tabs-lifted">
        <a role="tab" className={`tab ${activeTab === 'wishlist' ? 'tab-active' : ''}`} onClick={() => handleTabChange('wishlist')}>Wishlist Books</a>
        <a role="tab" className={`tab ${activeTab === 'read' ? 'tab-active' : ''}`} onClick={() => handleTabChange('read')}>Read Books</a>
        <a role="tab" className={`tab ${activeTab === 'content' ? 'tab-active' : ''}`} onClick={() => handleTabChange('content')}>Content</a>
      </div>

      {activeTab === 'wishlist' && <WishListData data={wishlistData} />}
      {activeTab === 'read' && <ReadData data={readData} />}
    </div>
  );
};

export default TabData;

const ReadData = ({ data }) => {
  return (
    <div>
      {data.map((item, idx) => <ReadItemData key={idx} item={item} />)}
    </div>
  );
};

const ReadItemData = ({ item }) => {
  return (
    <div className='flex gap-8 mb-[30px] border-2 border-[#13131326] rounded-[16px] py-2 h-[277px] space-y-3 items-center'>
      <div className='w-[230px] h-[230px] bg-gray-300 rounded-[24px] flex justify-center items-center ml-6'>
        <img src={item.image} alt="" className='w-[129px] h-[172px] object-cover' />
      </div>
      <div className='h-[230px] space-y-[12px] w-[750px]'>
        <p className='text-[#131313] font-playfair text-[24px] font-[700]'>{item.bookName}</p>
        <p className='font-sans text-[#131313cc] text-base font-[500]'>By: <span>{item.author}</span></p>
        <p className='flex gap-2 text-[#131313] font-bold font-sans'>
          Tag <span className='space-x-2 flex text-[#23BE0A] font-[500]'>{item.tags.slice(0, 2).map((tag, idx) => <Tag key={idx} tag={tag} />)}</span>
          <span className='ml-[-95px]'>
            <span className='flex text-[#131313cc] font-[500] font-sans gap-1'><img src={location} alt="" className='w-[20px]' />{`year of publishing: ${item.yearOfPublishing}`}</span>
          </span>
        </p>
        <span className='flex gap-1'><img src={profile} alt="" className="w-[20px]" /><span className='text-[#13131399]'>{`publisher: ${item.publisher}`}</span><span className='flex text-[#13131399]'><img src={page} alt="" />{`page ${item.totalPages}`}</span></span>
        <hr className='w-[750px] my-5' />
        <div className='flex mt-[24px] gap-3'>
          <div className='flex'>
            <p className='bg-[#328eff26] text-[#328EFF] px-1 rounded-[30px] w-[174px] h-[41px] flex items-center text-[16px]pl-3 justify-center'>{`Category: ${item.category}`}</p>
          </div>
          <div className='flex'>
            <span className='bg-[#ffac3326] text-[#FFAC33] px-1 rounded-[30px] w-[174px] h-[41px] flex items-center text-[16px]pl-3 justify-center '>{`Rating: ${item.rating}`}</span>
          </div>
          <div className='flex'>
            <p className='bg-[#23BE0A] text-[#fff] px-1 rounded-[30px] w-[174px] h-[41px] flex items-center text-[25px]pl-3 justify-center font-[500]'>{`View Details`}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const WishListData = ({ data }) => {
  return (
    <div className='w-[1170px] mx-auto mt-[20px]'>
      {data.map((item, idx) => <WishListComponent key={idx} item={item} />)}
    </div>
  );
};

const WishListComponent = ({ item }) => {
  return (
    <div className='flex gap-8 mb-[30px] border-2 border-[#13131326] rounded-[16px] py-2 h-[277px] space-y-3 items-center'>
      <div className='w-[230px] h-[230px] bg-gray-300 rounded-[24px] flex justify-center items-center ml-6'>
        <img src={item.image} alt="" className='w-[129px] h-[172px] object-cover' />
      </div>
      <div className='h-[230px] space-y-[12px] w-[750px]'>
        <p className='text-[#131313] font-playfair text-[24px] font-[700]'>{item.bookName}</p>
        <p className='font-sans text-[#131313cc] text-base font-[500]'>By: <span>{item.author}</span></p>
        <p className='flex gap-2 text-[#131313] font-bold font-sans'>
          Tag <span className='space-x-2 flex text-[#23BE0A] font-[500]'>{item.tags.slice(0, 2).map((tag, idx) => <Tag key={idx} tag={tag} />)}</span>
          <span className='ml-[-95px]'>
            <span className='flex text-[#131313cc] font-[500] font-sans gap-1'><img src={location} alt="" className='w-[20px]' />{`year of publishing: ${item.yearOfPublishing}`}</span>
          </span>
        </p>
        <span className='flex gap-1'><img src={profile} alt="" className="w-[20px]" /><span className='text-[#13131399]'>{`publisher: ${item.publisher}`}</span><span className='flex text-[#13131399]'><img src={page} alt="" />{`page ${item.totalPages}`}</span></span>
        <hr className='w-[750px] my-5' />
        <div className='flex mt-[24px] gap-3'>
          <div className='flex'>
            <p className='bg-[#328eff26] text-[#328EFF] px-1 rounded-[30px] w-[174px] h-[41px] flex items-center text-[16px]pl-3 justify-center'>{`Category: ${item.category}`}</p>
          </div>
          <div className='flex'>
            <span className='bg-[#ffac3326] text-[#FFAC33] px-1 rounded-[30px] w-[174px] h-[41px] flex items-center text-[16px]pl-3 justify-center '>{`Rating: ${item.rating}`}</span>
          </div>
          <div className='flex'>
            <p className='bg-[#23BE0A] text-[#fff] px-1 rounded-[30px] w-[174px] h-[41px] flex items-center text-[25px]pl-3 justify-center font-[500]'>{`View Details`}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Tag = ({ tag }) => {
  return (
    <div className='space-x-3 flex gap-3 w-[250px]'>
      <p className='bg-[#23be0a0d] py-1 px-3 rounded-[30px]'>#{tag}</p>
    </div>
  );
};

export { Tag, ReadItemData, ReadData, WishListComponent, WishListData };
