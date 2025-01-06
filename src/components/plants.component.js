import tulip from "../assets/tulip.jpg";
import lily from "../assets/lily.jpg";
import daisy from "../assets/daisy.jpg";

export const Plants = (props) => {
  const images = [tulip, lily, daisy];
  const cards = props.cardsServices ?? [];
  const paragraphs = props.servicesPageParagraphs ?? [];

  const imageStyle = {
    maxHeight: "30vh",
  };

  return (
    <div className="container px-4 px-lg-5 lead">
      <div className="gx-4 gx-lg-5 align-items-center my-5 text-center">
        <div>
          <h1 className="mb-5">{props.servicesPageTitle ?? ""}</h1>
          {paragraphs.map((paragraph, idx) => (
            <p className="custom-text-color" key={idx}>
              {paragraph}
            </p>
          ))}
        </div>
      </div>
      {cards.map((card, idx) => (
        <div className="card custom-info-card my-5 text-center" key={idx}>
          <div className="card-body">
            <div className="row gx-4 gx-lg-5 align-items-center my-5">
              <h1 className="mb-5">{card.title}</h1>
              <div className="col-lg-7">
                <img
                  className="img-fluid rounded mb-4 mb-lg-0"
                  src={images[idx]}
                  alt="..."
                  style={imageStyle}
                />
                <br />
                <a href={card.imageSrc} target="blank">
                  ({card.imageSrc})
                </a>
              </div>
              <div className="col-lg-5 lead">
                <p>{card.description}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
