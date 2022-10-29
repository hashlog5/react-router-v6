import { Outlet } from 'react-router-dom';

// import Navbar from '../components/Navbar';
import StyledNavbar from '../components/StyledNavbar';
import Footer from '../components/Footer';

const SharedLayout = () => {
  return (
    <>
      <StyledNavbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default SharedLayout;
