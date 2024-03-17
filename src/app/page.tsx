import Image from "next/image";
import { Secular_One, Hind } from "next/font/google";

const secularOne = Secular_One({ weight: "400", subsets: ["latin"] });
const hind = Hind({ weight: "300", subsets: ["latin"] });

const TitleSection = () => {
  return (
    <div className={secularOne.className}>
      <h1 className="text-6xl text-black text-center">LBS PMC</h1>
    </div>
  );
};

const SubTitleSection = () => {
  return (
    <div className={hind.className}>
      <h2 className="text-4xl text-black text-center">
        We are project management consultants
      </h2>
    </div>
  );
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-12">
      <div className="flex flex-1 flex-col justify-between w-full items-center">
        <div className="flex flex-col gap-4">
          <TitleSection />
          <SubTitleSection />
        </div>
        <div className="flex">
          <Image
            src="/underconstruction.svg"
            alt="LBS PMC Logo"
            width={500}
            height={500}
          />
        </div>
        <p className="text-l text-black text-center">
          contact us at{" "}
          <a href="mailto:lbs.projectconsultants@gmail.com">
            lbs.projectconsultants@gmail.com
          </a>
        </p>
      </div>
    </main>
  );
}
