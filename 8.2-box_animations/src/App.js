import "./components/Style.css";
import React from "react";
import Boxes from "./components/Boxes";

class App extends React.Component {
  state = { box: undefined };

  componentDidMount() {
    setTimeout(
      () => {
        this.setState({
          box: (
            <div>
              <Boxes width="70px" height="70px">
                {" "}
                box 1
              </Boxes>
              <Boxes width="170px" height="170px">
                {" "}
                box 2{" "}
              </Boxes>
              <Boxes width="110px" height="110px">
                {" "}
                box 3
              </Boxes>
            </div>
          ),
        });
      },

      3000
    );
  }
  componentDidUpdate() {
    setTimeout(() => {
      this.setState({ box: undefined });
    }, 4000);
  }

  render(props) {
    return <div className="container">{this.state.box}</div>;
  }
}

export default App;
