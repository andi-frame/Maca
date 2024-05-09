import Header from "../components/Header";
import Menu from "../components/Menu";
import Greatings from "../components/Greatings";
import Insights from "../components/Insights";
import Explore from "../components/Explore";
import backgroundImg from "../assets/background_home.png";
import { FaPlus } from "react-icons/fa6";
import { useLocation, useNavigate } from "react-router-dom";

function Home() {
  const history = useNavigate();
  const location = useLocation();

  return (
    <>
      {/* Background Image */}
      <img className="absolute -z-10" src={backgroundImg} alt="maca_home_background_img.png" />

      <Header className="z-10"></Header>
      <Greatings location={location}></Greatings>
      <Insights location={location}></Insights>
      <Explore location={location}></Explore>

      {/* Submit New Book*/}
      <div
        className="w-[55px] h-[55px] bg-[#06957B]/80 fixed bottom-16 right-0 m-4 rounded-xl flex justify-center items-center"
        onClick={() => {
          history("/submitpage", { state: { data: location.state.data } });
        }}>
        <FaPlus className="text-white text-3xl" />
      </div>
      <Menu page="home" location={location}></Menu>
    </>
  );
}

export default Home;