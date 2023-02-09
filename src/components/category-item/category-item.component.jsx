import './category-item.styles.scss';

const CategoryItem = ({categorie}) => {
    const {name, imageUrl} = categorie;
    return(
    <div className="category-container">
        <div className="background-image" style={
            {backgroundImage: `url(${imageUrl})`}
        }>
        </div>
        <div className="category-body-container">
            <h2>{name}</h2>
            <p>SHOP NOW</p>
        </div>
    </div>
  )
}


export default CategoryItem;