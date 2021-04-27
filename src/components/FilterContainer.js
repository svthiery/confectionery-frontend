import FlavorFilter from "./FlavorFilter";
import TypeFilter from "./TypeFilter";
import ColorFilter from "./ColorFilter";
import PriceFilter from "./PriceFilter";
import Sort from "./Sort";

function FilterContainer() {
  return (
    <div className="filter-container col-2">
      <div>Filter Container</div>
      <div className="row">
        <Sort/>
      </div>
      <div className="row">
        <FlavorFilter/>
      </div>
      <div className="row">
        <TypeFilter/>
      </div>
      <div className="row">
        <ColorFilter/>
      </div>
      <div className="row">
        <PriceFilter/>
        </div>
    </div>
  );
}

export default FilterContainer;
