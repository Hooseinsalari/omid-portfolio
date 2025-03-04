"use client";

import CircularGallery from "@/reactBits/CircularGallery/CircularGallery";

function HomeShowcaseWork() {
  return (
    <div className="text-center mb-[120px]">
      <h3 className="text-[#121619] text-5xl font-bold mb-4">A Showcase of My Work</h3>
      <p className="text-[#343A3F] text-base font-normal mb-[39px]">Browse through selected projects</p>
      <div className="relative h-[570px] bg-black">
        {/* <CircularGallery bend={1} textColor="#ffffff" borderRadius={0.05} /> */}
      </div>
    </div>
  );
}

export default HomeShowcaseWork;
