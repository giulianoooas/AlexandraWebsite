import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import "../styles/navbar.component.css";

export const Navbar = (props) => {
  const location = useLocation();
  const navbarItems = props.navbarItems ?? [];

  const putClasses = () => {
    Object.values(navbarItems).forEach((navbarItem) => {
      let className = "nav-link";

      if (navbarItem.path === location.pathname) {
        className = `${className} active`;
      }

      navbarItem.className = className;
    });
  };
  putClasses();

  const setTabTile = () => {
    let title = "Nature";

    Object.values(navbarItems).forEach((navbarItem) => {
      if (navbarItem.path === location.pathname) {
        title += ` - ${navbarItem.label}`;
      }
    });

    document.title = title;
  };
  setTabTile();

  useEffect(() => {
    putClasses();
    setTabTile();
  }, [location]);

  return (
    <nav className="navbar navbar-expand-lg custom-navbar">
      <div className="container px-5">
        <div>
          <Link to="/">
            <span className="navbar-brand">Nature</span>
          </Link>
        </div>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            {Object.entries(navbarItems).map(([page, navbarItem]) => (
              <li className="nav-item" key={page}>
                <Link to={navbarItem.path}>
                  <span className={navbarItem.className}>
                    {navbarItem.label}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};
