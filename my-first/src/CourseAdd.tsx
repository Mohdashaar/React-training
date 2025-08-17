import { useState } from "react";
import { useNavigate } from "react-router-dom";

// ✅ API endpoint (lowercase "courses")
const API_URL = "https://689d8860ce755fe69788e596.mockapi.io/courses";

const CourseAdd = () => {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  const navigate = useNavigate();

  const addCourse = async () => {
    if (!title.trim() || !description.trim()) {
      alert("Please enter both title and description!");
      return;
    }

    const course = {
      title,
      description,
    };

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(course),
      });

      if (!response.ok) {
        throw new Error(`Error ${response.status}: ${response.statusText}`);
      }

      const data = await response.json();
      console.log(" Course added:", data);

      navigate("/courses");
    } catch (error) {
      console.error("❌ Failed to add course:", error);
      alert("Failed to add course. Please try again.");
    }
  };

  return (
    <div className="container">
      <h2 className="text-primary my-4">Add Course</h2>

      <div id="addCourseform" className="border border-1 rounded shadow p-4">
        <div className="mb-4">
          <label htmlFor="titleTextBox" className="form-label fw-bold">
            Course Title
          </label>
          <input
            type="text"
            id="titleTextBox"
            className="form-control"
            placeholder="Enter Course Title like Java, Python, React, etc"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="descriptionTextBox" className="form-label fw-bold">
            Course Description
          </label>
          <input
            type="text"
            id="descriptionTextBox"
            className="form-control"
            placeholder="Enter Course Description such as topics"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
          />
        </div>

        <div className="mt-5">
          <button className="btn btn-primary w-100" onClick={addCourse}>
            Add Course
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseAdd;
