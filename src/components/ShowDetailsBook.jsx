import { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { NavbarTwo } from './Navbar';

const ShowDetailsBook = () => {
  const [isInWishlist, setIsInWishlist] = useState(false);
  const [isRead, setIsRead] = useState(false);
  const books = useLoaderData();
  const { bookId } = useParams();
  const book = books.find(book => book.bookId === parseInt(bookId));

  useEffect(() => {
    const wishlist = JSON.parse(localStorage.getItem('wishlist') || '[]');
    setIsInWishlist(wishlist.some(item => item.bookId === book.bookId));
    
    const readList = JSON.parse(localStorage.getItem('readList') || '[]');
    setIsRead(readList.some(item => item.bookId === book.bookId));
  }, [book]);

  const handleAddToWishlist = () => {
    if (isRead) {
      toast.warn('This book is already marked as Read and cannot be added to the Wishlist.');
      return;
    }

    const wishlist = JSON.parse(localStorage.getItem('wishlist') || '[]');
    if (wishlist.some(item => item.bookId === book.bookId)) {
      toast.warn('This book is already in your wishlist!');
    } else {
      const updatedWishlist = [...wishlist, book];
      localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
      setIsInWishlist(true);
      toast.success('Book added to wishlist!');
    }
  };

  const handleAddToRead = () => {
    if (isInWishlist) {
      toast.warn('This book is already in your Wishlist and cannot be marked as Read.');
      return;
    }

    const readList = JSON.parse(localStorage.getItem('readList') || '[]');
    if (readList.some(item => item.bookId === book.bookId)) {
      toast.warn('You have already marked this book as Read!');
    } else {
      const updatedReadList = [...readList, book];
      localStorage.setItem('readList', JSON.stringify(updatedReadList));
      setIsRead(true);
      toast.success('Book marked as Read!');
    }
  };

  if (!book) {
    return (
      <>
        <NavbarTwo />
        <div className="w-[1170px] mx-auto mt-[60px]">
          <p className="text-center text-2xl">Book not found</p>
        </div>
      </>
    );
  }

  return (
    <>
      <NavbarTwo />
      <div className="w-[1170px] mx-auto mt-[60px]">
        <div className="flex justify-between gap-8">
          <div className="w-[573px] bg-[#1313130d] h-[711px] flex justify-center items-center">
            <img src={book.image} alt={book.bookName} />
          </div>
          <div className="flex-1">
            <div className="flex flex-col">
              <p className="text-[40px] font-playfair">{book.bookName}</p>
              <p className="font-sans text-[20px] mt-3">By: {book.author}</p>
              <hr className="mt-[20px]" />
              <p className="font-sans text-xl mt-3">{book.category}</p>
              <hr className="mt-[10px]" />
              <p className="mt-6">
                <span className="text-[#131313] font-bold font-sans text-base">Review:</span>
                <span className="text-[#131313b3] text-[16px] font-sans font-[400] leading-[26px]"> {book.review}</span>
              </p>
              <p className="mt-3">
                <div className="flex justify-between w-[350px]">
                  <span className="text-[#131313] font-bold font-sans text-base">Tags: </span>
                  {book.tags.slice(0, 2).map((tag, index) => (
                    <Tag key={index} tag={tag} />
                  ))}
                </div>
              </p>
              <hr className="my-[20px]" />
              <table className="mt-3">
                <tbody>
                  <tr className="hover:bg-gray-100">
                    <td className="py-2 px-4">Number of Pages:</td>
                    <td className="py-2 px-4 font-sans text-[#131313] font-bold">{book.totalPages}</td>
                  </tr>
                  <tr className="hover:bg-gray-100">
                    <td className="py-2 px-4">Publisher:</td>
                    <td className="py-2 px-4 font-sans text-[#131313] font-bold">{book.publisher}</td>
                  </tr>
                  <tr className="hover:bg-gray-100">
                    <td className="py-2 px-4">Year of Publishing:</td>
                    <td className="py-2 px-4 font-sans text-[#131313] font-bold">{book.yearOfPublishing}</td>
                  </tr>
                  <tr className="hover:bg-gray-100">
                    <td className="py-2 px-4">Rating:</td>
                    <td className="py-2 px-4 font-sans text-[#131313] font-bold">{book.rating}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="flex gap-4 pb-5 mb-8 mt-5">
              <button className="btn btn-outline text-[18px] text-[#131313] font-sans font--sans font-[500]" onClick={handleAddToWishlist}>
                {isInWishlist ? 'Already in Wishlist' : 'Add to Wishlist'}
              </button>
              <button className="btn btn-outline text-[18px] text-[#131313] font-sans font-[500]" onClick={handleAddToRead}>
                {isRead ? 'Already Read' : 'Mark as Read'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const Tag = ({ tag }) => {
  return (
    <>
      <div>{tag}</div>
    </>
  );
};

export { Tag };
export default ShowDetailsBook;
