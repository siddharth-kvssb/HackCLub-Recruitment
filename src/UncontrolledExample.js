import Carousel from "react-bootstrap/Carousel";

function UncontrolledExample() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block"
          src="https://hips.hearstapps.com/hmg-prod/images/bluetooth-wireless-headphones-1650563344.gif"
          alt="First slide"
          width="100%"
          height="500"
        />
        <Carousel.Caption>
          <h3>ATTRACTIVE DESIGN</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block"
          src="   https://media.giphy.com/media/5wFuzprwdaFtpsre0R/giphy.gif"
          alt="Second slide"
          width="100%"
          height="500"
        />

        <Carousel.Caption>
          <h3>COMFORTABLE FOR ALL AGES</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block"
          src="https://media.istockphoto.com/id/1208670144/photo/portrait-of-attractive-young-african-american-girl-wearing-wireless-headphones-listening-to.jpg?s=170667a&w=0&k=20&c=RJTItuE7A9CUi6xmQeFEDe9R4MAguhj7xdjutB3ujpo="
          alt="Third slide"
          width="100%"
          height="500"
        />

        <Carousel.Caption>
          <h3>EASY CONNECTING WITH PHONE</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;
