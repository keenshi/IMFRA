import React from 'react';

function Footer() {
  return (
    <footer style={{ backgroundColor: '#ceffb8', color: '#000000', fontFamily: 'Jost, sans-serif', padding: '20px 20px' }}>
      <div className='mt-5' style={{ maxWidth: '1300px', margin: '0 auto' }}>
        {/* IMFRA Title */}
        <div style={{ textAlign: 'left' }}>
          <h1 style={{ fontSize: '36px', fontWeight: 'bold', marginBottom: '10px' }}>IMFRA</h1>

          {/* Navigation Links */}
          <div style={{ fontSize: '20px', fontWeight: '400', lineHeight: '2' }}>
            <p>About Us</p>
            <p>Gallery</p>
            <p>Contact Us</p>
            <p style={{ fontSize: '16px', fontWeight: '300', marginTop: '10px' }}>+49 123 456 789</p>
          </div>
        </div>

        {/* Social Icons */}
        <div style={{ marginTop: '20px', fontSize: '24px', display: 'flex', justifyContent: 'flex-start', gap: '20px' }}>
          <a href="#" style={{ color: '#000000' }}>
            <i className="bi bi-instagram"></i>
          </a>
          <a href="#" style={{ color: '#000000' }}>
            <i className="bi bi-facebook"></i>
          </a>
          <a href="#" style={{ color: '#000000' }}>
            <i className="bi bi-envelope"></i>
          </a>
        </div>
      </div>

      {/* Footer Note */}
      <div style={{ textAlign: 'center', marginTop: '30px', fontSize: '14px', fontWeight: '300' }}>
        © IMFRA. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
