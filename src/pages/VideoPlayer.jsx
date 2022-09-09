import { useParams } from "react-router-dom";

const VideoPlayer = () => {
  const { title } = useParams();
  console.log(title);
  return (
    <main className="container">
      <div className="container-lg mt-5">
        <video width="100%" controls>
          <source src={`http://127.0.0.1:8000/stream/video/?video=${title}`} />
        </video>
      </div>
    </main>
  );
};

export default VideoPlayer;
