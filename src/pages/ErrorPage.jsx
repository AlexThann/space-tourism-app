import { Link } from "react-router-dom";

export default function ErrorPage() {
  return (
    <section className="text-center flex flex-col justify-center items-center h-96">
      <h1 className="text-6xl font-bold mb-4">404 NOT found</h1>
      <p className="text-xl mb-5">This page does not exist</p>
      <Link to="/" className="text-white p-3 rounded-sm bg-black">
        Go back to home.
      </Link>
    </section>
  );
}
