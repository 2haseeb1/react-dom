const fetchBookDetails = async ({ params }) => {
    try {
      const response = await fetch("/booksData.json");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const books = await response.json();
      console.log("Fetched books:", books);
      console.log("Params:", params);
      const book = books.find(book => book.bookId === params.bookId);
      console.log("Found book:", book);
      if (!book) {
        throw new Error(`Book with ID ${params.bookId} not found`);
      }
      return book;
    } catch (error) {
      console.error("Error fetching book details:", error);
      throw error;
    }
  };

  export {fetchBookDetails}