import Category from "./Category";
import CardsContainer from "./CardsContainer";

function Explore({ location }) {
  return (
    <div className="my-5 ml-5">
      <div className="w-11/12 h-[0.1px] ml-1 mb-5 bg-black opacity-50"></div>
      <h2 className="text-3xl">Explore</h2>
      <div className="flex">
        <Category name="All"></Category>
        <Category name="Fairy Tail"></Category>
        <Category name="Science"></Category>
      </div>
      {/* Make new components for cards below */}
      <h3 className="text-xl">Fable</h3>
      <CardsContainer genre="Fable" location={location} />
    </div>
  );
}

export default Explore;
