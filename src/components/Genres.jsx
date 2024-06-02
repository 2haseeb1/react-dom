
import  { useState } from 'react';

const genresData = [
  {
    id: 1,
    name: 'Fantasy',
    description: 'Fantasy books often involve magic, mythical creatures, and adventures in imaginary worlds.',
    exampleBooks: ['Harry Potter Series', 'The Hobbit', 'A Song of Ice and Fire']
  },
  {
    id: 2,
    name: 'Science Fiction',
    description: 'Science fiction explores futuristic concepts, advanced science, and technology, often set in space or other worlds.',
    exampleBooks: ['Dune', 'Neuromancer', 'The Expanse Series']
  },
  {
    id: 3,
    name: 'Mystery',
    description: 'Mystery novels revolve around solving a crime or uncovering secrets, often featuring a detective or investigator.',
    exampleBooks: ['Sherlock Holmes Series', 'Gone Girl', 'The Girl with the Dragon Tattoo']
  },
  {
    id: 4,
    name: 'Romance',
    description: 'Romance books focus on relationships and love stories, often with emotional and dramatic plots.',
    exampleBooks: ['Pride and Prejudice', 'Outlander', 'The Notebook']
  },
  {
    id: 5,
    name: 'Non-Fiction',
    description: 'Non-fiction books are based on factual information, covering a wide range of subjects such as history, biography, and self-help.',
    exampleBooks: ['Sapiens', 'Educated', 'Becoming']
  },
 
];

const Genres = () => {
  const [selectedGenre, setSelectedGenre] = useState(null);

  const handleGenreClick = (genre) => {
    setSelectedGenre(genre);
  };

  return (
    <div className="genres-container p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">Genres</h1>
      <div className="flex">
        <ul className="w-1/3 pr-4">
          {genresData.map(genre => (
            <li 
              key={genre.id} 
              onClick={() => handleGenreClick(genre)}
              className="cursor-pointer p-2 hover:bg-gray-200"
            >
              {genre.name}
            </li>
          ))}
        </ul>
        <div className="w-2/3 pl-4 border-l-2 border-gray-200">
          {selectedGenre ? (
            <div>
              <h2 className="text-xl font-semibold">{selectedGenre.name}</h2>
              <p className="mt-2">{selectedGenre.description}</p>
              <h3 className="mt-4 font-medium">Example Books:</h3>
              <ul className="list-disc list-inside">
                {selectedGenre.exampleBooks.map((book, index) => (
                  <li key={index}>{book}</li>
                ))}
              </ul>
            </div>
          ) : (
            <p>Select a genre to see details.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Genres;
