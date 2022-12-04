import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Placeholder from "react-bootstrap/Placeholder";

function CardExample() {
  return (
    <div className="d-flex justify-content-around ">
      <div class="shadow p-3 mb-5">
        <Card className="zoom" style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://rukminim1.flixcart.com/image/416/416/jc0ttow0-1/mobile-accessories-combo/u/x/m/aux-stereo-wire-combo-628-2-saihan-original-imae9gwrkdjzgwvh.jpeg?q=70"
          />
          <Card.Body>
            <Card.Title>AUX</Card.Title>
            <Card.Text>
              Headphones can be connected with an aux cable to coonect to moe
              number of devices
            </Card.Text>
          </Card.Body>
        </Card>
      </div>

      <div class="shadow p-3 mb-5">
        <Card className="zoom" style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://www.fingers.co.in/secure/api/uploads/story/1634913528_8385_battery.gif"
          />
          <Card.Body>
            <Card.Title>BATTERY</Card.Title>
            <Card.Text>
              TIMEPASS company headphones battry life is ammazing charge for 5
              min listin for 30 min. And has very good battry back up
            </Card.Text>
          </Card.Body>
        </Card>
      </div>

      <div class="shadow p-3 mb-5">
        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://media1.giphy.com/media/LnjHOUgggUx1jVq6oi/200w.gif?cid=6c09b952qmxf5mqihhxxnmxb43lrke12oyc3plw3z5cp3f2n&rid=200w.gif&ct=g"
          />
          <Card.Body>
            <Card.Title>LIGHT-WEIGHT</Card.Title>
            <Card.Text>
              The headphones light in weight and has stylish design which makes
              it more comfortable and looks very good on you. And can be carryed
              anywhare with ease
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default CardExample;
