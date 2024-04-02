import React from "react";

const Button = ({ label, iconURL }) => {
  return (
    <button
      className="flex justify-center items-center
       gap-2 px-7 py-4 
    border font-montserrat 
    text-lg rounded-full
     text-white
     border-coral-red bg-coral-red "
    >
      {label}
      <img src={iconURL} alt="icon" />
    </button>
  );
};

export default Button;
