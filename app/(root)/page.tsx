import Hero from "@/components/Hero";
import React from "react";

const RootPage = () => {
  return (
    <section className="w-full">
      <Hero />
      <div className="px-2 mt-12 mb-[72px]">
        <button className="bg-[#6B54EB] w-full text-white py-3 px-3 rounded-md text-[12px]">
          Invite
        </button>
      </div>
    </section>
  );
};

export default RootPage;
