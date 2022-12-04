import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Placeholder from "react-bootstrap/Placeholder";
import classes from "./App.css";

function CardExample() {
  return (
    <div className="some">
      <div className="d-flex justify-content-around">
        <div class="shadow p-3 mb-5">
          <Card className="zoom" style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src="https://i.pinimg.com/originals/dc/c9/ce/dcc9cea8525b59b91d1a6ed0e27fff59.gif"
            />
            <Card.Body>
              <Card.Title>HQ QUALITY </Card.Title>
              <Card.Text>
                we at TIMEPASS company provide headphones with best quality of
                sound And can be adjustabe for any age
              </Card.Text>
            </Card.Body>
          </Card>
        </div>

        <div class="shadow p-3 mb-5">
          <Card className="zoom" style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src="https://bestanimations.com/media/speakers/295014793speaker-subwoofer-animation-15.gif"
              height="200"
            />
            <Card.Body>
              <Card.Title>BASS</Card.Title>
              <Card.Text>
                TIMEPASS headphones comes with base boosted quality sound
              </Card.Text>
            </Card.Body>
          </Card>
        </div>

        <div class="shadow p-3 mb-5">
          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src="https://www.bluetooth.com/wp-content/uploads/2019/04/Bluetooth_FM_Color.png"
            />
            <Card.Body>
              <Card.Title>Bluetooth</Card.Title>
              <Card.Text>
                This headphones comes with super fast Bluetooth pare up without
                any lagging in the sound
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default CardExample;
