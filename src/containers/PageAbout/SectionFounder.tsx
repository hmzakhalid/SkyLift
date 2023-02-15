import Heading from "components/Heading/Heading";
import React from "react";
import NcImage from "shared/NcImage/NcImage";

export interface People {
  id: string;
  name: string;
  job: string;
  avatar: string;
}

const FOUNDER_DEMO: People[] = [
  {
    id: "1",
    name: `Hamza Khalid`,
    job: "Co-founder and Chief Executive",
    avatar:
      "https://avatars.githubusercontent.com/u/36852564?v=4",
  },
  {
    id: "2",
    name: `Malik Talha`,
    job: "Co-founder and Chief Executive",
    avatar:
      "https://i.ibb.co/tBd671b/1586939293338.jpg",
  },
  {
    id: "3",
    name: `Hamza Nasir`,
    job: "Co-founder, Chairman",
    avatar:
      "https://avatars.githubusercontent.com/u/58875099?v=4",
  },
];

const SectionFounder = () => {
  return (
    <div className="nc-SectionFounder relative">
      <Heading
        desc="Meet the people who made this platform and seamless experience possible."
      >
        ⛱ Founder
      </Heading>
      <div className="grid sm:grid-cols-2 gap-x-5 gap-y-8 lg:grid-cols-3 xl:gap-x-8">
        {FOUNDER_DEMO.map((item) => (
          <div key={item.id} className="max-w-sm">
            <NcImage
              containerClassName="relative h-0 aspect-h-1 aspect-w-1 rounded-xl overflow-hidden"
              className="absolute inset-0 object-cover"
              src={item.avatar}
            />
            <h3 className="text-lg font-semibold text-neutral-900 mt-4 md:text-xl dark:text-neutral-200">
              {item.name}
            </h3>
            <span className="block text-sm text-neutral-500 sm:text-base dark:text-neutral-400">
              {item.job}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionFounder;
