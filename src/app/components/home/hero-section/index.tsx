import { getImgPath } from "@/utils/image";
import Image from "next/image";

const index = () => {
  return (
    <section className="relative hero-section overflow-hidden pt-35 md:pt-40 pb-12 lg:pb-30 xl:pt-52">
      <div className="container">
        <div className="lg:flex grid grid-cols-1 sm:grid-cols-2 gap-7 md:gap-4 items-center">
          <div className="flex flex-col gap-4 md:gap-7 max-w-2xl">
            <div>
              <div className="flex items-center gap-8">
                <h1>I'm Snigdha</h1>
                <div className="wave">
                  <Image
                    src={getImgPath("/images/home/banner/wave-icon.svg")}
                    alt="waving hand icon"
                    width={62}
                    height={62}
                  />
                </div>
              </div>
              <h1>
                {" "}
                <span className="text-primary">
                  Cloud Engineer
                </span>
              </h1>
            </div>
            <p className="text-secondary font-normal max-w-md xl:max-w-xl">
            I’m a lifelong learner who loves building real-world AWS projects
             and turning complex cloud ideas into simple, practical solutions.
              I share everything I learn to make the cloud accessible for everyone,
               helping thousands grow through hands-on guidance. Cloud is my favourite 
               place to be, and I love creating, learning, and building alongside the community.
            </p>

          </div>

          {/* Mobile / tablet hero image */}
          <Image
            src={getImgPath("/images/home/banner/banner-img.png")}
            // you can replace the image file with your own photo later
            alt="Snigdha Chaudhari - Cloud Solutions Architect"
            width={685}
            height={650}
            className="block lg:hidden"
          />
        </div>
      </div>

      {/* Desktop hero image */}
      <div className="absolute right-0 top-0 hidden h-auto w-1/2 lg:block 2xl:h-171.5 2xl:w-187.5">
        <Image
          src={getImgPath("/images/home/banner/banner-img.jpeg")}
          // same here: point to your own hero image when ready
          alt="Snigdha Chaudhari – Cloud Engineer"
          width={685}
          height={650}
          className="absolute right-0 top-0 z-1"
        />
      </div>
    </section>
  );
};

export default index;
