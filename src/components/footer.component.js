import { Form } from "react-router-dom";

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="py-5 custom-footer">
      <div className="container px-4 px-lg-5">
        <p className="m-0 text-center text-white">
          Copyright &copy; Alexandra Stoica {year}
        </p>
      </div>
    </footer>
  );
};
