import { useNavigate } from "react-router-dom";

const Card = ({ id, name, image, desc = "", is_video = false }) => {
  const navigate = useNavigate();

  const handleActorSelect = (name) => {
    navigate(`/video/${name}`);
  };
  const handleVideoSelect = (name) => {
    navigate(`/videoplayer/${name}`);
  };

  return (
    <div className="col" key={id}>
      <div className="card shadow-sm">
        <img
          className="bd-placeholder-img card-img-top"
          width="100%"
          height="225"
          src={image}
        />

        <div className="card-body">
          <h4 className="card-text">{name}</h4>
          {is_video ? <p className="card-text">{desc}</p> : ""}
          <div className="d-flex justify-content-between align-items-center">
            <div className="btn-group">
              <button
                type="button"
                className="btn btn-sm btn-outline-secondary"
                onClick={() =>
                  is_video ? handleVideoSelect(name) : handleActorSelect(name)
                }
              >
                {is_video ? "Play Video" : "View Videos"}
              </button>
              <button
                type="button"
                className="btn btn-sm btn-outline-secondary"
              >
                Edit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
