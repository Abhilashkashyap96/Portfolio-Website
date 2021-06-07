import React from "react";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";

import Adsoul from "../Adsoul.png";
import Chuk from "../Chuck_Norries.png";
import Food from "../Food_Delivery.png";
import Nasa from "../NASA_media.png";
import UserCard from "../User_Card.png";
import Zoom from "../Zoom_car_clone.png";

const Projects = () => {
  return (
    <div id="projects">
      <div className="heading">
        <h1>Projects :</h1>
      </div>
      <div className="container pro">
        <Card
          className="container"
          style={{
            width: "25rem",
            opacity: "0.9",
            background: "black",
            marginTop: "30px",
            marginBottom: "30px",
            height:"560px"
          }}
        >
          <Card.Img variant="top" style={{ marginTop: "10px" }} src={Adsoul} />
          <Card.Body variant="Secondary">
            <Card.Title style={{ color: "#f9ab00" }}>ADSOUL</Card.Title>
            <Card.Text style={{ color: "white" }}>
              Here I tried to make some API calls where the API’s contains few
              details related to some of the pre-existing applications such as
              the Render Rates, No. of clicks on the applications, amount of
              revenue generated by the application etc.< br/> Technology – JSX,
              React.js, CSS, Fetch API.
            </Card.Text>
            <a target=' ' href="https://github.com/Abhilashkashyap96/ADSOUL">
              {" "}
              <Button variant="light" style={{ color: "#000", marginTop:"42px" }}>
                Go To Code
              </Button>
            </a>
          </Card.Body>
        </Card>
        <Card
          className="container"
          style={{
            width: "25rem",
            opacity: "0.9",
            background: "black",
            marginTop: "30px",
            marginBottom: "30px",
            height:"560px"
          }}
        >
          <Card.Img
            variant="top"
            src={Chuk}
            style={{ height: "180px", marginTop: "10px" }}
          />
          <Card.Body variant="Secondary">
            <Card.Title style={{ color: "#f9ab00" }}>CHUCK NORRIES</Card.Title>
            <Card.Text style={{ color: "white" }}>
              This is bacically a Jokes website. This is a single page website
              that shows a list of categories of Chuck Norris jokes to choose
              from.Once a category is selected, a joke from that category is
              shown. If a new joke is needed, user needs to click on “new joke”
              which fetches a different joke and shows the user.< br/> Technology –
              JSX, React.js, CSS, Fetch API.
            </Card.Text>
            <a target=' ' href="https://github.com/Abhilashkashyap96/Chuck_Norries">
              <Button variant="light" style={{ color: "#000", marginTop:"10px" }}>
                Go To Code
              </Button>
            </a>
          </Card.Body>
        </Card>
        <Card
          className="container"
          style={{
            width: "25rem",
            opacity: "0.9",
            background: "black",
            marginTop: "30px",
            marginBottom: "30px",
            height:"560px"
          }}
        >
          <Card.Img variant="top" style={{ marginTop: "10px" }} src={Food} />
          <Card.Body variant="Secondary">
            <Card.Title style={{ color: "#f9ab00" }}>
              FOOD DELIVERY WEBSITE
            </Card.Title>
            <Card.Text style={{ color: "white" }}>
              This project was a take on creating a fully functional web
              application and understanding how data flow works between different
              pages and components like cart and order summary.< br/> Technology -
              HTML5, CSS3
            </Card.Text>
            <a target=' ' href="https://github.com/Abhilashkashyap96/food-delivery-app">
              <Button variant="light" style={{ color: "#000", marginTop:"94px"  }}>
                Go To Code
              </Button>
            </a>
          </Card.Body>
        </Card>
        <Card
          className="container"
          style={{
            width: "25rem",
            opacity: "0.9",
            background: "black",
            marginTop: "30px",
            marginBottom: "30px",
            height:"560px"
          }}
        >
          <Card.Img variant="top" style={{ marginTop: "10px" }} src={Nasa} />
          <Card.Body variant="Secondary">
            <Card.Title style={{ color: "#f9ab00" }}>NASA MEDIA</Card.Title>
            <Card.Text style={{ color: "white" }}>
              Here I tried to call NASA API to render the NASA’s picture of the
              day on the landing page, and also included a search functionality
              using which the user can search NASA’s pictures.< br/> Technology – JSX,
              React.js, CSS, Fetch API.
            </Card.Text>
            <a target=' ' href="https://github.com/Abhilashkashyap96/NASA_media">
              {" "}
              <Button variant="light" style={{ color: "#000", marginTop:"94px" }}>
                Go To Code
              </Button>
            </a>
          </Card.Body>
        </Card>
        <Card
          className="container"
          style={{
            width: "25rem",
            opacity: "0.9",
            background: "black",
            marginTop: "30px",
            marginBottom: "30px",
            height:"560px"
          }}
        >
          <Card.Img
            variant="top"
            style={{ marginTop: "10px" }}
            src={UserCard}
          />
          <Card.Body variant="Secondary">
            <Card.Title style={{ color: "#f9ab00" }}>
              USER CARD WITH REACT
            </Card.Title>
            <Card.Text style={{ color: "white" }}>
              Here I tried to make API calls on click of a button, on clicking
              the button the application makes the API call and fetches the user
              details and shows it on the cards.< br/> Technology – JSX, React.js,
              CSS.
            </Card.Text>
            <a target=' ' href="https://github.com/Abhilashkashyap96/User_Card_With_React">
              {" "}
              <Button variant="light" style={{ color: "#000", marginTop:"90px" }}>
                Go To Code
              </Button>
            </a>
          </Card.Body>
        </Card>
        <Card
          className="container"
          style={{
            width: "25rem",
            opacity: "0.9",
            background: "black",
            marginTop: "30px",
            marginBottom: "30px",
            height:"560px"
          }}
        >
          <Card.Img variant="top" style={{ marginTop: "10px" }} src={Zoom} />
          <Card.Body variant="Secondary">
            <Card.Title style={{ color: "#f9ab00" }}>ZOOM CAR CLONE</Card.Title>
            <Card.Text style={{ color: "white" }}>
              Here I tried to clone a live working website, this is just the
              homepage of the zoomcar website, which comprises of total nine
              sections, each section has different designs, and out of the nine
              sections three sections contains carousels, which helped me out to
              get familiar with the carousels also. Technology – < br/>HTML, CSS,
              JavaScript.
            </Card.Text>
            <a target=' ' href="https://github.com/Abhilashkashyap96/Zoom-Car-Clone">
              {" "}
              <Button variant="light" style={{ color: "#000", marginTop:"27px" }}>
                Go To Code
              </Button>
            </a>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default Projects;
