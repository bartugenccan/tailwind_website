import React from "react";
import Laptop from "../assets/laptop.jpeg";

const Analytics = () => {
  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img src={Laptop} alt="laptop" className="w-[500px] mx-auto my-4" />
        <div className="flex flex-col justify-center">
          <p className="text-[#00df9a] font-bold">DATA ANALYTICS DASHBOARD</p>
          <h1 className="md:text-3xl sm:text-2xl text-l font-bold py-2">
            MANAGE DATA ANALYTICS CENTRALLY
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
            saepe nobis quod beatae provident mollitia laudantium error illo,
            repudiandae debitis, nulla, delectus alias facilis qui laboriosam
            quos distinctio quibusdam. Ut?
          </p>
          <button className="text-[#00df9a] bg-black w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 px-6 py-3">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
