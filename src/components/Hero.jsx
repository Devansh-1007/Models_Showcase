import { IconCircleArrowRight } from "@tabler/icons-react";
import { Link } from "react-router-dom";
export const Hero = () => {
  return (
    <section>
      <div className=" py-12">
        <div className="container mx-auto flex flex-col md:flex-row items-center my-12">
          <div className="flex flex-col w-full lg:w-1/3 justify-center items-start p-8">
            <h1 className="text-3xl md:text-5xl p-2 text-yellow-300 tracking-loose">
              AI Models
            </h1>
            <p className="text-sm md:text-base text-gray-50 mb-4">
              Welcome to our AI & LLM Hub! Explore the cutting-edge world of
              Artificial Intelligence and Large Language Models (LLMs) with us.
              From state-of-the-art models revolutionizing natural language
              processing to groundbreaking advancements in machine learning,
              we&apos;re your gateway to understanding and leveraging the power
              of these technologies.
            </p>
            <Link
              to="models"
              className="flex bg-transparent hover:bg-yellow-300 text-yellow-300 hover:text-black rounded shadow hover:shadow-lg py-2 px-4 border border-yellow-300 hover:border-transparent"
            >
              {/* <Link to={pathConstants.CARDS}> */}
              Dive in to discover the latest trends and insights shaping the
              future of AI.
              {/* </Link> */}
              <div className="m-auto">
                <IconCircleArrowRight className="h-8 w-8" />
              </div>
            </Link>
          </div>
          <div className="p-8 mt-12 mb-6 md:mb-0 md:mt-0 ml-0 lg:w-2/3  justify-center">
            <div className="h-48 flex flex-wrap content-center">
              <div>
                <img
                  className="inline-block mt-28 xl:block"
                  src="https://user-images.githubusercontent.com/54521023/116969935-c13d5b00-acd4-11eb-82b1-5ad2ff10fb76.png"
                ></img>
              </div>
              <div>
                <img
                  className="inline-block mt-24 md:mt-0 p-8 md:p-0"
                  src="https://user-images.githubusercontent.com/54521023/116969931-bedb0100-acd4-11eb-99a9-ff5e0ee9f31f.png"
                ></img>
              </div>
              <div>
                <img
                  className="inline-block mt-28 lg:block"
                  src="https://user-images.githubusercontent.com/54521023/116969939-c1d5f180-acd4-11eb-8ad4-9ab9143bdb50.png"
                ></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
