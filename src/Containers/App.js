import { Component } from "react";
import Profile from "../Components/profil/Profile";
import "./App.css";

class App extends Component {
  state = {
    personne: [
      {
        name: "Gouré",
        fullName: "Samuel",
        bio: "Je suis ivoirien de nationalité et je réside à Abidjan.",
        profession: "je suis  informaticien developpeur web.",
      },
    ],
  };

  buttonClickHandler = () => {
    console.log("hi");
  };

  render() {
    return (
      <div className="App">
        <h1>Identification</h1>
        <Profile
          nom={this.state.personne[0].name}
          prenom={this.state.personne[0].fullName}
          presentation={this.state.personne[0].bio}
          job={this.state.personne[0].profession}
        >
          <img src="Samy.photo.JPG" alt="" />
        </Profile>

        <button onClick={this.buttonClickHandler}>Change now</button>
      </div>
    );
  }
}
export default App;
