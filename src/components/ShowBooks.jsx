import { useEffect, useState } from "react";
import ratings from '../assets/rating.svg'
import { Link } from "react-router-dom";
const ShowBooks = () => {
   const [books, setBooks] = useState([]); 

  useEffect(() => {
    fetch("booksData.json")
          .then(res => res.json())
      .then(data=>setBooks(data))
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 w-[61%] md:w-[1170px] mx-auto ">
      {books.map(book=><Book key={book.bookId} book={book}></Book>)} 
    </div>
  );
};

export default ShowBooks;



const Book = ({ book }) => {
  const { bookName, image, bookId, author, rating, tags, category } = book;

  return (
    <Link to={`/book/book-details/${bookId}`}>
      <div className="card bg-base-100 shadow-xl mb-5 w-[374px] h-[482px] rounded-[16px] relative">
        <div className="flex justify-center mt-5">
          <div className="bg-[#f3f3f3] py-1 px-5 flex justify-center w-[326px] h-[230px] mx-auto rounded-[16px]">
            <img src={image} alt={`image of ${bookName}`} className="w-[117px] h-[168px] py-3" />
          </div>
        </div>
        <div className="card-body py-5 relative">
          <h2 className="text-2xl"></h2>
          <div className="flex justify-between text-primary text-base font-sans">
            {tags.slice(0, 2).map((tag, idx) => <span key={idx}>{tag}</span>)}
          </div>
          <p className="text-[24px] font-bold font-playfair">{bookName}</p>
          <div className="">
            <p className="text-[16px] text-[#131313] font-[500] font-sans mb-8">By: {author}</p>
            <div className="w-[90%] flex justify-between mt-[40px] absolute bottom-[0]">
              <p>{category}</p>
              <div className="flex gap-[1px] w-[50px] mb-5 mr-3">
                <p>{rating}</p>
                <img src={ratings} alt="" className="w-[24px] h-[24px]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export { Book };

const BookTags = ({booktag}) => {
  return (
    <>
    <div className="">
       {booktag} 

  </div>
  
  
    </>
  )
}

export {BookTags}