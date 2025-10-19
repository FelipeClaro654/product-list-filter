import { renderHook, waitFor } from "@testing-library/react";
import useProducts from "./useProducts";
import getProducts from "../api/products";

// Mock the API module
jest.mock("../api/products");

describe("useProducts", () => {
  beforeEach(() => {
    // Clear all mocks before each test
    jest.clearAllMocks();
  });

  it("should initially return loading state", () => {
    getProducts.mockImplementation(() => new Promise(() => {}));

    const { result } = renderHook(() => useProducts());

    expect(result.current).toEqual({
      productList: [],
      categories: [],
      loading: true,
      error: false,
    });
  });

  it("should fetch and return products and categories", async () => {
    const mockData = {
      products: [{ id: 1, name: "Product 1" }],
      categories: ["Category 1", "Category 2"],
    };

    getProducts.mockResolvedValue(mockData);

    const { result } = renderHook(() => useProducts());

    await waitFor(() => expect(result.current.loading).toBe(false));

    expect(result.current).toEqual({
      productList: mockData.products,
      categories: mockData.categories,
      loading: false,
      error: false,
    });
  });

  it("should handle errors properly", async () => {
    getProducts.mockRejectedValue(new Error("Network error"));

    const { result } = renderHook(() => useProducts());

    await waitFor(() => expect(result.current.loading).toBe(false));

    expect(result.current).toEqual({
      productList: [],
      categories: [],
      loading: false,
      error: true,
    });
  });

  it("should only call the API once on mount", async () => {
    const mockData = {
      products: [{ id: 1, name: "Product 1" }],
      categories: ["Category"],
    };

    getProducts.mockResolvedValue(mockData);

    const { rerender } = renderHook(() => useProducts());

    await waitFor(() => expect(getProducts).toHaveBeenCalledTimes(1));

    // Rerender should not trigger another API call
    rerender();

    await waitFor(() => expect(getProducts).toHaveBeenCalledTimes(1));
  });
});
