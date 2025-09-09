import CategoryCard from "./CategoryCard";

function CategoriesList({ categories }) {
  return (
    <div className="row">
      {categories.map((category) => {
        return (
          <div className="col-sm-6 col-md-4 mt-5" key={category._id}>
            <CategoryCard sectionData={category} />
          </div>
        );
      })}
    </div>
  );
}

export default CategoriesList;
