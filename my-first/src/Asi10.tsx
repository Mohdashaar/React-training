import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

type Recipe = {
  id: number;
  name: string;
  image: string;
  cuisine: string;
  cookTimeMinutes: number;
  ingredients: string[];
};

const Asi10 = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await fetch("https://dummyjson.com/recipes");
        const data = await response.json();
        setRecipes(data.recipes || []);
      } catch (error) {
        
        console.error("Failed to fetch recipes:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRecipes();
  }, []);

  return (
    <div className="container my-4">
      <h2 className="text-center text-primary mb-4">Recipe List</h2>

      {loading ? (
        <div className="text-center">
          <div className="spinner-border text-primary" role="status"></div>
        </div>
      ) : (
        <div className="row">
          {recipes.length === 0 ? (
            <p className="text-center text-danger">No recipes found.</p>
          ) : (
            recipes.map((recipe) => (
              <div className="col-md-4 mb-4" key={recipe.id}>
                <div className="card h-100 shadow">
                  <img
                    src={recipe.image}
                    className="card-img-top"
                    alt={recipe.name}
                    style={{ height: "200px", objectFit: "cover" }}
                  />
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title">{recipe.name}</h5>
                    <p className="card-text">
                      <strong>Cuisine:</strong> {recipe.cuisine} <br />
                      <strong>Cooking Time:</strong> {recipe.cookTimeMinutes} mins
                    </p>
                    <div>
                      <strong>Main Ingredients:</strong>
                      <ul className="mb-0">
                        {recipe.ingredients.slice(0, 5).map((ingredient, index) => (
                          <li key={index}>{ingredient}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default Asi10;
