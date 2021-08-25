import React from "react";
import { Helmet } from "react-helmet";

const About = () => {
  return (
    <div>
      <div className="text-left container">
        <Helmet>
          <title>About - AiDataRon</title>
          <meta
            name="description"
            content="This is the about page of Aidataron. AiDataron is an UK Based It Solutions Providing Company specialized in Web Development Services"
          />
        </Helmet>
        <br />
        <br />
        <br />
        <br />
        <div className="shadow p-5 mb-5">
          <h2>About - AiDataRon</h2>
          <br />
          <br />
          <p>
            Aidataron is a UK Based IT Solutions providing the company with over
            4 years of Success serving our clients with the best of our Web
            Development and UI UX Design Services
            <br />
            <br />
            Established in 2017 AiDataRon continues to grow with a staff of 50
            Employees Specialized in Web development using React js, Shopify,
            Square Space technologies for Web development Ecommerce Development
            , also have a creative team of UI UX Design and a powerful presence
            in the UK. Please visit our Facebook or Instagram page to see more
            about us
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
