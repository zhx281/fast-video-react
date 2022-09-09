import { useState, useEffect } from "react";

import APIHub from "../apis/APIHub";
import { Header, Card } from "../components";

const Actors = () => {
  const [actors, setActors] = useState([]);

  useEffect(() => {
    const fetchActors = async () => {
      try {
        const response = await APIHub.get("/actors/");
        setActors(response.data);
      } catch (error) {
        console.log(error.response);
      }
    };
    fetchActors();
  }, []);

  return (
    <>
      <Header
        pageName={"List of Actors"}
        desc={"Here is a list of actors in my video database."}
      />
      <main className="container">
        <div className="row row-cols-1 row-cols-sm-1 row-cols-md-3 g-3">
          {actors.map((actor) => {
            return <Card id={actor.id} name={actor.name} image={actor.image} />;
          })}
        </div>
      </main>
    </>
  );
};

export default Actors;
