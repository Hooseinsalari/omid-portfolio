"use client";

import VariableProximity from "@/reactBits/VariableProximity/VariableProximity";
import { useRef } from "react";
import { ImportIcon, LinkedinIcon } from "../icons/icons";
import Image from "next/image";
import TiltedCard from "@/reactBits/TiltedCard/TiltedCard";
import SpotlightCard from "@/reactBits/SpotlightCard/SpotlightCard";
import { DESIGN_TOPICS, ICON_COMPONENTS } from "../constants/heroConstant";
import InfiniteScroll from "@/reactBits/InfiniteScroll/InfiniteScroll";

function HomeHero() {
  const containerRef = useRef(null);

  return (
    <>
      <style>
        {`@import
        url('https://fonts.googleapis.com/css2?family=Roboto+Flex:wght@100..1000&display=swap');`}
      </style>

      <div className="flex items-center justify-between flex-row min-h-screen px-[120px] py-[157px]">
        <div className="w-full">
          <div
            ref={containerRef}
            style={{ position: "relative", width: "539px" }}
          >
            <VariableProximity
              label={"Designing for People, Not Just Pixels"}
              fromFontVariationSettings="'wght' 400, 'opsz' 9"
              toFontVariationSettings="'wght' 1000, 'opsz' 40"
              containerRef={containerRef}
              radius={100}
              falloff="linear"
            />
          </div>

          <p className="text-base text-[#343A3F] font-normal my-6">
            As a Senior Product Designer with over 7 years of experience, my{" "}
            <br />
            focus is on creating designs that solve real problems – designs that{" "}
            <br />
            are simple, intuitive, and flexible enough to grow with the
            business.
          </p>

          <button className="flex items-center justify-center gap-2 py-4 px-6 bg-[#21272A] rounded-full">
            <ImportIcon />
            <span className="text-white font-bold text-base leading-7">
              My Resume
            </span>
          </button>
        </div>

        <div className="grid grid-cols-6 grid-rows-6 gap-2 w-full">
          <div className="col-span-4 row-span-4 rounded-3xl z-30">
            <TiltedCard
              imageSrc="/images/Home/hero-1.png"
              altText="Bank Card Design App"
              captionText="Bank Card Design App"
              containerHeight="100%"
              containerWidth="100%"
              imageHeight="100%"
              imageWidth="100%"
              rotateAmplitude={12}
              scaleOnHover={1.05}
              showMobileWarning={false}
              showTooltip={false}
              displayOverlayContent={true}
              overlayContent={
                <div>
                  <h3 className="absolute bottom-6 left-6 rounded-full bg-[#21272acc] text-white text-base font-medium py-3 px-4 leading-7">
                    Over +30 Project
                  </h3>
                  <div className="absolute top-6 left-6">
                    <h3 className="text-2xl font-bold text-[#21272A] mb-2">
                      Dribbble
                    </h3>
                    <h4 className="text-[#697077] text-base font-normal">
                      My Portfolio
                    </h4>
                  </div>
                </div>
              }
            />
          </div>
          <div className="col-span-2 row-span-4 col-start-5 overflow-hidden bg-[#21272A] rounded-3xl">
          {/* <InfiniteScroll
            items={DESIGN_TOPICS}
            isTilted={true}
            tiltDirection="left"
            autoplay={true}
            autoplaySpeed={0.1}
            autoplayDirection="down"
            pauseOnHover={true}
          /> */}
          </div>
          <div className="col-span-6 row-span-2 row-start-5 flex items-center justify-center gap-2">
            <div className="w-full">
              <SpotlightCard
                className="w-full h-full bg-white rounded-3xl p-6 flex flex-col justify-between"
                spotlightColor="rgba(0, 229, 255, 0.2)"
              >
                <h3 className="text-[#21272A] text-xl font-bold mb-10">
                  Technologies I worked with:
                </h3>
                <div className="flex items-center justify-between gap-4 h-full bg-linear-[conic-gradient(from 270deg at 50% 50%, #FFF 0deg, #F2F4F8 360deg)]">
                  {ICON_COMPONENTS.map((item) => (
                    <item.component key={item.name} />
                  ))}
                </div>
              </SpotlightCard>
            </div>
            <div className="flex items-center flex-col justify-center gap-2 h-full">
              <div className="h-full">
                <SpotlightCard
                  className="flex items-center justify-center rounded-3xl w-full h-full bg-[#EDF5FF] py-4 px-6"
                  spotlightColor="rgba(0, 229, 255, 0.2)"
                >
                  <LinkedinIcon />
                </SpotlightCard>
              </div>
              <div className="h-full">
                <SpotlightCard
                  className="flex items-center justify-center rounded-3xl w-full h-full bg-[#F6F2FF] py-4 px-6"
                  spotlightColor="rgba(0, 229, 255, 0.2)"
                >
                  <Image
                    src={"/images/Home/instagram-icon.png"}
                    width={24}
                    height={24}
                    alt="instagram"
                  />
                </SpotlightCard>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeHero;
