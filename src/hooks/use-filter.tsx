import { useContext } from "react";
import { FilterContext, FilterContextType } from "@/context/filter-context";

const useFilter = (): FilterContextType => {
  const context = useContext(FilterContext);
  if (context === undefined) {
    throw new Error("useFilter must be used within a FilterProvider");
  }
  return context;
};

export default useFilter;
