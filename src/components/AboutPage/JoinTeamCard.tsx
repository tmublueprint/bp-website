"use client"
import React from "react";
import GenericButton from "../../components/GenericButton";

const JoinTeamCard = () => {
  return (
    <section className="flex flex-col items-center gap-6">
      <h1 className="text-6xl font-bold text-gray-900">Join The Team!</h1>
      <p className="text-base text-gray-700 max-w-xl mx-auto mb-4">
        Passionate about using tech for good? We're looking for Project Leads and Developers to build impactful solutions for nonprofits. Gain hands-on experience, collaborate with like-minded peers, and make a difference.
      </p>
      <div className="flex justify-center w-full">
        <GenericButton 
          label="Students" 
          style={{ 
            margin: "0",
            background: "linear-gradient(45deg, #c7e1fd35 9%, #a2d0fe82 59%, #94c9ffb0)",
            color: "black"
          }}
          to="/student"
        />
      </div>
    </section>
  );
};

export default JoinTeamCard;
