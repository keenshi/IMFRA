import "./../Styles/style.css";

export const AboutUs = () => {
  return (
    <div className="container" style={{ maxWidth: "1300px", padding: "20px" }}>
      <h1
        style={{
          textAlign: "center",
          marginBottom: "40px",
          fontSize: "36px",
          color: "#333",
        }}
      >
        About Us
      </h1>

      {/* Vision Section */}
      <div
        className=""
        style={{
          borderRadius: "30px",
          backgroundColor: "#eeffe6",
          padding: "20px",
          marginBottom: "40px",
        }}
      >
        <div
          className="container content-container alert alert-light text-justify"
          style={{ borderRadius: "30px" }}
        >
          <h2 className="text-center margin-bottom-normal">Vision</h2>
          <p className="font-size-17">
            Our vision is to establish a strong Indian Muslim community base for
            those residing in the Hessen region and neighboring areas. As
            mentioned in the Quran:{" "}
            <i>
              “And hold firmly to the rope of Allah all together and do not
              become divided” (Surah Al-Imran: 103)
            </i>
            , we strive to foster unity and solidarity within our community.
          </p>
          <p className="font-size-17">
            By connecting with each other, we can enhance our social lives and
            create a sense of belonging. Together, we are strong and can achieve
            great things, in alignment with the Quranic principle:{" "}
            <i>
              “Indeed, this nation of yours is one nation, and I am your Lord,
              so worship Me.” (Surah Al-Anbiya: 92)
            </i>
            .
          </p>
        </div>
      

      {/* Goals Section */}
      <div
        className=""
        style={{
          borderRadius: "30px",
          backgroundColor: "#f9f9ff",
          padding: "20px",
          marginBottom: "20px",
        }}
      >
        <h2 className="text-center margin-bottom-normal">Goals</h2>
        <p className="font-size-17">
          Our primary goal is to strengthen the sense of unity and collaboration
          among Indian Muslims living in Hessen. We aim to foster cultural,
          educational, and professional growth by organizing programs that
          reflect our shared values and aspirations. The Quran reminds us:{" "}
          <i>
            “Indeed, Allah will not change the condition of a people until they
            change what is in themselves.” (Surah Ar-Ra’d: 11)
          </i>
          , inspiring us to take proactive steps for community development.
        </p>
        <p className="font-size-17">
          We are also committed to supporting students and professionals in
          their personal and professional development, as seeking knowledge is
          a key Islamic value:{" "}
          <i>
            “And say, 'My Lord, increase me in knowledge.'” (Surah Taha: 114)
          </i>
          .
        </p>
      </div>

      {/* Donations Section */}
      <div
        className=""
        style={{
          borderRadius: "30px",
          backgroundColor: "#fff6f6",
          padding: "20px",
          marginBottom: "20px",
        }}
      >
        <h2 className="text-center margin-bottom-normal">Donations</h2>
        <p className="font-size-17">
          Your generous donations play a vital role in supporting our community
          activities and programs. As emphasized in the Quran:{" "}
          <i>
            “The example of those who spend their wealth in the way of Allah is
            like a seed [of grain]; it sprouts seven spikes; in every spike is a
            hundred seeds.” (Surah Al-Baqarah: 261)
          </i>
          , your contributions multiply in both blessings and impact.
        </p>
        <p className="font-size-17">
          We ensure transparency in managing donations, reflecting the Quranic
          principle:{" "}
          <i>
            “And do not consume one another’s wealth unjustly...” (Surah
            An-Nisa: 29)
          </i>
          .
        </p>
      </div>

      {/* Contributions Section */}
      <div
        className=""
        style={{
          borderRadius: "30px",
          backgroundColor: "#f0faff",
          padding: "20px",
          marginBottom: "20px",
        }}
      >
        <h2 className="text-center margin-bottom-normal">Contributions</h2>
        <p className="font-size-17">
          Contributions to our organization are not limited to monetary
          donations. We encourage members to contribute their time, skills, and
          expertise to help our community grow and prosper. As the Prophet
          Muhammad (peace be upon him) said:{" "}
          <i>
            “The best of people are those that bring the most benefit to the
            rest of mankind.” (Hadith, Sahih Al-Bukhari)
          </i>
          , we encourage active involvement in community betterment.
        </p>
        <p className="font-size-17">
          Whether it’s volunteering at events, mentoring students, or providing
          professional guidance, every effort aligns with the Quranic value:{" "}
          <i>
            “So whoever does an atom’s weight of good will see it.”
            (Surah Az-Zalzalah: 7)
          </i>
          .
        </p>
      </div>
    </div>
    </div>
  );
};
