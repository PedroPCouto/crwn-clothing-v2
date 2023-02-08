import CategoryItem from '../category-item/category-item.component';
import './directory.styles.scss';

const Directory = ({Categories}) => {
    return(
    <div className="categories-container">
        {Categories.map((category)=>{
            return(<CategoryItem key= {category.id} categorie={category}/>);
        })
        }
    </div>
  );
}

export default Directory;