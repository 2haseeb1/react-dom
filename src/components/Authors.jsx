
import  { useState } from 'react';
import Navbar from './Navbar';

const authorsData = [
  {
    id: 1,
    name: 'J.K. Rowling',
    bio: 'J.K. Rowling is the author of the much-loved series of seven Harry Potter novels, originally published between 1997 and 2007.',
    books: ['Harry Potter and the Philosopher\'s Stone', 'Harry Potter and the Chamber of Secrets', 'Harry Potter and the Prisoner of Azkaban']
  },
  {
    id: 2,
    name: 'George R.R. Martin',
    bio: 'George R.R. Martin is the globally best-selling author of many fine novels, including A Song of Ice and Fire series.',
    books: ['A Game of Thrones', 'A Clash of Kings', 'A Storm of Swords']
  },
  {
    id: 3,
    name: 'J.R.R. Tolkien',
    bio: 'J.R.R. Tolkien is best known as the author of the classic high fantasy works The Hobbit and The Lord of the Rings.',
    books: ['The Hobbit', 'The Fellowship of the Ring', 'The Two Towers', 'The Return of the King']
  },
 
];

const Authors = () => {
  const [selectedAuthor, setSelectedAuthor] = useState(null);

  const handleAuthorClick = (author) => {
    setSelectedAuthor(author);
  };

  return (
    <div className="authors-container w-[1170px] mx-auto">
      <Navbar></Navbar>
      <h1 className="text-2xl font-bold mb-4">Authors</h1>
      <div className="flex">
        <ul className="w-1/3 pr-4">
          {authorsData.map(author => (
            <li 
              key={author.id} 
              onClick={() => handleAuthorClick(author)}
              className="cursor-pointer p-2 hover:bg-gray-200"
            >
              {author.name}
            </li>
          ))}
        </ul>
        <div className="w-2/3 pl-4 border-l">
          {selectedAuthor ? (
            <div>
              <h2 className="text-xl font-semibold">{selectedAuthor.name}</h2>
              <p className="mt-2">{selectedAuthor.bio}</p>
              <h3 className="mt-4 font-medium">Books:</h3>
              <ul className="list-disc list-inside">
                {selectedAuthor.books.map((book, index) => (
                  <li key={index}>{book}</li>
                ))}
              </ul>
            </div>
          ) : (
            <p>Select an author to see details.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Authors;
