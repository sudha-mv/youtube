import "../Styles/Categories.css"
const Categories = () => {
  let links = [
    { Categories: 'All' },
    { Categories: 'Live' },
    { Categories: 'Music' },
    { Categories: 'Comedy' },
    { Categories: 'Sports' },
    { Categories: 'Gaming' },
    { Categories: 'Vlog' },
    { Categories: 'TV shows' },
    { Categories: 'Bollywood' },
    { Categories: 'News' },
  ];
  return (
    <div className="categories">
      <div className="categories_link">

            {links.map((data)=>(
                <a href="fdre">{data.Categories}</a>
            ))}

      </div>
    </div>
  );
};
export default Categories;
