import * as React from "react";
import injectSheet from "react-jss";
import TrustedCompanies from "../../components/SocialProof/TrustedCompanies";
import Discover from "./discover";
import Upcell from "../../components/Upcell/Upcell";
import Testimonials from "./testimonials";
import Pricing from "./pricing";
import Splash from "./splash";
import classNames from 'classnames';

const styles = {
  home: {}
};

interface HomeProps {
  classes?: any
}

class Home extends React.Component<HomeProps, {}> {
  render() {
    const { classes: c } = this.props;

    return (
      <div className={classNames(c.home, 'home')}>
        <Splash />
        <TrustedCompanies color={'grey'} hideOnDesktop />
        <Discover />
        <Upcell title={["Join HQ today", "and start working centralized"]} url={'https://hq.app/app'}/>
        <Testimonials />
        <Pricing />
      </div>
    )
  }
}

export default injectSheet(styles)(Home);
