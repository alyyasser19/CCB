import Image from "next/image";
import Qilu from "../assets/quil.png";
import FreseniusLogo from "../assets/fresenius-logo.svg";
import IndiaFlag from "../assets/india-flag.svg";
import ChinaFlag from "../assets/china-flag.svg";
import AustriaFlag from "../assets/austria-flag.svg";
import ItalyFlag from "../assets/italy-flag.svg";
import EgyptFlag from "../assets/egypt-flag.svg";
import UAEFlag from "../assets/uae-flag.svg";

type aboutUsSection = {
  title: string;
  description: string;
  buttonName: string;
  images: JSX.Element[];
};

export const aboutUsSections: aboutUsSection[] = [
  {
    title: "Companies We Represent:",
    description:
      "Our portfolio includes esteemed partners like Fresenius Kabi Austria, Fresenius Kabi Anti-Infective Italy,   Qilu Pharmaceutical, New Edge Overseas India, and Henan Kangada China. These collaborations embody our dedication to delivering innovative pharmaceutical solutions from around the world.",
    buttonName: "Join Us",
    images: [
      <Image
        key={0}
        src={Qilu}
        alt="Qilu-logo"
        className="w-full"
      />,
      <Image
        key={1}
        src={FreseniusLogo}
        alt="Fresenius-overseas"
        className="w-full"
      />,
    ],
  },
  {
    title: "Global Representation:",
    description:
      "With a representative office in China, we establish meaningful connections with a wide spectrum of Chinese pharmaceutical companies. Similarly, our presence in India enables us to engage with a multitude of Indian pharmaceutical companies, showcasing our commitment to bridging global pharmaceutical expertise.",
    buttonName: "Get in Contact",
    images: [
      <div key={0} className="flex gap-7">
        <Image key={0.1} src={IndiaFlag} alt="india-flag" className="w-full" />
        <Image key={0.2} src={ChinaFlag} alt="china-flag" className="w-full" />
      </div>,
      <div key={1} className="flex gap-7">
        <Image
          key={1.1}
          src={AustriaFlag}
          alt="austria-flag"
          className="w-full"
        />
        <Image key={1.2} src={ItalyFlag} alt="italy-flag" className="w-full" />
      </div>,
    ],
  },
  {
    title: "Global Reach & Care:",
    description:
      "At Commercial Consulting Bureau, we're more than just a consultancy; we're your dedicated partners. We take immense pride in offering the best customer service and relations in the industry. Our unwavering attention to fulfilling your needs ensures seamless access to bring your pharmaceutical products to the MENA region, fostering growth and success.",
    buttonName: "Discover Our Services",
    images: [
      <div key={0} className="flex gap-7">
        <Image key={0.1} src={EgyptFlag} alt="egypt-flag" className="w-full" />
        <ul className="flex flex-col gap-3 w-full  justify-center ">
          <li className="text-sm font-normal leading-4">
            34 Elsayed Elmargany St., Ground Floor, Heliopolis, Cairo, Egypt
          </li>
          <li>1 Obour Buildings, Ground Floor App 5, Cairo, Egypt</li>
        </ul>
      </div>,
      <div key={1} className="flex gap-7">
        <Image key={1.1} src={UAEFlag} alt="uae-flag" className="w-full" />
        <ul className="flex flex-col gap-7 w-full justify-center">
          <li>Shams Freezone, UAE</li>
        </ul>
      </div>,
    ],
  },
];
