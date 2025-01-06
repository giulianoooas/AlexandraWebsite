import image from "../assets/home_pic.jpg";

export const Home = (props) => {
  const cards = props.cardsHome ?? [];
  const paragraphs = props.homePageParagraphs ?? [];
  const infoObject = props.homePageInfoObject ?? {
    hidden: true,
  };
  const imageStyle = {
    maxHeight: "40vh",
  };

  return (
    <div className="container px-4 px-lg-5">
      <div className="row gx-4 gx-lg-5 align-items-center my-5">
        <div className="col-lg-7">
          <img
            className="img-fluid rounded mb-4 mb-lg-0"
            style={imageStyle}
            src={image}
            alt="..."
          />
          <br />
          <a href="https://en.wikipedia.org/wiki/Flower" target="blank">
            (https://en.wikipedia.org/wiki/Flower)
          </a>
        </div>
        <div className="col-lg-5">
          <h1 className="font-weight-light">{props.homeTitle ?? ""}</h1>
          {paragraphs.map((paragraph, idx) => (
            <p className="custom-text-color" key={idx}>
              {paragraph ?? ""}
            </p>
          ))}
        </div>
      </div>

      {!infoObject.hidden && (
        <div className="card my-5 py-4 text-center custom-info-card">
          <div className="card-body">
            <p className="m-0">{infoObject.text}</p>
          </div>
        </div>
      )}

      <div className="row gx-4 gx-lg-5">
        {cards.map((card, idx) => (
          <div className="col-md-4 mb-5" key={idx}>
            <div className="card h-100">
              <div className="card-body">
                <h2 className="card-title">{card.title}</h2>
                <p className="card-text custom-text-color">{card.text}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
