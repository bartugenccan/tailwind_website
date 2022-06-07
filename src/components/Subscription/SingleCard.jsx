import React from "react";

const SingleCard = ({ image, margin, button, storage, user, GB, bg, img }) => {
  return (
    <div
      className={` ${margin} ${bg} w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300`}
    >
      <img
        className={`w-20 mx-auto mt-[-3rem] bg-white ${img}`}
        src={image}
        alt="single_sub"
      />
      <h2 className="text-2xl font-bold text-center py-8">Single User</h2>
      <p className="text-center text-4xl font-bold">$149</p>
      <div className="text-center font-medium">
        <p className="py-2 border-b border-t mx-8 mt-8">{storage}</p>
        <p className="py-2 border-b mx-8">{user}</p>
        <p className="py-2 border-b mx-8">{GB}</p>
        <button
          className={`${button} w-[180px] rounded-md font-medium my-6 px-6 py-3`}
        >
          Start Trial
        </button>
      </div>
    </div>
  );
};

export default SingleCard;
