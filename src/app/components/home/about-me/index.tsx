import { getImgPath } from "@/utils/image";
import Image from "next/image";

const AboutMe = () => {
  return (
    <section>
      <div className="relative bg-softGray py-10 md:py-32">
        {/* Background vector */}
        <div className="absolute top-0 w-full px-9">
          {/*<Image
            src={getImgPath("/images/home/about-me/resume-bg-img.svg")}
            alt="resume-bg-img"
            width={1200}
            height={348}
            className="w-full"
          />*/}
        </div>

        <div className="relative z-10">
          <div className="container">
            {/* Header */}
            <div className="flex items-center justify-between gap-2 border-b border-black pb-7">
              <h2>About Me</h2>
              <p className="text-xl text-primary">( 01 )</p>
            </div>

            <div className="pt-10 xl:pt-16 flex gap-10 items-center justify-between">
              {/* Left Shape */}
              <div className="w-[303px] h-[440px] hidden lg:flex">
                <Image
                  src={getImgPath("/images/home/about-me/about-banner-img.svg")}
                  alt="about-banner"
                  width={303}
                  height={440}
                  className="w-full h-full"
                />
              </div>

              {/* Right Content */}
              <div className="w-full lg:max-w-2xl flex-1">
                <p className="leading-relaxed text-base md:text-lg">
                 With 3.5+ years in tech, I’ve grown a deep passion for 
                 building real-world AWS solutions. I started with cloud
                  fundamentals and gradually moved into designing full, 
                  end-to-end architectures across multiple AWS domains.
                  <br /><br />
                  My journey hasn’t been linear, it’s been shaped by curiosity, 
                  consistency, and a genuine love for cloud. I’ve learned by building,
                   breaking, fixing, and exploring architectures that mirror real production 
                   systems. Today, I share those learnings through hands-on labs and practical 
                   tutorials that show how AWS is used in the real world.
                  <br /><br />
                  I care about making cloud accessible, simple, and meaningful, and I’m driven by 
                  the joy of learning, creating, and helping others grow in their cloud careers.
                </p>

                {/* Stats */}
                <div className="grid grid-cols-3 py-10 xl:py-16 gap-5 border-b border-mistGray">
                  {[ 
                    { count: "3.5+", label: "Years of Cloud Experience" },
                    { count: "35+", label: "AWS Projects Built" },
                    { count: "5000+", label: "Learners Impacted" },
                  ].map((item, i) => (
                    <div key={i}>
                      <h3>{item.count}</h3>
                      <p className="text-base md:text-lg text-black">{item.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>  
    </section>
  );
};

export default AboutMe;
