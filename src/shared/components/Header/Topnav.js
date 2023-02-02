import profile_image_path from "../../../assets/img/profile-circle.png";
import LanguageIcon from "@mui/icons-material/Language";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
const Topnav = () => {
  return (
    <div className="topnav flex justify-between">
      <div className="">Product Screen</div>
      <div className="flex gap-5">
        <img
          src={profile_image_path}
          style={{ width: "40px", height: "40px" }}
        />
        <div className="">
          Sumit Gupta <br /> Admin
        </div>
        <LanguageIcon />
        <DarkModeIcon />
      </div>
    </div>
  );
};
export default Topnav;
