import * as React from "react";
import { Link as ScrollLink } from 'react-scroll'

const ScrollLinks = () => {
  return (
    <>
      <ScrollLink activeClass="active" to="discover" spy={true} hashSpy={true} smooth={true} duration={500}>
        Discover
      </ScrollLink>
      <ScrollLink activeClass="active" to="testimonials" spy={true} hashSpy={true} smooth={true} duration={500}>
        Testimonials
      </ScrollLink>
      <ScrollLink activeClass="active" to="pricing" spy={true} hashSpy={true} smooth={true} duration={500}>
        Pricing
      </ScrollLink>
    </>
  )
}

export default ScrollLinks