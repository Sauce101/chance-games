import { Outlet } from 'react-router-dom';
import Navbar from '../components/shared/Navbar';
import Footer from '../components/shared/Footer';

export default function Root() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
