import logo from "./logo.svg";
import "./App.css";
import UncontrolledExample from "./UncontrolledExample";
import NavBar from "./NavBar";
import Cards from "./Cards";
import CardExample from "./Cards2";
import Contactus from "./components/Contactus";

function App() {
  return (
    <div>
      <NavBar></NavBar>

      <UncontrolledExample></UncontrolledExample>
      <div class="py-5 container">
        <div class="row">
          <div class="col-md-12 text-center">
            <h1>Why to use TIMEPASS headphones</h1>
            <div className="underline mx-auto"></div>
          </div>
        </div>
      </div>
      <Cards></Cards>
      <CardExample></CardExample>

      <Contactus></Contactus>
    </div>
  );
}

export default App;
