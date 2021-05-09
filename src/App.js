import React from "react";
import "./App.css";
import profilePic from "./profile_pic.jpg";
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      person: {
        fullName: "Seifeddine",
        bio: "Tsema ana kanet 3andi une passion pour le codage mondo tofola",
        imgSrc: profilePic,
        profession: "Full Stack JS Student",
      },
      show: false,
      count: 0,
    };
  }

  incrementCounter = () => {
    const { count } = this.state;
    this.setState({ count: count + 1 });
  };

  componentDidMount() {
    setInterval(this.incrementCounter, 1000);
  }

  showHide = () => {
    this.setState({
      show: !this.state.show,
    });
  };

  render() {
    return (
      <div className="App">
        <button onClick={this.showHide}>
          {this.state.show ? "Hide Profile" : "Show Profile"}
        </button>
        {this.state.show && (
          <div className="profile-card">
            <div className="profile-img">
              <img src={this.state.person.imgSrc} alt="profile"></img>
            </div>
            <div className="profile-content">
              <h1>{this.state.person.fullName}</h1>
              <h3>{this.state.person.profession}</h3>
              <p>{this.state.person.bio}</p>
            </div>
          </div>
        )}

        <h1>The component has been mount since</h1>
        <h2>{this.state.count} seconds</h2>
      </div>
    );
  }
}

export default App;
