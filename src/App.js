import "./App.css";
import Header from "./component/common/Header";
import Banner from "./component/Banner";
import Intro from "./component/Intro";
import Card from "./component/Card";
function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Intro />
      <Card />
    </div>
  );
}

export default App;
