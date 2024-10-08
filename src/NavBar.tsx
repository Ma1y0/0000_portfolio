import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <header className="bg-gray-200 p-3 flex justify-center items-center">
      <Link to="/">
        <button className="p-2 rounded font-semibold text-2xl hover:bg-gray-300">
          Portfolio
        </button>
      </Link>
    </header>
  );
}
