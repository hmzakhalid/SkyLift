import React, { FC } from "react";
import rightImgPng from "images/our-features.png";
import NcImage from "shared/NcImage/NcImage";
import Badge from "shared/Badge/Badge";

export interface SectionOurFeaturesProps {
  className?: string;
  rightImg?: string;
  type?: "type1" | "type2";
}

const SectionOurFeatures: FC<SectionOurFeaturesProps> = ({
  className = "lg:py-14",
  rightImg = rightImgPng,
  type = "type1",
}) => {
  return (
    <div
      className={`nc-SectionOurFeatures relative flex flex-col items-center ${
        type === "type1" ? "lg:flex-row" : "lg:flex-row-reverse"
      } ${className}`}
      data-nc-id="SectionOurFeatures"
    >
      <div className="flex-grow">
        <NcImage src={rightImg} />
      </div>
      <div
        className={`max-w-2xl flex-shrink-0 mt-10 lg:mt-0 lg:w-2/5 ${
          type === "type1" ? "lg:pl-16" : "lg:pr-16"
        }`}
      >
        <span className="uppercase text-sm text-gray-400 tracking-widest">
          Benefits
        </span>
        <h2 className="font-semibold text-4xl mt-5">Why SkyLift? </h2>

        <ul className="space-y-10 mt-16">
          <li className="space-y-4">
            <Badge name="Convenience" />
            <span className="block text-xl font-semibold">
              Flight booking made easy
            </span>
            <span className="block mt-5 text-neutral-500 dark:text-neutral-400">
              With SkyLift, quickly and easily find your flight of choice
            </span>
          </li>
          <li className="space-y-4">
            <Badge color="green" name="Value" />
            <span className="block text-xl font-semibold">
              Flights available at amazing prices
            </span>
            <span className="block mt-5 text-neutral-500 dark:text-neutral-400">
              Pricing is competitive and cheap for all flights available
            </span>
          </li>
          <li className="space-y-4">
            <Badge color="red" name="Support" />
            <span className="block text-xl font-semibold">
              24/7 Support
            </span>
            <span className="block mt-5 text-neutral-500 dark:text-neutral-400">
              Any problems may be discussed with support staff to make your experience as comfortable as possible
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SectionOurFeatures;
