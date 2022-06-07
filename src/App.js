import Header from "./component/common/Header";
import Banner from "./component/Banner";
import Intro from "./component/Intro";
import Cart from "./component/Cart";
import Service from "./component/Service";

function App() {
  return (
    <div>
      <title>Bounless.com</title>
      <Header />
      <Banner />
      <Intro />
      <Cart />
      <Service />
      <img src="images/nuro.png" alt="Nuro" />
    </div>
  );
}

export default App;
