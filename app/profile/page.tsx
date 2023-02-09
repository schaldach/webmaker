import { getAuth, signOut } from "firebase/auth";
const auth = getAuth();
function Logout() {
  signOut(auth)
    .then(() => {
      // Sign-out successful.
    })
    .catch((error) => {
      // An error happened.
    });
}

type Props = {
    user: object
}

function Profile({user}:Props) {
  return <div>
    <button onClick={Logout}>Logout</button>
  </div>;
}

export default Profile;
