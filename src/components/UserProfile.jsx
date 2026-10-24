// Q6: UserProfile with name, email, image
function UserProfile({ name, email, image }) {
  return (
    <div className="card" style={{ textAlign: "center" }}>
      <img className="profile-img" src={image} alt={name} />
      <h3>{name}</h3>
      <p>{email}</p>
    </div>
  );
}

export default UserProfile;
