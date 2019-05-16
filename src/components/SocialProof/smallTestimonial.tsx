import * as React from "react";
import injectSheet from "react-jss";
import { Image } from 'cloudinary-react'

const styles = {
  smallTestimonial: {
    display: 'flex',
    fontSize: '1rem',
    flexDirection: 'row',
    backgroundColor: (props: any) => '#F2F2F2',
    borderRadius: '8px',
    padding: '16px',
    "@media (max-width: 1024px)": {
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '16px',
      textAlign: 'center',
      //height: '164px'
    }
  },
  testimonialHead: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    "@media (max-width: 1024px)": {
      marginBottom: '8px'
    }
  },
  testimonialQuote: {
    flex: '1',
    fontSize: '1rem',
    color: '#999',
    fontWeight: '300',
    lineHeight: '1.5',
    "& > p": {
      margin: '8px 0 0 0'
    }
  },
  testimonialAvatar: {
    flex: '0 0 96px',
    display: 'flex',
    "& > img": {
      width: '96px',
      height: '96px',
      marginRight: '16px',
      borderRadius: '50%',

      "@media (max-width: 1024px)": {
        marginRight: '0'
      }
    }
  },
  testimonialContent: {
    display: 'flex',
    flexDirection: 'column',
    "@media (max-width: 1024px)": {
      alignItems: 'center',
      marginTop: '8px'
    }
  },
  headName: {
    color: '#212121',
    marginRight: '8px',
    fontWeight: '500',
    "@media (max-width: 1024px)": {
      marginRight: '0',
    },
  },
  headTitle: {
    color: '#409FBD',
    fontSize: '0.9rem',
    fontWeight: '500'
  }
};

interface SmallTestimonialProps {
  classes?: any,
  name: string,
  sub: string,
  quote: string,
  avatar: string,
  dark?: boolean
}

class SmallTestimonial extends React.Component<SmallTestimonialProps> {
  render() {
    const { classes: c, name, sub, quote, avatar } = this.props;
    return (
      <div className={c.smallTestimonial}>
        <div className={c.testimonialAvatar}>
          <Image cloudName="hq-app" publicId={avatar} width={96} crop="scale" dpr="2.0" />
        </div>
        <div className={c.testimonialContent}>
          <div className={c.testimonialHead}>
            <div>
              <div className={c.headName}>{ name }</div>
              <div className={c.headTitle}>{ sub }</div>
            </div>
          </div>
          <div className={c.testimonialQuote}>
            <p>"{ quote }"</p>
          </div>
        </div>
      </div>
    );
  }
}

export default injectSheet(styles)(SmallTestimonial);
