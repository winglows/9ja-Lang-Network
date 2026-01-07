import { Link } from 'react-router-dom';

const MaterialsUnavailable = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center">
      <h1 className="text-4xl font-bold">COMING SOON!</h1>
      <p className="mt-4 text-lg">
        All materials on this website are currently unavailable. We will notify you when they are ready.{' '}
        <Link to="/contact#subscribe" className="underline">
          Click here to subscribe to our email list, so that you don't miss our latest updates.
        </Link>
      </p>
    </div>
  );
};

export default MaterialsUnavailable;
