import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel } from "react-bootstrap";
import EidUlAdha from "./images/Eid Ul Adha 2022.jpg";
import HMDImage from "./images/HMD group photo.jpg";
import IftarDawat from "./images/Iftaar-05.jpg";

function MainContent() {
  return (
    <div
      className="mt-5 mb-5 container"
      style={{
        fontFamily: "Jost, sans-serif",
        maxWidth: "1300px",
        justifyContent: "center",
      }}
    >
      {/* Carousel */}
      <div
        className=" shadow"
        style={{
          overflow: "hidden",
          borderRadius: "60px",
          marginBottom: "30px",
          height: "500px", // Adjusted height to half
        }}
      >
        <Carousel>
          <Carousel.Item className="text-dark">
            <img
              className="d-block w-100"
              src={HMDImage}
              alt="HMD event Volunteers"
              style={{ height: "500px", objectFit: "cover" }}
            />
            <Carousel.Caption>
              <h3>Volunteers</h3>
              <p>IMFRA volunteers actively participated in HMD event</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={EidUlAdha}
              alt="Eid Ul Adha 2022 event"
              style={{ height: "500px", objectFit: "cover" }}
            />
            <Carousel.Caption>
              <h3>Eid Ul Adha 2022 event</h3>
              <p>IMFRA Community together on Eid Ul Adha 2022</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={IftarDawat}
              alt="Iftar by IMFRA"
              style={{ height: "500px", objectFit: "cover" }}
            />
            <Carousel.Caption>
              <h3>Iftar by IMFRA</h3>
              <p>Iftar dawat organised by IMFRA</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>

      {/* Rounded Container for Content */}
      <div
        className=""
        style={{
          borderRadius: "60px",
          backgroundColor: "#eeffe6",
          padding: "80px",
          marginTop: "30px",
        }}
      >
        {/* Paragraph */}
        <div style={{ marginBottom: "30px" }}>
          <h2 style={{ fontWeight: "600" }}>About Our Organization</h2>
          <p style={{ fontSize: "18px", marginBottom: "60px" }}>
            Welcome to our organization! We offer a variety of activities,
            events, and programs to engage our community. Whether you're
            interested in sports, cultural activities, or volunteering, there's
            something for everyone.
          </p>
        </div>

        {/* Rounded Boxes */}
        <div className="d-flex justify-content-between" style={{ gap: "20px" }}>
          {/* Box 1 */}
          <div
            className="shadow p-4 flex-fill"
            style={{
              backgroundColor: "#FFFFFF",
              borderRadius: "30px",
              flex: "1",
            }}
          >
            <h3>Events</h3>
            <p>
              Explore our upcoming events designed to bring people together.
            </p>
          </div>
          {/* Box 2 */}
          <div
            className="shadow p-4 flex-fill"
            style={{
              backgroundColor: "#FFFFFF",
              borderRadius: "30px",
              flex: "1",
            }}
          >
            <h3>Sports</h3>
            <p>Join our sports programs and enjoy recreational activities.</p>
          </div>
          {/* Box 3 */}
          <div
            className="shadow p-4 flex-fill"
            style={{
              backgroundColor: "#FFFFFF",
              borderRadius: "30px",
              flex: "1",
            }}
          >
            <h3>Activities</h3>
            <p>Participate in cultural, educational, and community programs.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainContent;
