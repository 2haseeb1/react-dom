import { useEffect, useState } from "react";
import rating from '../assets/rating.svg'
const ShowBooks = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("booksData.json")
          .then(res => res.json())
      .then(data=>setBooks(data))
  }, []);

  return (
    <div className="grid grid-cols-3 gap-5">
     {books.map(book=><Book key={book.bookId} book={book}></Book>)}
    </div>
  );
};

export default ShowBooks;
const Book = ({ book }) => {
    console.log("book",book)
    return (
        <>
            <div>
                
            <div class="card  bg-base-100 shadow-xl mb-5 w-[374px] h-[482px] rounded-[16px] ">
           
            <div className="flex justify-center mt-5">
            <div className="bg-[#f3f3f3] py-1 px-5 flex justify-center w-[326px] h-[230px]mx-auto rounded-[16px]"><img src={book.image} alt={`image of ${book.bookName}`} className="w-[117px] h-[168px] py-3" /></div>
            </div>
  <div class="card-body">
    <h2 class=" text-2xl"></h2>
              <p className="text-[24px] font-bol font-playfair">{ book.bookName}</p>
    <div class="">
                <p className="text-[16px] [#131313]font-[500] font-sans">By:{book.author}</p>
                <div className="w-full flex justify-between mt-[50px]">
                  <p>{book.category}</p>
                  <div className="flex gap-[1px] w-[50px]">
                  <p>{book.rating}</p>
                  <img src={rating} alt="" className="w-[64px] h-[24px]"/>
                  </div>
                </div>
    </div>
  </div>
</div>
        </div>
        
        
        </>
    )
}