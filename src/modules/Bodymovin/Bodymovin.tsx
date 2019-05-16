import * as React from 'react'
import ReactBodymovin from 'react-bodymovin'

class Bodymovin extends React.Component<{animation: string}, {}> {
  state = {
    animationData: false
  };
  componentDidMount() {
    fetch(this.props.animation)
      .then(response => {
        return response.json()
      })
      .then(data => {
        this.setState({ animationData: data })
      })
  }
  render() {
    let bodymovinOptions = {
      loop: true,
      autoplay: true,
      prerender: true,
      animationData: JSON.parse(JSON.stringify(this.state.animationData))
    };

    return (
      <div>TODO Fix BodyMovin</div>
      //this.state.animationData ? <ReactBodymovin options={bodymovinOptions} /> : <div style={{textAlign: 'center', marginTop: '48px'}}>Please provide a valid json url (refresh needed)</div>
    )
  }
}

export default Bodymovin;