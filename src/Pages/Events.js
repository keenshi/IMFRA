export const Events = () => {
  const events = [
    {
      title: "Hessen Muslim Day",
      description:
        "The Hessen Muslim Day is a signature event organized by the Indian Muslims in Frankfurt, celebrating cultural diversity and the shared heritage of Indian Muslims in the Hessen region. This event serves as a platform for interfaith dialogue, cultural exchange, and fostering mutual understanding among different communities. It features cultural performances, insightful discussions, and traditional culinary experiences, creating an atmosphere of unity and pride in shared traditions.",
      link: "https://example.com/hessen-muslim-day",
    },
    {
      title: "Get-Together Activities",
      description:
        "The organization hosts regular get-together activities, providing members with opportunities to socialize, network, and build lifelong friendships. These gatherings are a melting pot of ideas and experiences, encouraging open conversations and cultural exchanges. Whether it’s celebrating festivals, sharing meals, or organizing informal discussions, these events bring the community closer together.",
      link: "https://example.com/get-together-activities",
    },
    {
      title: "Outings",
      description:
        "The organization organizes outings to scenic locations, cultural landmarks, and recreational spots, offering members a chance to unwind and bond in a relaxed environment. These outings foster a sense of community while providing a refreshing break from routine life. Families, students, and professionals alike enjoy these excursions, making them a cherished aspect of the group’s activities.",
      link: "https://example.com/outings",
    },
    {
      title: "Sisters’ Meets",
      description:
        "Sisters’ meets are specially curated gatherings designed to create a safe and empowering space for women to connect, share their experiences, and discuss topics relevant to their lives. These events often include workshops, discussions, and activities that cater to the interests and needs of the women in the community, fostering solidarity and mutual support.",
      link: "https://example.com/sisters-meets",
    },
    {
      title: "Weekend Sports",
      description:
        "For those who enjoy staying active, the organization organizes weekend sports sessions, bringing together members to engage in games like cricket, badminton, and football. These events not only promote physical health but also encourage teamwork, discipline, and camaraderie. The friendly matches and enthusiastic participation make these sports sessions a favorite among members of all ages.",
      link: "https://example.com/weekend-sports",
    },
  ];

  return (
    <div className="container" style={{ maxWidth: "1300px", padding: "20px" }}>
      <h1 style={{ textAlign: "center", marginBottom: "40px", fontSize: "36px", color: "#333" }}>
        Events
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
        {events.map((event, index) => (
        <div
          key={index}
          style={{
            backgroundColor: '#ffffff',
            borderRadius: "30px",
            padding: "20px",
            marginBottom: "20px",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          }}
        >
          <h2 style={{ marginBottom: "10px", color: "#333" }}>{event.title}</h2>
          <p style={{ marginBottom: "30px", lineHeight: "1.6", color: "#555" }}>
            {event.description}
          </p>
          <a
            href={event.link}
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
              marginBottom: "50px",
            }}
          >
            Register
          </a>
        </div>
      ))}
      </div>
    </div>
  );
};
