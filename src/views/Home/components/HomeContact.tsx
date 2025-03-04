"use client";

import Stepper, { Step } from "@/reactBits/Stepper/Stepper";

function HomeContact() {
  return (
    <div className="px-[120px] pt-20 pb-[120px] flex items-center justify-between">
      <div className="w-full">
        <h2 className="text-[#121619] text-5xl mb-4 font-bold leading-14 w-[470px]">
          Helping You Bring Your Product to Life
        </h2>
        <p className="text-[#343A3F] text-base font-normal w-[470px]">
          I help transform your ideas into fully functional, user-centered
          products. From working with innovative startups to established brands,
          I’ve contributed to projects ranging from intuitive mobile apps to
          complex digital platforms.
        </p>
      </div>

      <div className="w-full">
        <Stepper
          initialStep={1}
          onStepChange={(step) => {
            console.log(step);
          }}
          onFinalStepCompleted={() => console.log("All steps completed!")}
          backButtonText="Previous"
          nextButtonText="Next"
        >
          <Step>
            <h2>Welcome to the React Bits stepper!</h2>
            <p>Check out the next step!</p>
          </Step>
          <Step>
            <h2>Step 2</h2>
            <p>Custom step content!</p>
          </Step>
          <Step>
            <h2>How about an input?</h2>
            <input placeholder="Your name?" />
          </Step>
          <Step>
            <h2>Final Step</h2>
            <p>You made it!</p>
          </Step>
        </Stepper>
      </div>
    </div>
  );
}

export default HomeContact;
