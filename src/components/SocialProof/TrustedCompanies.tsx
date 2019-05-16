import * as React from "react";
import injectSheet from "react-jss";
import { Image } from "cloudinary-react";

const trustedCompaniesHeight = 160;

const styles = {
  trustedCompaniesWrapper: {
    height: `${trustedCompaniesHeight}px`,
    flex: `0 0 ${trustedCompaniesHeight}px`,
    backgroundColor: (props: any) => props.backgroundColor ? props.backgroundColor : 'transparent',
    display: 'flex',
    "@media (min-width: 1025px)": {
      display: (props: any) => props.hideOnDesktop && 'none'
    },
    "@media (max-width: 1024px)": {
      height: '100%',
      margin: '16px',
      display: (props: any) => props.hideOnTablet && 'none'
    },
    "@media (max-width: 767px)": {
      display: (props: any) => props.hideOnPhone && 'none'
    }
  },
  trustedCompanies: {
    zIndex: '1',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly'
  },
  trustedCompaniesHeader: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    "& > h2": {
      textAlign: 'center',
      color: '#FFFFFF',
      fontWeight: '300',
      "@media (max-width: 1024px)": {
        color: '#999999',
      },
    },
    "& > span:last-of-type": {
      height: '1px',
      width: '160px',
      backgroundColor: '#FFFFFF',
      "@media (max-width: 1024px)": {
        backgroundColor: '#999999',
      },
    }
  },
  companyLogos: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: 'auto',
    height: 'auto',
    "@media (max-width: 1024px)": {
      flexWrap: 'wrap'
    },
    "& > div": {
      "@media (max-width: 1024px)": {
        width: 'calc(100% / 3)',
        textAlign: 'center'
      },
      "@media (max-width: 767px)": {
        width: 'calc(100% / 2)'
      },
      "& > img": {
        height: '32px',
        "&.-small": {
          height: '24px'
        },
        "@media (max-width: 1024px)": {
          margin: '24px 0',
          height: '50px',
          color: 'black',
          marginBottom: '24px',
          "&.-small": {
            height: '30px'
          },
        },
        "@media (max-width: 767px)": {
          height: '40px',
          color: 'black',
          marginBottom: '24px',
          "&.-small": {
            height: '20px'
          },
        },
        "@media (max-width: 400px)": {
          height: '30px',
          "&.-small": {
            height: '16px'
          },
        },
      }
    },
  }
};

interface TrustedCompaniesProps {
  classes?: any,
  color: string,
  hideOnDesktop?: boolean,
  hideOnTablet?: boolean,
  hideOnPhone?: boolean,
  backgroundColor?: string
}

class TrustedCompanies extends React.Component<TrustedCompaniesProps> {
  renderPartners = (color) => {
    const { classes: c } = this.props;
    return (
      <div className={c.trustedCompanies}>
        <div className={c.trustedCompaniesHeader}>
          <h2>Trusted by Professionals at</h2>
          <span></span>
        </div>
        <div className={c.companyLogos}>
          <div><Image cloudName="hq-app" publicId={`kbc-${color}.png`} crop="scale" dpr="2.0" /></div>
          <div><Image className={'-small'} cloudName="hq-app" publicId={`mck-${color}.png`} crop="scale" dpr="2.0" /></div>
          <div><Image cloudName="hq-app" publicId={`hbs-${color}.png`} crop="scale" dpr="2.0" /></div>
          <div><Image cloudName="hq-app" publicId={`irex-${color}.png`} crop="scale" dpr="2.0" /></div>
          <div><Image cloudName="hq-app" publicId={`colruyt-${color}.png`} crop="scale" dpr="2.0" /></div>
          <div><Image cloudName="hq-app" publicId={`amazon-${color}.png`} crop="scale" dpr="2.0" /></div>
        </div>
      </div>
    )
  }
  render() {
    const { classes: c, color } = this.props;
    return (
      <div className={c.trustedCompaniesWrapper}>

          {this.renderPartners(color)}

      </div>
    );
  }
}

export default injectSheet(styles)(TrustedCompanies);
