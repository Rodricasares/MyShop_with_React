import { Component } from "react";

const styles = {
  layout: {
    backgroundColor: "#fff",
    color: "#A283E",
    alignItems: "center",
    justifyContent:'center',
    display: "flex",
    flexFlow: "row wrap",
  },
  container: {
    width: "auto",
  },
};

class Layout extends Component {
  render() {
    return (
      <div style={styles.layout}>
        <div style={styles.container}>{this.props.children}</div>
      </div>
    );
  }
}
export default Layout;
