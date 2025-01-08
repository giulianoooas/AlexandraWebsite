export const Contact = () => {
  const email = "alexandra10905st@gmail.com";

  const formStyle = {
    height: "81vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
  };

  const divStyle = {
    marginTop: "3rem",
  };

  const buttonStyle = {
    marginTop: "1rem",
    backgroundColor: "#1b5206",
  };

  function sendMail() {
    const subject = (
      document.getElementById("contactSubject")?.value || ""
    ).replace(/ /g, "%20");
    const message = (
      document.getElementById("contactMessage")?.value || ""
    ).replace(/ /g, "%20");

    const link = document.createElement("a");

    link.href = `mailto:${email}?subject=${subject}&body=${message}`;

    link.click();
  }

  return (
    <div style={formStyle}>
      <div className="gx-4 gx-lg-5 align-items-center my-5 text-center">
        <div>
          <h2 className="mb-5">For more questions you can send me an email.</h2>
        </div>
      </div>

      <div style={divStyle} className="form-group">
        <label htmlFor="contactSubject">Subject</label>
        <input
          id="contactSubject"
          name="contactSubject"
          type="text"
          className="form-control"
          placeholder="Subject"
        ></input>
      </div>

      <div style={divStyle} className="form-group">
        <label htmlFor="contactMessage">Message</label>
        <input
          id="contactMessage"
          name="contactMessage"
          type="text"
          className="form-control"
          placeholder="Message"
        ></input>
      </div>

      <button
        onClick={sendMail}
        style={buttonStyle}
        className="btn btn-primary"
      >
        Send mail
      </button>

      <div style={divStyle}>
        For mor information
        <a
          href="../assets/cv.pdf"
          download={"my_cv.pdf"}
          style={{ marginLeft: "5px" }}
        >
          click to download my cv
        </a>
      </div>
    </div>
  );
};
