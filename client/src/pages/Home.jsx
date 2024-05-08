import Header from "../components/Header";
import Menu from "../components/Menu";
import Greatings from "../components/Greatings";
import Insights from "../components/Insights";
import Explore from "../components/Explore";
import backgroundImg from "../assets/background_home.png";
import { FaPlus } from "react-icons/fa6";

function Home() {
  return (
    <>
      {/* Background Image */}
      <img className="absolute -z-10" src={backgroundImg} alt="maca_home_background_img.png" />

      <Header className="z-10"></Header>
      <Greatings></Greatings>
      <Insights></Insights>
      <Explore></Explore>

      {/* Submit New Book*/}
      <div
        className="w-[55px] h-[55px] bg-[#06957B]/80 fixed bottom-16 right-0 m-4 rounded-xl flex justify-center items-center"
        onClick={() => (location.href = "/submitpage")}>
        <FaPlus className="text-white text-3xl" />
      </div>
      <Menu page="home"></Menu>
    </>
  );
}

export default Home;
