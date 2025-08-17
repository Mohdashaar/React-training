import { useState } from "react";
import { Link } from "react-router-dom";

type Recipe = {
  id: number;
  name: string;
  servings: number;
  cuisine: string;
  difficulty: string;
  image: string;
};

const RecipeSearch = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");

  const fetchRecipes = async (q: string) => {
    const apiUrl = `https://dummyjson.com/recipes/search?q=${q}`;
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error("Failed to fetch recipes");
    }
    const data = await response.json();
    const recipesData: Recipe[] = data.recipes;

    setRecipes(recipesData);
  };

  return (
    <div>
      <h1 className="text-center text-warning fw-bold mb-4">
        Find Your Next Delicious Recipe!
      </h1>

      {/* Search Bar */}
      <div className="mb-5 d-flex">
        <input
          type="text"
          className="form-control border-2 border-success shadow-sm"
          placeholder="🔍 Search recipes... e.g., Pizza, Butter Chicken, Veg Soup"
          onChange={(event) => setSearchTerm(event.target.value)}
          value={searchTerm}
        />
        <button
          className="btn btn-success ms-2 fw-bold shadow"
          onClick={() => fetchRecipes(searchTerm)}
        >
          Search
        </button>
      </div>

      {/* Recipe Cards */}
      <div className="row">
        {recipes.map((recipe) => (
          <div className="col-md-4 mb-3" key={recipe.id}>
            <div className="card h-100 border border-primary shadow-lg">
              <Link to={`/recipes/${recipe.id}`}>
                <img
                  alt={recipe.name}
                  src={recipe.image}
                  className="card-img-top"
                  style={{ height: "200px", objectFit: "cover" }}
                />
              </Link>

              <div className="card-body">
                <h4 className="card-title text-primary fw-bold">{recipe.name}</h4>
                <p>
                  <span className="badge bg-info me-2">{recipe.cuisine}</span>
                  <span
                    className={`badge ${
                      recipe.difficulty.toLowerCase() === "easy"
                        ? "bg-success"
                        : recipe.difficulty.toLowerCase() === "medium"
                        ? "bg-warning text-dark"
                        : "bg-danger"
                    }`}
                  >
                    {recipe.difficulty}
                  </span>
                </p>
              </div>

              <div className="card-footer bg-light">
                <Link
                  className="text-decoration-none text-success fw-bold"
                  to={`/recipes/${recipe.id}`}
                >
                  View Details →
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default RecipeSearch;
