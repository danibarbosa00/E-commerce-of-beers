import './categoryPage.sass';
import CategoryProduct from './CategoryProduct';
import NameCategory from './NameCategory';

interface CategoryPageProps {}

const CategoryPage: React.FC<CategoryPageProps> = ({}) => {
  return (
    <div className='categoryPage'>
        <NameCategory/>
        <CategoryProduct />
    </div>
  );
};

export default CategoryPage;
