"use client"
import React from "react";
import GenericButton from "../../components/GenericButton";

const JoinTeamCard = () => {
  return (
    <section className="bg-white rounded-2xl py-16 px-6 md:py-24 md:px-10 text-center space-y-6">
      <h1 className="text-6xl font-bold text-gray-900">Join The Team!</h1>
      <p className="text-base text-gray-700 max-w-xl mx-auto">
        Passionate about using tech for good? We’re looking for Project Leads and Developers to build impactful solutions for nonprofits. Gain hands-on experience, collaborate with like-minded peers, and make a difference.
      </p>
      <GenericButton label="Students" />
    </section>
  );
};

export default JoinTeamCard;
