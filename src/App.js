import "./App.css";
import Nav from "./nav";
import Universities from "./universities";
import PostalLookup from "./postalLookup";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path= "/" element={<Home/>} />
          <Route path= "/universities" element={<Universities/>} />
          <Route path= "/postalLookup" element={<PostalLookup/>} />
        </Routes>
      </div>
    </Router>
  );
}

const Home = () => (
  <div>
    <h1>Home</h1>
  </div>
);

export default App;
