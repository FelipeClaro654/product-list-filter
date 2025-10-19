const getProducts = () =>
  new Promise((resolve) =>
    resolve({
      products: [
        {
          id: 1,
          name: "Laptop Gaming",
          price: 1299.99,
          category: "electronics",
          image: "/laptop.jpg",
        },
        {
          id: 2,
          name: "T-shirt Cotton",
          price: 29.99,
          category: "clothing",
          image: "/tshirt.jpg",
        },
      ],
      categories: ["all", "electronics", "clothing", "books", "home"],
    })
  );

export default getProducts;
