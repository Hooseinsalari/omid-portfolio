import { DribbbleLogoIcon, LinkedinLogoIcon } from "@/lib/icons/icons";
import MagnetLines from "@/reactBits/MagnetLines/MagnetLines";

function Footer() {
  return (
    <div className="bg-[#121619] pt-20 px-[120px] pb-10">
      <div className="flex items-center justify-between">
        <div>
          <div className="flex items-center gap-20 mb-10">
            <div>
              <label className="text-[#DDE1E6] text-base font-normal mb-3">
                Email
              </label>
              <h3 className="text-white text-2xl font-medium underline underline-offset-4">
                hey@omidiravani.ir
              </h3>
            </div>
            <div>
              <label className="text-[#DDE1E6] text-base font-normal mb-3">
                Phone
              </label>
              <h3 className="text-white text-2xl font-medium underline underline-offset-4">
                +98 936 126 4850
              </h3>
            </div>
          </div>

          <div>
            <label className="text-[#F2F4F8] text-xl font-medium">
              Contact me to discuss
            </label>
            <div className="flex items-center border border-[#F2F4F8] p-2 pl-6 rounded-full mt-4">
              <input
                placeholder="Enter your mail"
                type="text"
                className="w-full border-none outline-none text-base font-medium leading-7 text-[#697077]"
              />
              <button className="px-8 py-4 rounded-[50px] bg-[#4589FF] text-white text-base font-medium cursor-pointer">
                Submit
              </button>
            </div>
          </div>
        </div>

        <MagnetLines
          rows={9}
          columns={9}
          widthSize="90vmin"
          heightSize="60vmin"
          lineColor="#fff"
          lineWidth="0.8vmin"
          lineHeight="5vmin"
          baseAngle={0}
        />
      </div>

      <div className="w-full h-[1px] bg-[#343A3F] my-6"></div>

      <div className="flex items-center justify-between">
        <h3 className="text-[#DDE1E6] font-normal text-base">
          @2024 Omid Iravani. All rights reserved
        </h3>
        <div className="flex items-center gap-4">
          <div className="bg-[#F2F4F8] rounded-3xl w-16 h-16 flex items-center justify-center">
            <DribbbleLogoIcon />
          </div>
          <div className="bg-[#F2F4F8] rounded-3xl w-16 h-16 flex items-center justify-center">
            <LinkedinLogoIcon />
          </div>
          <div className="bg-[#F2F4F8] rounded-3xl w-16 h-16 flex items-center justify-center">
            <LinkedinLogoIcon />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
