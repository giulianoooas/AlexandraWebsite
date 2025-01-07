export const Contact = () => {
  const email = "email";

  const formStyle = {
    height: "81vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
  };

  const divStyle = {
    width: "50vw",
    marginTop: "5rem",
  };
  const inputStyle = {
    width: "70%",
  };

  const labelStyle = {
    width: "20%",
  };

  const buttonStyle = {
    marginTop: "1rem",
    backgroundColor: "#1b5206",
  };

  function sendMail() {
    const subject = document.getElementById("contactSubject")?.value || "";
    const message = document.getElementById("contactMessage")?.value || "";

    const link = document.createElement("a");

    link.href = `mailto:${email}?subject:${subject}&body:${message}`;
    console.log(link.href);

    link.click();
  }

  return (
    <div style={formStyle}>
      <div className="gx-4 gx-lg-5 align-items-center my-5 text-center">
        <div>
          <h2 className="mb-5">For more questions you can send me an email.</h2>
        </div>
      </div>

      <div style={divStyle}>
        <label htmlFor="subject" style={labelStyle}>
          Subject
        </label>
        <input
          id="contactSubject"
          name="subject"
          type="text"
          placeholder="Subject"
          style={inputStyle}
        ></input>
      </div>

      <div style={divStyle}>
        <label htmlFor="message" style={labelStyle}>
          Message
        </label>
        <input
          id="contactMessage"
          name="message"
          type="text"
          placeholder="Message"
          style={inputStyle}
        ></input>
      </div>

      <button
        onClick={sendMail}
        style={buttonStyle}
        className="btn btn-primary"
      >
        Send mail
      </button>
    </div>
  );
};
