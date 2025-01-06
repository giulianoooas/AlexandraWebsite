import "./App.css";
import "./styles/styles.css";
import { Navbar } from "./components/navbar.component";
import { Footer } from "./components/footer.component";
import { HashRouter, Route, Routes, Navigate } from "react-router-dom";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import { navbarItems } from "./constants/navbar.constants";
import {
  cardsServices,
  servicesPageParagraphs,
  servicesPageTitle,
} from "./constants/services.constants";
import {
  cardsHome,
  homePageInfoObject,
  homePageParagraphs,
  homeTitle,
} from "./constants/home.constants";
import { Home } from "./components/home.component.js";
import { About } from "./components/about.component.js";
import { Plants } from "./components/plants.component.js";

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Navbar navbarItems={navbarItems} />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <Home
                cardsHome={cardsHome}
                homeTitle={homeTitle}
                homePageParagraphs={homePageParagraphs}
                homePageInfoObject={homePageInfoObject}
              />
            }
          />
          <Route path="/about" element={<About />} />
          <Route
            path="/plants"
            element={
              <Plants
                cardsServices={cardsServices}
                servicesPageTitle={servicesPageTitle}
                servicesPageParagraphs={servicesPageParagraphs}
              />
            }
          />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </HashRouter>
      <Footer />
    </div>
  );
}

export default App;
