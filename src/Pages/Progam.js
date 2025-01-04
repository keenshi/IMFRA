export const Program = () => {
    const program = [
      {
        title: "Student Assistance Program",
        description:
        "Personalized guidance to help students choose the right university, academic programs, and courses that align with their goals. This program ensures students navigate their educational journey with clarity and confidence.",
        volunteerLink: "https://example.com/sap-volunteer",
        applyLink: "https://example.com/sap-apply",
      },
      {
        title: "Job Seeker Assistance Program",
        description:
          "Connect with industry professionals, HR managers, and career opportunities. This program offers networking support, resume building, and interview preparation to help students achieve their career goals.",
        volunteerLink: "https://example.com/jsap-volunteer",
        applyLink: "https://example.com/jsap-apply",
      },
      {
        title: "Student Relocation Assistance Program",
        description:
          "Assistance for students relocating to a new home, including moving furniture, packing, and settling in. Our goal is to make the transition stress-free and ensure students feel at home quickly.",
        volunteerLink: "https://example.com/rap-volunteer",
        applyLink: "https://example.com/rap-apply",
      },
      {
        title: "Airport Pickup Service",
        description:
          "A friendly and reliable pickup service for new students arriving in the city. We ensure a safe and comfortable journey from the airport to their accommodation to ease the challenges of arrival.",
        volunteerLink: "https://example.com/airport-volunteer",
        applyLink: "https://example.com/airport-apply",
      },
    ];
  
    return (
      <div className="container" style={{ maxWidth: "1300px", padding: "20px" }}>
        <h1 style={{ textAlign: "center", marginBottom: "40px", fontSize: "36px", color: "#333" }}>
          Programs
        </h1>
        <div
          className=""
          style={{
            borderRadius: "60px",
            backgroundColor: "#eeffe6",
            padding: "80px",
            marginTop: "30px",
          }}
        >
          {program.map((program, index) => (
            <div
              key={index}
              style={{
                backgroundColor: "#ffffff",
                borderRadius: "30px",
                padding: "20px",
                marginBottom: "20px",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              }}
            >
              <h2 style={{ marginBottom: "10px", color: "#333" }}>{program.title}</h2>
              <p style={{ marginBottom: "30px", lineHeight: "1.6", color: "#555" }}>
                {program.description}
              </p>
              <div style={{ display: "flex", gap: "10px" }}>
                <a
                  href={program.volunteerLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    backgroundColor: "#28a745",
                    color: "#fff",
                    border: "none",
                    padding: "10px 20px",
                    borderRadius: "5px",
                    cursor: "pointer",
                    textDecoration: "none",
                  }}
                >
                  Volunteer
                </a>
                <a
                  href={program.applyLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    backgroundColor: "#007bff",
                    color: "#fff",
                    border: "none",
                    padding: "10px 20px",
                    borderRadius: "5px",
                    cursor: "pointer",
                    textDecoration: "none",
                  }}
                >
                  Apply
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Program;
