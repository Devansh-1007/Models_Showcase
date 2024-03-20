import { Link } from "react-router-dom";
import github from "../assets/github.svg";
import logo from "../assets/logo.svg";
export const CustomNavbar = () => {
  return (
    <nav>
      <div className="flex flex-wrap items-center justify-between text-white gap-y-4">
        <Link
          to="/"
          className="mr-4 flex ml-2  cursor-pointer py-1.5 font-sans text-base font-semibold leading-relaxed tracking-normal text-inherit antialiased"
        >
          <img
            className="bg-white w-8 h-8 m-auto justify-center mr-1"
            src={logo}
          ></img>
          <span className="backdrop-blur-xl">LLM Models Marketplace</span>
        </Link>

        <button
          className="bg-white rounded-xl w-28 text-center align-middle font-sans text-xs font-bold uppercase"
          type="button"
        >
          <a
            className="m-auto items-center flex justify-center"
            href="https://github.com/Devansh-1007"
            target="_blank"
          >
            <img className="w-8 h-8 " src={github}></img>
            <span className="uppercase text-sm text-black">Connect</span>
          </a>
        </button>
      </div>
    </nav>
  );
};
