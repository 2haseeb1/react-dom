import { useLoaderData, useParams } from "react-router-dom";
import { NavbarTwo } from './Navbar';

const ShowDetailsBook = () => {
  const books = useLoaderData();
  const { bookId } = useParams();

  const book = books.find(book => book.bookId === parseInt(bookId));
  console.log("databook", book);

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
                
                
                <div className="flex justify-between w-[350px]"><span className="text-[#131313] font-bold font-sans text-base">Tags: </span>
                {book.tags.slice(0, 2).map((tag, index) => (
                  <Tag key={index} tag={tag} />
                ))}
                </div>
              </p>
              <hr  className="my-[20px]"/>
            </div>
            <div className="ml-[-15px]">
            <tr  className="hover:bg-gray-100">
              <td className="py-2 px-4 ">{`Number of Pages:`}</td>
              <td className="py-2 px-4 font-sans text-[#131313] font-bold">{`${book.totalPages}`}</td>
            </tr>
            <tr  className="hover:bg-gray-100">
              <td className="py-2 px-4 ">{`Publisher:`}</td>
              <td className="py-2 px-4 font-sans text-[#131313] font-bold">{`${book.publisher}`}</td>
            </tr>
            <tr  className="hover:bg-gray-100">
              <td className="py-2 px-4 ">{`Year of Publishing:`}</td>
              <td className="py-2 px-4 font-sans text-[#131313] font-bold">{`${book.yearOfPublishing}`}</td>
            </tr>
            <tr  className="hover:bg-gray-100">
              <td className="py-2 px-4 ">{`Rating:`}</td>
              <td className="py-2 px-4 font-sans text-[#131313] font-bold">{`${book.rating}`}</td>
            </tr>
            </div>
         
            <div className="flex gap-4 pb-5 mb-8 mt-5">
              <button className="btn btn-outline text-[18px] text-[#131313] font-sans font-[500]">Read</button>
              <button className="btn btn-success text-[18px] text-[#fff] font-sans font-[500] bg-[#50B1C9]">Wishlist</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const Tag = ({ tag }) => {
  return (
    <span className="text-[#23BE0A] text-[16px] font-sans font-[400] leading-[26px] bg-[#23BE0A0D] rounded-[30px] px-[16px] py-[7px]"> #{`${tag}`} </span>
  );
};
export {Tag}
export default ShowDetailsBook;

