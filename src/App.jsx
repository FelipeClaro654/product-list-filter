import CategoriesFilter from "./component/CategoriesFilter";
import ProductsList from "./component/ProductsList";
import SearchProduct from "./component/SearchProduct";
import useProducts from "./hooks/useProducts";
import useSearchProducts from "./hooks/useSearchProducts";

function App() {
  const { productList, categories, loading, error } = useProducts();
  const { setSearchTerm, filteredProductsList, setCategoryFilter } =
    useSearchProducts({
      productList,
    });

  return loading ? (
    <>Loading Component...</>
  ) : (
    <>
      <ProductsList productsList={filteredProductsList} />
      <SearchProduct setSearchTerm={setSearchTerm} />
      <CategoriesFilter
        categories={categories}
        setCategoryFilter={setCategoryFilter}
      />
      {error ? <>An error occurred! </> : <></>}
    </>
  );
}

export default App;
