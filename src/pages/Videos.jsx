import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import APIHub from "../apis/APIHub";
import { Header, Card } from "../components";

const Videos = () => {
  const [videos, setVideos] = useState([]);
  const { actor } = useParams();

  useEffect(() => {
    const fetchActors = async () => {
      try {
        const response = await APIHub.get(`/videos/actors/${actor}`);
        setVideos(response.data);
      } catch (error) {
        console.log(error.response);
      }
    };
    fetchActors();
  }, [actor]);

  return (
    <>
      <Header
        pageName={`List of video from ${actor}`}
        desc={`${actor} best known for good acting.`}
      />
      <main className="container">
        <div className="row row-cols-1 row-cols-sm-1 row-cols-md-3 g-3">
          {videos.map((video) => {
            console.log(video);
            return (
              <Card
                id={video.id}
                name={video.title}
                image={video.image}
                desc={video.description}
                is_video={true}
              />
            );
          })}
        </div>
      </main>
    </>
  );
};

export default Videos;
