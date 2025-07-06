import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import ProjectPage from "./pages/ProjectPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import ScrollToTop from './ScrollToTop'; // import the ScrollToTop component
import NavBar from "./components/NavBar";

function App() {
  return (
    <Router> 
      <div className="App font-satoshi bg-midnight">
        <NavBar />
        {/* Route Pages */}
        <ScrollToTop />
        <Routes>
          <Route
            path="/"
            element={<AboutPage />}
          />
          <Route 
            path="/projects" 
            element={<ProjectPage />} 
          />
          <Route 
            path="/contact" 
            element={<ContactPage />} 
          />
        </Routes>

        <footer className="bg-gradient-to-t from-neutral-900 to-neutral-800">
            <div className="flex flex-col px-4 sm:px-5 lg:px-72 py-16 gap-4">
                <h1 className="text-3xl md:text-5xl text-white text-center">
                Thank you for <span className="font-bold">visiting</span>!
                </h1>
                <span className="flex justify-between text-neutral-400 mt-8">
                <p>© 2023 Allen GFX</p>
                <ul className="flex gap-4">
                    <li>
                    <a href="/">About</a>
                    </li>
                    <li>
                    <a href="/">Service</a>
                    </li>
                </ul>
                </span>
            </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
