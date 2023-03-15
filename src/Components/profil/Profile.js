function Profile(props) {
  return (
    <div>
      <h1>
        Je suis {props.prenom} {props.nom}
      </h1>
      <p>Et {props.presentation} </p>
      <p>Je suis aussi titulaire d'un BTS et d'une licence pro, {props.job}</p>
      <p> {props.children} </p>
    </div>
  );
}

export default Profile;
