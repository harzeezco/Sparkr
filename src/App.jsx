// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import AppLayout from "./Components/AppLayout";
// import AboutPage from "./Pages/AboutPage";
// import ServicePage from "./Pages/ServicePage";
// import ProjectPage from "./Pages/ProjectPage";
// import ContactPage from "./Pages/ContactPage";
// import BlogPage from "./Pages/BlogPage";
// import LandingPage from "./Pages/LandingPage";
// import ErrorPage from "./Pages/ErrorPage";

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<AppLayout />}>
//           <Route path="/" index element={<LandingPage />} />
//           <Route path="/about" element={<AboutPage />} />
//           <Route path="/service" element={<ServicePage />} />
//           <Route path="/project" element={<ProjectPage />} />
//           <Route path="/blog" element={<BlogPage />} />
//           <Route path="/contact" element={<ContactPage />} />
//         </Route>
//         <Route path="*" element={<ErrorPage />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;

// import { useState } from "react";

// const Carousel = ({ items: initialItems, active: initialActive }) => {
//   const [items] = useState(initialItems);
//   const [active, setActive] = useState(initialActive);
//   const [direction, setDirection] = useState("");

//   const moveLeft = () => {
//     const newActive = active - 1;
//     setActive(newActive < 0 ? items.length - 1 : newActive);
//     setDirection("left");
//   };

//   const moveRight = () => {
//     const newActive = (active + 1) % items.length;
//     setActive(newActive);
//     setDirection("right");
//   };

//   const generateItems = () => {
//     const generatedItems = [];
//     for (let i = active - 2; i < active + 3; i++) {
//       let index = i;
//       if (i < 0) {
//         index = items.length + i;
//       } else if (i >= items.length) {
//         index = i % items.length;
//       }
//       const level = active - i;
//       generatedItems.push(<Item key={index} id={items[index]} level={level} />);
//     }
//     return generatedItems;
//   };

//   return (
//     <div id="carousel" className="noselect">
//       <div className="arrow arrow-left" onClick={moveLeft}>
//         <i className="fi-arrow-left"></i>
//       </div>
//       <div className={`transition-group-${direction}`}>{generateItems()}</div>
//       <div className="arrow arrow-right" onClick={moveRight}>
//         <i className="fi-arrow-right"></i>
//       </div>
//     </div>
//   );
// };

// const Item = ({ id, level }) => {
//   const className = `item level${level}`;

//   return <div className={className}>{id}</div>;
// };

// const items = [1, 2, 3, 4, 5];

// function App() {
//   return (
//     <div className="App">
//       <h1>React Carousel with Hooks</h1>
//       <Carousel items={items} active={0} />
//     </div>
//   );
// }

// export default App;

import { useState } from "react";

const Carousel = ({
  testimonials: initialTestimonials,
  active: initialActive,
}) => {
  const [testimonials] = useState(initialTestimonials);
  const [active, setActive] = useState(initialActive);
  const [direction, setDirection] = useState("");

  const moveLeft = () => {
    const newActive = active - 1;
    setActive(newActive < 0 ? testimonials.length - 1 : newActive);
    setDirection("left");
  };

  const moveRight = () => {
    const newActive = (active + 1) % testimonials.length;
    setActive(newActive);
    setDirection("right");
  };

  const generateItems = () => {
    const generatedItems = [];
    for (let i = active - 2; i < active + 3; i++) {
      let index = i;
      if (i < 0) {
        index = testimonials.length + i;
      } else if (i >= testimonials.length) {
        index = i % testimonials.length;
      }
      const level = active - i;
      generatedItems.push(
        <Testimonial
          key={index}
          testimonial={testimonials[index]}
          level={level}
        />,
      );
    }
    return generatedItems;
  };

  return (
    <div id="carousel" className="noselect">
      <div className="arrow arrow-left" onClick={moveLeft}>
        <i className="fi-arrow-left"></i>
      </div>
      <div className={`transition-group-${direction}`}>{generateItems()}</div>
      <div className="arrow arrow-right" onClick={moveRight}>
        <i className="fi-arrow-right"></i>
      </div>
    </div>
  );
};

const Testimonial = ({ testimonial, level }) => {
  // const className = `item level${level}`;

  return (
    <div className={"item level1"}>
      <p className="testimonial-text">{testimonial.text}</p>
      <p className="testimonial-name">{testimonial.name}</p>
      <p className="testimonial-address">{testimonial.address}</p>
    </div>
  );
};

const testimonials = [
  {
    id: 0,
    text: ` Route agency team are just amazing. We have had some personal
            websites and dashboards. The team always delivered on time. The best
            quality with endless iterations. Good Job!`,
    name: "Elizabeth",
    address: "Los Angeles, CA",
  },
  {
    id: 1,
    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores nemo
          enim eaque voluptates ea vero corrupti d.`,
    name: "Ismail",
    address: "USA, CA",
  },
  {
    id: 2,
    text: `  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam
          assumenda consectetur, vitae molestiae natus explicabo illo, ipsam
          expedita excepturi quidem `,
    name: "Azeez",
    address: "Lagos, CA",
  },
  {
    id: 3,
    text: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis
          repellat distinctio id maxime in accusamus neque officiis officia enim
          iure illo cupiditate quibusdam, saepe`,
    name: "Wakil",
    address: "Nigeria, CA",
  },
  {
    id: 4,
    text: `  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non labore
          magni quibusdam eius odio aliquam voluptatum pariatur nam impedit odit
          voluptatem `,
    name: "Adam",
    address: "Norway, CA",
  },
];

function App() {
  return (
    <div className="App">
      <h1>React Carousel with Hooks</h1>
      <Carousel testimonials={testimonials} active={0} />
    </div>
  );
}

export default App;
