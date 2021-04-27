import FlavorFilter from "./FlavorFilter";
import TypeFilter from "./TypeFilter";
import ColorFilter from "./ColorFilter";
import PriceFilter from "./PriceFilter";

function FilterContainer() {
  return (
    <div className="filter-container">
      <div>Filter Container</div>
      <FlavorFilter/>
      <TypeFilter/>
      <ColorFilter/>
      <PriceFilter/>
    </div>
  );
}

export default FilterContainer;
