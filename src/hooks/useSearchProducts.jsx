import { useMemo } from "react";
import { useState } from "react";

const useSearchProducts = ({ productList = [] }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");

  const filteredProductsList = useMemo(
    () =>
      productList.filter((product) => {
        if (categoryFilter && categoryFilter !== "all") {
          return (
            product.category === categoryFilter &&
            product.name.toLowerCase().includes(searchTerm.toLocaleLowerCase())
          );
        }

        return product.name
          .toLowerCase()
          .includes(searchTerm.toLocaleLowerCase());
      }),
    [productList, searchTerm, categoryFilter]
  );

  return { filteredProductsList, setSearchTerm, setCategoryFilter };
};

export default useSearchProducts;
