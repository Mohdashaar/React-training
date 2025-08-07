import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

const Product: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [search, setSearch] = useState<string>("");

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const data: Product[] = await response.json();
      setProducts(data.slice(0, 10)); 
    } catch (error) {
      console.error("Failed to fetch products:", error);
    } finally {
      setLoading(false);
    }
  };

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase())
  );
 

    useEffect(() => {
    fetchProducts();
  }, []); 




  return (
    <div className="container mt-4">
      <h2 className="mb-4">Product List</h2>

      <div className="mb-3 d-flex justify-content-between">
        <button className="btn btn-primary" onClick={fetchProducts} disabled={loading}>
          {loading ? "Fetching..." : "Fetch Products"}
        </button>
        <input
          type="text"
          className="form-control w-50"
          placeholder="Search by title..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="row">
        {filteredProducts.map((product) => (
          <div key={product.id} className="col-md-4 mb-4">
            <div className="card h-100 shadow-sm">
              <img
                src={product.image}
                className="card-img-top p-3"
                alt={product.title}
                style={{ height: "250px", objectFit: "contain" }}
              />
              <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <p className="text-muted">{product.category}</p>
                <p className="fw-bold text-success">${product.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredProducts.length === 0 && products.length > 0 && (
        <p className="text-danger mt-3">No products found for "{search}"</p>
      )}
    </div>
  );
};

export default Product;
