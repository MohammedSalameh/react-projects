import ProfileForm from './ProfileForm';
import classes from './UserProfile.module.css';
import AuthContext from '../../store/auth-context';
import {useContext} from 'react' 


const UserProfile = () => {
  return (
    <section className={classes.profile}>
      <h1>Your User Profile</h1>
      <ProfileForm />
    </section>
  );
};

export default UserProfile;
