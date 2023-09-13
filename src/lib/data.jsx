import CounterRef from "../Components/general/CounterRef";
import Card1Image from "../assets/Images/Card1.png";
import Card2Image from "../assets/Images/Card2.png";
import Card3Image from "../assets/Images/Card3.png";

export const NAV_LINKS = [
  {
    id: 1,
    link: "about us",
    path: "/about",
  },
  {
    id: 2,
    link: "services",
    path: "/service",
  },
  {
    id: 3,
    link: "project",
    path: "/project",
  },
  {
    id: 4,
    link: "blog",
    path: "/blog",
  },
  {
    id: 5,
    link: "contact",
    path: "/contact",
  },
];

export const FOOTER_1_NAV_LINKS = [
  {
    id: 1,
    link: "home",
    path: "/",
  },
  {
    id: 2,
    link: "about us",
    path: "/about",
  },
  {
    id: 3,
    link: "services",
    path: "/services",
  },
  {
    id: 4,
    link: "project",
    path: "/project",
  },
];

export const FOOTER_2_NAV_LINKS = [
  {
    id: 1,
    link: "blog",
    path: "/blog",
  },
  {
    id: 2,
    link: "contact",
    path: "/contact",
  },
  {
    id: 3,
    link: "menu",
    path: "/menu",
  },
];

const { counter1, counter2, counter3 } = CounterRef;

export const COUNT_DETAILS = [
  {
    id: 1,
    data_value: "5",
    pagh_text: "years of exprerience",
    percent_symb: "+",
    counter: counter1,
  },
  {
    id: 2,
    data_value: "60",
    pagh_text: "design awards",
    percent_symb: "+",
    counter: counter2,
  },
  {
    id: 3,
    data_value: "5",
    pagh_text: "Clients satisfactions",
    percent_symb: "%",
    counter: counter3,
  },
];

export const PROJECT_CARD_DETAILS = [
  {
    id: 1,
    img: Card1Image,
    job_title: "Email Marketing Landing Page",
  },
  {
    id: 2,
    img: Card2Image,
    job_title: "Marketer Portfolio Landing Page",
  },
  {
    id: 3,
    img: Card3Image,
    job_title: "Agency Landing Page Design",
  },
  {
    id: 4,
    img: Card3Image,
    job_title: "Agency Landing Page Design",
  },
  {
    id: 5,
    img: Card1Image,
    job_title: "Email Marketing Tool Landing Page",
  },
];

export const SERVICE_DATA = [
  {
    id: 1,
    job: "Graphic design",
    work: "UI/UX",
    isOpen: false,
    borderb: true,
  },
  {
    id: 2,
    job: "illustrations",
    work: "UI/UX",
    isOpen: false,
    borderb: true,
  },
  {
    id: 3,
    job: "logo & branding",
    work: "UI/UX",
    isOpen: false,
    borderb: true,
  },
  {
    id: 4,
    job: "development",
    work: "UI/UX",
    isOpen: false,
    borderb: false,
  },
];

export const PROCESS_DETAILS = [
  {
    id: 1,
    num: "#1",
    heading: "discussion",
    prgh: `We start by learn and research based on client brief and resource
             to gain about the needs, goals, product and requirements. We are
             providing the best.`,
  },
  {
    id: 2,
    num: "#2",
    heading: "discovery",
    prgh: `We start by learn and research based on client brief and resource
             to gain about the needs, goals, product and requirements. We are
             providing the best.`,
  },
  {
    id: 3,
    num: "#3",
    heading: "strategy",
    prgh: `We start by learn and research based on client brief and resource
             to gain about the needs, goals, product and requirements. We are
             providing the best.`,
  },
  {
    id: 4,
    num: "#4",
    heading: "design & dev",
    prgh: `We start by learn and research based on client brief and resource
             to gain about the needs, goals, product and requirements. We are
             providing the best.`,
  },
];