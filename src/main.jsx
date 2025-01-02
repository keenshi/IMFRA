import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel } from "react-bootstrap";
import DonateImage from "./Donate.png";
import JSAPImage from "./JSAP.png";
import SAPImage from "./SAP.png";

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
          height: "400px", // Adjusted height to make it shorter
        }}
      >
        <Carousel>
          <Carousel.Item className="text-dark">
            <img
              className="d-block w-100"
              src={SAPImage}
              alt="Student Assistance Program"
              style={{ height: "400px", objectFit: "cover" }}
            />
            <Carousel.Caption>
              <h3></h3>
              <p></p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={JSAPImage}
              alt="Job Search Assistance Program"
              style={{ height: "400px", objectFit: "cover" }}
            />
            <Carousel.Caption>
              <h3></h3>
              <p></p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={DonateImage}
              alt="Donate to Community Center"
              style={{ height: "400px", objectFit: "cover" }}
            />
            <Carousel.Caption>
              <h3></h3>
              <p></p>
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

      {/* Testimony Section */}
      <div
        className="shadow"
        style={{
          borderRadius: "30px",
          backgroundColor: "#ffffff",
          padding: "40px",
          marginTop: "40px",
        }}
      >
        <h2 style={{ textAlign: "center", fontWeight: "600", marginBottom: "30px" }}>
          Success Stories
        </h2>
        <div
          className="d-flex align-items-center mb-4"
          style={{ gap: "20px", borderRadius: "15px", backgroundColor: "#eeffe6", padding: "20px" }}
        >
          <img
            src="./images/testimonial1.jpg"
            alt="Testimonial"
            style={{ width: "80px", height: "80px", borderRadius: "50%" }}
          />
          <div>
            <h5 style={{ fontWeight: "600", marginBottom: "5px" }}>Sarah</h5>
            <p style={{ fontSize: "14px", lineHeight: "1.6" }}>
              "This program helped me achieve my goals and build confidence. I
              highly recommend it!"
            </p>
          </div>
        </div>
        <div
          className="d-flex align-items-center"
          style={{ gap: "20px", borderRadius: "15px", backgroundColor: "#eeffe6", padding: "20px" }}
        >
          <img
            src="./images/testimonial2.jpg"
            alt="Testimonial"
            style={{ width: "80px", height: "80px", borderRadius: "50%" }}
          />
          <div>
            <h5 style={{ fontWeight: "600", marginBottom: "5px" }}>David</h5>
            <p style={{ fontSize: "14px", lineHeight: "1.6" }}>
              "The support and resources offered here are outstanding. I am so
              grateful to be part of this community."
            </p>
          </div>
        </div>
      </div>

      {/* Join Us Section */}
      <div
        className="shadow"
        style={{
          borderRadius: "30px",
          backgroundColor: "#ffffff",
          padding: "40px",
          marginTop: "40px",
        }}
      >
        <h2 style={{ textAlign: "center", fontWeight: "600", marginBottom: "30px" }}>
          Join Us
        </h2>
        <p style={{ fontSize: "16px", lineHeight: "1.6", textAlign: "justify" }}>
          Be a part of a vibrant and supportive community dedicated to fostering
          growth, connection, and shared opportunities. By joining us, you gain
          access to exclusive events, valuable resources, and a network of
          inspiring individuals who are passionate about making a difference.
        </p>
        <div style={{ textAlign: "left", marginTop: "20px" }}>
          <button
            style={{
              backgroundColor: "#28a745",
              color: "#fff",
              border: "none",
              padding: "10px 20px",
              borderRadius: "5px",
              cursor: "pointer",
              fontSize: "16px",
            }}
          >
            Join Now
          </button>
        </div>
      </div>

      {/* Contact Us Section */}
      <div
        className="shadow"
        style={{
          borderRadius: "30px",
          backgroundColor: "#ffffff",
          padding: "40px",
          marginTop: "40px",
        }}
      >
        <h2 style={{ textAlign: "center", fontWeight: "600", marginBottom: "30px" }}>
          Contact Us
        </h2>
        <p style={{ fontSize: "16px", lineHeight: "1.6", textAlign: "justify" }}>
          Have questions or want to learn more? Reach out to us at
          <a href="mailto:info@organization.com" style={{ color: "#007bff", textDecoration: "none" }}>
            info@organization.com
          </a>
          or call us at (123) 456-7890. We look forward to hearing from you!
        </p>
      </div>
    </div>
  );
}

export default MainContent;
