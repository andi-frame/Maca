import Card from "../components/Card";
import Insights from "../components/Insights";
import Menu from "../components/Menu";
import { useLocation } from "react-router-dom";

function ActivitiesPage() {
  const location = useLocation();

  return (
    <div className="flex flex-col justify-center">
      <span className="ml-8 mt-8 text-3xl">Activities</span>
      <Insights />
      <span className="ml-8 mt-2 text-3xl">Recent Book</span>
      <div className="mx-5 -translate-y-2 flex gap-5">
        <Card title="Book Title" likes="100" genre="Fairy" img="src\assets\card_img.png" />
        <Card title="Book Title" likes="100" genre="Fairy" img="src\assets\card_img.png" />
      </div>
      <Menu page="activities" location={location} />
    </div>
  );
}

export default ActivitiesPage;
