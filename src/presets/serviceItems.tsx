import {
  IoFlask,
  IoChatboxEllipses,
  IoGlobe,
  IoHeadset,
  IoDocumentText,
  IoBulb,
} from "react-icons/io5";

type serviceItem = {
  title: string;
  description: string;
  icon: JSX.Element;
};

export const serviceItems: serviceItem[] = [
  {
    title: "Pharmaceutical Consulting",
    description:
      "Navigate regulations, plan strategies. Expert insights for compliance and success.",
    icon: <IoFlask size={28} color="#61FFD9" />,
  },
  {
    title: "Customized Training",
    description:
      "Tailored programs empower teams with pharmaceutical and nutritional expertise.",
    icon: <IoChatboxEllipses size={28} color="#61FFD9" />,
  },
  {
    title: "Global Market Expansion",
    description:
      "Extend reach, tap into international success with our network.",
    icon: <IoGlobe size={28} color="#61FFD9" />,
  },
  {
    title: "Regulatory Support",
    description:
      "Navigating complexities, staying compliant with evolving regulations.",
    icon: <IoHeadset size={28} color="#61FFD9" />,
  },
  {
    title: "Innovative Research Insights",
    description:
      "Stay ahead with research-driven insights, lead in innovation.",
    icon: <IoDocumentText size={28} color="#61FFD9" />,
  },
  {
    title: "Strategic Partnerships",
    description:
      "Trust us to advocate internationally, foster partnerships, amplify your presence.",
    icon: <IoBulb size={28} color="#61FFD9" />,
  },
  {
    title: "Market Analysis and Intelligence",
    description: "Data-driven market insights empower optimal strategies.",
    icon: <IoGlobe size={28} color="#61FFD9" />,
  },
];
