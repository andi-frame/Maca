import Card from "./Card";
import axios from "axios";
import { useState, useEffect } from "react";

function CardsContainer({ genre, location }) {
  const [books, setBooks] = useState([]);

  async function fetchGenre(genre) {
    try {
      const response = await axios.post("http://localhost:5000/book/", { filter: { genre: genre } });
      return response.data.response;
    } catch (error) {
      console.error("Error fetching genre:", error);
      return [];
    }
  }

  useEffect(() => {
    async function fetchData() {
      const genreBooks = await fetchGenre(genre);
      setBooks(genreBooks);
    }
    fetchData();
  }, [genre]);

  return (
    <div className="flex gap-6 overflow-auto">
      {books.map((book) => (
        <Card
          key={book._id}
          title={book.title}
          likes={book.likes}
          genre={book.genre}
          img={book.img}
          id={book._id}
          location={location}
        />
      ))}
    </div>
  );
}

export default CardsContainer;
