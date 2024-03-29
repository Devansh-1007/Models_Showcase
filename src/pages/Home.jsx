import { CustomNavbar } from "../components/CustomNavbar";
import { Hero } from "../components/Hero";
export const Home = () => {
  return (
    <>
      <div className="fixed top-0 backdrop-blur-xl w-full px-4 py-3 mx-auto text-white shadow-md ">
        <CustomNavbar />
      </div>
      <Hero />
    </>
  );
};
