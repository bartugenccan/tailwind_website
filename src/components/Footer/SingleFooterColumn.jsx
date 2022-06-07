import React from "react";

const SingleFooterColumn = ({ title, first, second, third, fourth, fifth }) => {
  return (
    <div>
      <h6 className="font-medium text-gray-400">{title}</h6>
      <ul>
        <li className="py-2 text-sm">{first}</li>
        <li className="py-2 text-sm">{second}</li>
        <li className="py-2 text-sm">{third}</li>
        <li className="py-2 text-sm">{fourth}</li>
        <li className="py-2 text-sm">{fifth}</li>
      </ul>
    </div>
  );
};

export default SingleFooterColumn;
