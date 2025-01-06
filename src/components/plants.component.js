export const Plants = (props) => {
  const cards = props.cardsServices ?? [];
  const paragraphs = props.servicesPageParagraphs ?? [];

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
                  src={card.imageSrc}
                  alt="..."
                />
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
