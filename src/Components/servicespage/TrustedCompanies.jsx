import Pro from "../../assets/Images/Companies/Pro.png";
import Proline from "../../assets/Images/Companies/Cactus.png";
import Cloud from "../../assets/Images/Companies/Cloud.png";
import Greenish from "../../assets/Images/Companies/Greenish.png";
import Hues from "../../assets/Images/Companies/Hues.png";
import Leafe from "../../assets/Images/Companies/Leafe.png";
import Penta from "../../assets/Images/Companies/Penta.png";
import Recharge from "../../assets/Images/Companies/Recharge.png";
import Snow from "../../assets/Images/Companies/Snow.png";
import Snowflake from "../../assets/Images/Companies/Snowflake.png";
import Vision from "../../assets/Images/Companies/Vision.png";

const TrustedCompanies = () => {
  return (
    <div id="trusted-companies" className="m-auto max-w-[80%] px-5 text-center py-14">
      <h3 className="text-white font-bold text-lg pb-5">Trusted by the best companies</h3>
      <div className="flex items-center justify-around gap-x-2">
        <img src={Pro} alt="" />
        <img src={Proline} alt="" />
        <img src={Cloud} alt="" />
        <img src={Proline} alt="" />
        <img src={Hues} alt="" />
        <img src={Greenish} alt="" />
      </div>
      <div className="flex items-center justify-around gap-x-2 pt-5">
        <img src={Snow} alt="" />
        <img src={Snowflake} alt="" />
        <img src={Recharge} alt="" />
        <img src={Vision} alt="" />
        <img src={Leafe} alt="" />
        <img src={Penta} alt="" />
      </div>
    </div>
  );
};

export default TrustedCompanies;
