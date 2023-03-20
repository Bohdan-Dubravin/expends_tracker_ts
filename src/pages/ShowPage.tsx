import { Link, useNavigate } from "react-router-dom";
import AnimatedBg from "../common/components/animatedBg/AnimatedBg";
const ShowPage = () => {
  const navigate = useNavigate();

  return (
    <main className="min-h-screen  p-10">
      <div className="max-w-[40%]">
        <h1 className="text-4xl mb-8 uppercase font-bold text-gray-800">
          Master Your Budget: Top App for Tracking Finances and Expenses
        </h1>
        <h2 className="text-xl text-gray-600 mb-2">
          To start first you need to create your account
        </h2>
        <Link
          to="/register"
          className="inline-block group relative  overflow-hidden rounded-lg bg-white text-lg shadow-lg px-4 py-2"
        >
          <div className="absolute rounded-l-lg inset-0 w-3 bg-orange3 transition-all duration-[550ms] ease-out group-hover:w-full"></div>
          <span className="relative text-gray-700 group-hover:text-white text-2xl">
            Register
          </span>
        </Link>
        <h2 className="text-xl text-gray-600 mb-2 mt-8">
          If you have an account login
        </h2>
        <Link
          to="/login"
          className="inline-block group relative  overflow-hidden rounded-lg bg-white text-lg shadow-lg px-4 py-2"
        >
          <div className="absolute rounded-l-lg inset-0 w-3 bg-orange3 transition-all duration-[550ms] ease-out group-hover:w-full"></div>
          <span className="relative text-gray-700 group-hover:text-white text-2xl">
            Login
          </span>
        </Link>
      </div>

      <AnimatedBg />
    </main>
  );
};

export default ShowPage;
