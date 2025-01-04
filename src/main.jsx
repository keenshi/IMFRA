import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel } from "react-bootstrap";
import DonateImage from "./Donate.png";
import JSAPImage from "./JSAP.png";
import SAPImage from "./SAP.png";
import Test from "./testimony.png";

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
        <div style={{display:'flex', justifyContent:'center'}}>
          <div
            className="d-flex align-items-center mb-4"
            style={{ width:'60%', gap: "20px", borderRadius: "15px", backgroundColor: "#eeffe6", padding: "20px" }}
          >
            <img
              src={Test}
              alt="Testimonial"
              style={{ width: "80px", height: "80px", borderRadius: "50%" }}
            />
            <div>
              <h5 style={{ fontWeight: "600", marginBottom: "5px" }}>Person1</h5>
              <p style={{ fontSize: "14px", lineHeight: "1.6" }}>
                "This program helped me achieve my goals and build confidence. I
                highly recommend it!"
              </p>
            </div>
          </div>
        </div>
        
        <div style={{display:'flex', justifyContent:'center'}}>
          <div
            className="d-flex align-items-center"
            style={{ width:'60%', gap: "20px", borderRadius: "15px", backgroundColor: "#eeffe6", padding: "20px" }}
          >
            <img
              src={Test}
              alt="Testimonial"
              style={{ width: "80px", height: "80px", borderRadius: "50%" }}
            />
            <div>
              <h5 style={{ fontWeight: "600", marginBottom: "5px" }}>Person2</h5>
              <p style={{ fontSize: "14px", lineHeight: "1.6" }}>
                "The support and resources offered here are outstanding. I am so
                grateful to be part of this community."
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Join Us Section */}
      <div style={{borderRadius: '15px',
              backgroundColor: '#ffffff',
              container:'flex',
              padding: '30px',
              marginTop: '20px',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)', 
            }}>
            <h3 style={{ textAlign: 'center', fontFamily: 'Poppins' }}>Join Our Community</h3>
            <div style={{marginTop:'30px'}}>
              <p>
                Be part of a thriving and supportive community that embraces growth, connection, and shared opportunities. By joining us, you’ll gain access to exclusive events, valuable resources, and a network of inspiring individuals who are committed to making a meaningful difference in society. Our programs are designed to foster personal development, strengthen bonds within the community, and create a platform for collective learning and understanding.
              </p>
            </div>
            <div>
              <p>
                From professional development workshops to social gatherings, Islamic lectures, and cultural events, we offer something for everyone. Our mission is to bring people together, inspire positive change, and uphold the values of compassion, mutual respect, and service to others. 
              </p>
            </div>
            
            
            <div style={{
              display:'flex',
              justifyContent:'center',
            }}>
             <a style={{fontFamily:'Poppins'}} href="https://docs.google.com/forms/d/e/1FAIpQLSf2KMAFJHeSqzbwO5m1ewpBVIkdXfS9eSS4jigiHkctHBVYyw/viewform" target="_blank" rel="noopener noreferrer" className="btn btn-success text-white">
              Join <i class="bi bi-chevron-right"></i>
            </a>  
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
        <p style={{ fontSize: "16px", lineHeight: "1.6", textAlign: "center" }}>
          Have questions or want to learn more? Reach out to us at (49) 456-7890. We look forward to hearing from you!
        </p>
      </div>

    </div>
  );
}

export default MainContent;
