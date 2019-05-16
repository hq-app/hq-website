import * as React from "react";

import { graphql, StaticQuery } from "gatsby";
import TestimonialsSwitcher from "../../components/Testimonials/TestimonialsSwitcher";

import { Element } from "react-scroll";
import Section from "../../components/Section/Section";
import Stroke from "../../components/Page/Stroke";
import Boundaries from "../../components/Boundaries/Boundaries";

interface TestimonialProps {
  data: {
    site: {
      siteMetadata: {
        testimonials;
      };
    };
  };
}

class Testimonials extends React.Component<TestimonialProps, {}> {
  render() {
    return (
      <StaticQuery
        query={testimonialsQuery}
        render={data => (
          <Element name="testimonials">
            <Section>
              <Stroke
                title={"Why people love us"}
                subtitle={"AKA The Testimonials"}
              >
                <Boundaries>
                  <TestimonialsSwitcher
                    testimonials={data.site.siteMetadata.testimonials}
                    longTimer={12000}
                    shortTimer={5000}
                  />
                </Boundaries>
              </Stroke>
            </Section>
          </Element>
        )}
      />
    );
  }
}

const testimonialsQuery = graphql`
  query TestimonialsQuery {
    site {
      siteMetadata {
        testimonials {
          name
          smallName
          title
          description
          image
          thumb
          company
          logo
          bigLogo
          smallerLogo
        }
      }
    }
  }
`;

export default Testimonials;
