import "./App.css";
import Profile from "./profil/Profile";

function App() {
  let fullName = "Alasane Ouattara";
  return (
    <div className="App">
      <div>
        <button onClick={"faux"}>Cliquez ici pour voir le profil</button>
      </div>
      <Profile
        fullName={fullName}
        bio="je suis chargé de gouverner la nation ivoirienne, et cela fait plus d'une dizaine d'année que je suis chargé de diriger le pays. Je suis originaire de Kong, et titulaire d'un doctorat en économie au USA précisement à Washington"
        profession="President de la république de la Côte d'Ivoire"
      >
        <img src="alaasane.jpg" alt="president" />
      </Profile>
    </div>
  );
}

export default App;
