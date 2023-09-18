// import { useState } from "react";

// function ToggleSwitch() {
//   const [isChecked, setIsChecked] = useState(false);

//   const toggleSwitch = () => {
//     setIsChecked(!isChecked);
//   };

//   return (
//     <div
//       className={`${
//         isChecked ? "bg-orangePrimary" : " bg-toggle"
//       } flex h-6 w-12  items-center justify-start  rounded-3xl `}
//     >
//       <button className={`pl-1 pt-1 ${isChecked && "translate-x-6"} transition-all`}>
//         {isChecked ? (
//           <span onClick={toggleSwitch} className="text-white">
//             <ion-icon name="sunny-sharp"></ion-icon>
//           </span>
//         ) : (
//           <span onClick={toggleSwitch}>
//             <ion-icon name="moon-sharp"></ion-icon>
//           </span>
//         )}
//       </button>
//     </div>
//   );
// }

// export default ToggleSwitch;


import useTheme from "../../Hooks/useTheme";
import Moon from "../../assets/Svg/Moon";
import Sun from "../../assets/Svg/Sun";

function ThemeSwitcher() {
  const { toggleTheme, theme } = useTheme();

  const isDark = theme === "dark";

  const toggleSwitch = () => {
    toggleTheme();
  };

  return (
    <div
      className={`
        flex h-10 w-10 items-center justify-center overflow-hidden rounded-full border-2 ${
          isDark ? "border-colorSlate hover:border-white" : "border-gray-900"
        } bg-inherit transition  focus:hover:border-white`}
    >
      <button className={`${isDark && "translate-x-0"} transition-all`}>
        {isDark ? (
          <span onClick={toggleSwitch} className={`text-${theme}`}>
            <Moon />
          </span>
        ) : (
          <span onClick={toggleSwitch}>
            <Sun />
          </span>
        )}
      </button>
    </div>
  );
}

export default ThemeSwitcher;
