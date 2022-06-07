import React from "react";
import Single from "../../assets/single.png";
import Double from "../../assets/double.png";
import Triple from "../../assets/triple.png";

// components
import SingleCard from "./SingleCard";

const Subscription = () => {
  return (
    <div className="w-full bg-white py-[10rem] px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
        <SingleCard
          image={Single}
          margin=""
          button="text-black bg-[#00df9a]"
          storage="500 GB Storage"
          user="1 User Allowed"
          GB="Send up to 2 GB"
          bg=""
          img="bg-white"
        />
        <SingleCard
          image={Double}
          margin="md:my-0"
          button="text-[#00df9a] bg-black"
          storage="1 TB Storage"
          user="3 Users Allowed"
          GB="Send up to 10 GB"
          bg="bg-gray-100"
          img="bg-transparent"
        />
        <SingleCard
          image={Triple}
          margin=""
          button="text-black bg-[#00df9a]"
          storage="5 TB Storage"
          user="10 Users Allowed"
          GB="Send up to 20 GB"
          bg=""
          img="bg-white"
        />
      </div>
    </div>
  );
};

export default Subscription;
