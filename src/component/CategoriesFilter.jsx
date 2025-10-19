import { memo } from "react";

const CategoriesFilter = ({ categories, setCategoryFilter }) => {
  const renderedCategoriesOptions = categories.map((category) => (
    <option key={category} value={category}>
      {category}
    </option>
  ));

  const handleCategoryChange = (event) => {
    setCategoryFilter(event.target.value);
  };
  return (
    <select onChange={handleCategoryChange}>{renderedCategoriesOptions}</select>
  );
};

export default memo(CategoriesFilter);
