import home_white from "../assets/home_logo_white.svg";
import home_green from "../assets/home_logo_green.svg";
import activities_white from "../assets/activities_logo_white.svg";
import activities_green from "../assets/activities_logo_green.svg";
import profile_white from "../assets/profile_logo_white.svg";
import profile_green from "../assets/profile_logo_green.svg";

function Menu({ page }) {
  var activities;
  var home;
  var profile;

  if (page == "activities") {
    activities = activities_green;
    home = home_white;
    profile = profile_white;
  } else if (page == "home") {
    activities = activities_white;
    home = home_green;
    profile = profile_white;
  } else if (page == "profile") {
    activities = activities_white;
    home = home_white;
    profile = profile_green;
  }

  return (
    <div className="h-16">
      <div className="bg-[#06957B]/80 w-auto h-16 fixed bottom-0 left-0 right-0 flex justify-around items-center">
        <div
          className="flex flex-col items-center justify-center"
          onClick={() => {
            location.href = "/activities";
          }}>
          <img className="w-11" src={activities} alt="activities_white" />
        </div>
        <div
          className="flex flex-col items-center justify-center"
          onClick={() => {
            location.href = "/";
          }}>
          <img className="w-11" src={home} alt="home_green" />
        </div>
        <div
          className="flex flex-col items-center justify-center"
          onClick={() => {
            location.href = "/profile";
          }}>
          <img className="w-[60px]" src={profile} alt="profile_white" />
        </div>
      </div>
    </div>
  );
}
export default Menu;
