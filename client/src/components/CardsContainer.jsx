import Card from "./Card";
import axios from "axios";
import { useState, useEffect } from "react";

function CardsContainer() {
  const [fable, setFable] = useState([]);
  const [action, setAction] = useState([]);
  const [science, setScience] = useState([]);

  async function fetchGenre(genre) {
    try {
      await axios
        .post("http://localhost:5000/book/", { filter: { genre: genre } })
        .then((res) => {
          return res.data.response;
        })
        .catch((e) => {
          alert("wrong details");
          console.log(e);
        });
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    setFable(fetchGenre("Fable"));
    setAction(fetchGenre("Action"));
    setScience(fetchGenre("Science"));
    <Card title="Book Title" likes="100" genre="Fairy" img="src\assets\card_img.png" />;
  }, []);

  return (
    <div>
      <div></div>
    </div>
  );
}

export default CardsContainer;
