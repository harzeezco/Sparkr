import { useState } from "react";

function ToggleSwitch() {
  const [isChecked, setIsChecked] = useState(false);

  const toggleSwitch = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div
      className={`${
        isChecked ? "bg-orangePrimary" : " bg-toggle"
      } flex h-6 w-12  items-center justify-start  rounded-3xl `}
    >
      <button className={`pl-1 pt-1 ${isChecked && "translate-x-6"} transition-all`}>
        {isChecked ? (
          <span onClick={toggleSwitch} className="text-white">
            <ion-icon name="sunny-sharp"></ion-icon>
          </span>
        ) : (
          <span onClick={toggleSwitch}>
            <ion-icon name="moon-sharp"></ion-icon>
          </span>
        )}
      </button>
    </div>
  );
}

export default ToggleSwitch;
