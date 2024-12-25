// JoinUs.js

const JoinUs = () => {
  const styles = {
    membershipPage: {
      fontFamily: 'Jost, sans-serif',
      padding: '40px 20px',
      lineHeight: '1.8',
      color: '#333',
      margin: '0 auto',
      maxWidth: '800px', 
      borderRadius: '15px',
      backgroundColor: '#eeffe6', 
      padding: '30px',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
      marginBottom: '40px',
    },
    header: {
      textAlign: 'center',
      marginBottom: '40px',
      marginTop: '40px',
      color: '#2d2d2d',
    },
    section: {
      textAlign: 'justify',
    },
    roundedContainer: {
      borderRadius: '15px',
      backgroundColor: '#f8f9fa',
      padding: '30px',
      marginTop: '30px',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
      
    },
    buttonHover: {
      backgroundColor: '#218838',
    },
    list: {
      listStyleType: 'circle',
      paddingLeft: '40px',
      color: '#555',
    },
  };

  return (
    <>
      <header style={styles.header}>
        <h1>Join Us</h1>
      </header>
      <div style={styles.membershipPage}>
        <section style={styles.section}>
          <div>
            <h2>Why Join Us?</h2>
            <p>
              Becoming a member of our organization unlocks numerous benefits designed
              to foster personal and professional growth. Whether you are looking for
              networking opportunities, professional development, or simply connecting
              with like-minded individuals, we have something for everyone.
            </p>
          </div>

          <div style={styles.roundedContainer}>
            <h3>Membership Benefits</h3>
            <ul style={styles.list}>
              <li>Access to exclusive resources and events</li>
              <li>Networking opportunities with industry leaders</li>
              <li>Stay informed with our newsletters and updates</li>
            </ul>
          </div>

          <div style={styles.roundedContainer}>
            <h3>Join Our Community</h3>
            <p>
              Our community is diverse and vibrant, made up of individuals from various
              backgrounds who bring unique perspectives and experiences. By joining us,
              you gain the opportunity to collaborate, learn, and grow within a supportive
              environment.
            </p>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSf2KMAFJHeSqzbwO5m1ewpBVIkdXfS9eSS4jigiHkctHBVYyw/viewform" target="_blank" rel="noopener noreferrer" className="btn btn-success text-white">
              Onboarding Form <i className="bi bi-arrow-right"></i>
            </a>
          </div>

          <div style={styles.roundedContainer}>
            <h3>Sign Up for Membership</h3>
            <p>
              Becoming a member is simple! Click the button below to fill out our
              membership form and become part of our growing community.
            </p>
            <a target="_blank" rel="noopener noreferrer" className="btn btn-success text-white ">
              Enroll now <i className="bi bi-arrow-right"></i>
            </a> 
          </div>
        </section>
      </div>
    </>
  );
};

export default JoinUs;
