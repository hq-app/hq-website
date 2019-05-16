import * as React from 'react'
import injectSheet from 'react-jss'

const styles = {
  page: {
    width: '75%',
    margin: 'auto',
    marginTop: '160px !important',
    "@media (max-width: 767px)": {
      width: 'auto',
      margin: '0 24px'
    }
  },
  pageHead: {
    textAlign: 'center',
    "& > h2": {
      fontSize: '2.3rem',
      margin: '0',
      marginBottom: '16px',
      textAlign: 'center',
      fontWeight: '500',
      color: '#333',
    },
    "& > h3": {
      fontSize: '1.4rem',
      margin: '0',
      fontWeight: '300',
      color: '#999999',
    }
  },
  pageContent: {

  },
}

interface PageProps {
  classes?: any,
  title: string,
  subtitle?: string
}

class Page extends React.Component<PageProps, {}> {
  render() {
    const { classes: c, children, title, subtitle } = this.props;

    return (
      <div className={c.page}>
        <div className={c.pageHead}>
          <h2>{ title }</h2>
          <h3>{ subtitle }</h3>
        </div>
        <div className={c.pageContent}>
          { children }
        </div>
      </div>
    )
  }
}

export default injectSheet(styles)(Page)
