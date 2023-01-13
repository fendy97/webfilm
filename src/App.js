import './App.css';
import NavigationBar from "./components/NavigationBar"
import Intro from "./components/intro";
import "./style/landingPage.css"
import Trending from "./components/Trending"
import Superhero from "./components/Superhero"

function App() {
  return (
    <div>
      <div className="myBG">
        <NavigationBar />
        <Intro />
      </div>

      <div className="trending">
        <Trending />
      </div>
      
      <div className="Superhero">
        <Superhero />
      </div>
    </div>
  );
}

export default App;
