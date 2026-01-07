import { Link } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import BackgroundImage from '../assets/slide-1.jpg';

const MaterialsUnavailable = () => {
  return (
    <Layout>
      <div
        className="flex flex-col items-center justify-center min-h-screen text-center text-gray-300"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${BackgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <h1 className="text-6xl font-extrabold">COMING SOON!</h1>
        <p className="mt-4 text-xl">
          All materials on this website are currently unavailable. We will notify you when they are ready.
          <br />
          <Link to="/contact#subscribe" className="underline text-green-500">
            Click here
          </Link>{' '}
          to subscribe to our email list now, so that you don't miss our latest updates.
        </p>
      </div>
    </Layout>
  );
};

export default MaterialsUnavailable;
