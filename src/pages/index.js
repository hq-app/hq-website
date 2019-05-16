import React from "react";
import Home from "./home/home";
import Layout from "../components/layout";

class IndexPage extends React.Component {
  render() {
    return (
    	<>
				<Layout location={this.props.location}><Home /></Layout>
			</>
    );
  }
}

export default IndexPage;
