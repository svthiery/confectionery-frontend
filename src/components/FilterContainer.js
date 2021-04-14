import FlavorFilter from "./FlavorFilter";
import TypeFilter from "./TypeFilter";
import ColorFilter from "./ColorFilter";
import PriceFilter from "./PriceFilter";

function FilterContainer() {
  return (
    <div>
      <div>Filter Container</div>
      <FlavorFilter/>
      <TypeFilter/>
      <ColorFilter/>
      <PriceFilter/>
    </div>
  );
}

export default FilterContainer;
