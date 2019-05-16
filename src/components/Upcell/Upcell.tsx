import * as React from 'react'
import injectSheet from 'react-jss'
import Stroke from '../Page/Stroke'
import Boundaries from "../Boundaries/Boundaries";

const styles = {
  upcell: {

  },
  upcellContent: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  title: {
    fontSize: '3.6rem',
    color: '#FFFFFF',
    marginTop: '0',
    fontWeight: '300',
    textAlign: 'center',
    lineHeight: '1.4',
    "@media (max-width: 1024px)": {
      fontSize: '2.3rem',
    }
  },
  button: {
    fontFamily: 'Roboto, sans-serif',
    fontWeight: '500',
    letterSpacing: '1px',
    textTransform: 'uppercase',
    cursor: "pointer",
    fontSize: "1.2rem",
    backgroundColor: "#FFFFFF",
    borderRadius: "12px",
    width: "auto",
    margin: "auto",
    padding: "0 24px",
    height: '56px',
    color: '#3B9FBF',
    display: 'flex',
    alignItems: 'center',
    textDecoration: 'none',
    "@media (max-width: 767px)": {
      fontSize: "1rem",
    },
    "&:hover": {
      backgroundColor: '#F2F2F2',
      color: '#359FC1'
    }
  },
}

interface UpcellProps {
  classes?: any,
  title: string | [],
  url: string
}

class Upcell extends React.Component<UpcellProps, {}> {
  renderTitle = () => {
    const { classes: c, title } = this.props;

    return (
      typeof title === 'string'
      ? <h2 className={c.title}>{ title }</h2>
      : <h2 className={c.title}>{ title[0] } <br/> { title[1] }</h2>
    )
  }
  render() {
    const { classes: c, title, url } = this.props;
    return (
      <div className={c.upcell}>
        <Stroke bgColor={"#359FC1"} desktop={500} tablet={300} phone={200}>
          <Boundaries>
            <div className={c.upcellContent}>
              { this.renderTitle() }
              <a href={url} className={c.button}>Sign up for free</a>
            </div>
          </Boundaries>
        </Stroke>
      </div>
    )
  }
}

export default injectSheet(styles)(Upcell)
