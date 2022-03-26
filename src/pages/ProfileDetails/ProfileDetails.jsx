import { useLocation } from "react-router-dom";

const ProfileDetails = () => {
  const location = useLocation()
  const profile = location.state.profile

  return(
    <>
  <h2>These are profile details</h2>
  </>
  );
}

export default ProfileDetails;