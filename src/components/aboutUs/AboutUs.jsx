import React from "react";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import "./AboutUs.scss";

const AboutUs = () => {
  return (
    <div>
      <Header />
      <div className="aboutUs-container">
        <h1>About Us:</h1>
        <div className="about-section">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore id
            soluta aut veritatis est praesentium magnam ipsa iste, voluptatem
            suscipit fugit doloribus, consequuntur ipsum vel consequatur sed?
            Dicta, iusto. Rerum hic, repellat deleniti recusandae iusto
            aspernatur sapiente eligendi similique sunt minima ducimus ab
            facere, quos facilis itaque, asperiores esse. Expedita, debitis. Est
            dolores laudantium, molestias minima alias dolore praesentium nam
            impedit illum sunt odio eum dicta totam qui cumque amet. Officiis
            sit error magnam. Porro, cum! Odio, itaque voluptas, voluptatum
            porro dicta, placeat unde ea autem quas dolores totam recusandae!
            Dolorem aperiam atque qui nostrum debitis nemo quasi blanditiis
            magnam quaerat consequatur nisi, adipisci perferendis sapiente earum
            quibusdam nesciunt? Perspiciatis error reprehenderit exercitationem
            vitae earum fugit cumque sint saepe doloremque nam ipsam,
            praesentium vel alias consequuntur corrupti qui, recusandae impedit
            id inventore laboriosam distinctio temporibus aliquam! Tenetur
            voluptate vero reiciendis cumque dolores modi, id ex dignissimos
            quam eum nam! Corrupti!
          </p>
        </div>
        <div>
          <h2>
            Your's Truly <i>The Street Store.</i>
          </h2>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutUs;
