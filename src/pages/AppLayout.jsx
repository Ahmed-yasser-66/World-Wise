import SideBar from '../components/SideBar';
import Map from '../components/Map';
import styles from './AppLayout.module.css';
import { useAuth } from '../contexts/FakeAuthContext';
import User from '../components/User';

function AppLayout() {
  const { isAuthenticated } = useAuth();

  console.log(isAuthenticated);

  return (
    <div className={styles.app}>
      <SideBar />
      <Map />
      <User />
    </div>
  );
}

export default AppLayout;
