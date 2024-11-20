import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Carousel } from "react-bootstrap";

function MainContent() {
  return (
    <div className="mt-5 mb-5 container" style={{ fontFamily: "Jost, sans-serif", maxWidth: '1300px' , justifyContent : 'center'}}>
      {/* Carousel */}
      <div
        className=" shadow"
        style={{
          overflow: "hidden",
          borderRadius: "60px",
          marginBottom: "30px",
          height: "400px", // Adjusted height to half
        }}
      >
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://via.placeholder.com/800x400"
              alt="First slide"
              style={{ height: "400px", objectFit: "cover" }}
            />
            <Carousel.Caption>
              <h3>First Post</h3>
              <p>Details about the first post.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://via.placeholder.com/800x400"
              alt="Second slide"
              style={{ height: "400px", objectFit: "cover" }}
            />
            <Carousel.Caption>
              <h3>Second Post</h3>
              <p>Details about the second post.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://via.placeholder.com/800x400"
              alt="Third slide"
              style={{ height: "400px", objectFit: "cover" }}
            />
            <Carousel.Caption>
              <h3>Third Post</h3>
              <p>Details about the third post.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>

      {/* Rounded Container for Content */}
      <div
        className=""
        style={{
          borderRadius: "60px",
          backgroundColor: "#F8F9FA",
          padding: "80px",
          marginTop: "30px",
        }}
      >
        {/* Paragraph */}
        <div style={{ marginBottom: "30px" }}>
          <h2 style={{ fontWeight: "600" }}>About Our Organization</h2>
          <p style={{ fontSize: "18px", marginBottom: "60px" }}>
            Welcome to our organization! We offer a variety of activities, events, and programs to engage our community. Whether you're interested in sports, cultural activities, or volunteering, there's something for everyone.
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
            <p>Explore our upcoming events designed to bring people together.</p>
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