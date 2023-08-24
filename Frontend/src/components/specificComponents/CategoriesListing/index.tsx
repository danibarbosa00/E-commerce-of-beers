import { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './categoriesListing.sass';
import { getDataApiJSON } from '../../../utils/globals/petitions';
import { Category } from './types';
interface CategoriesListingProps extends CategoriesListingLogicProps {}

export const CategoriesListing: React.FC<CategoriesListingProps> = ({}) => {
  const { categories } = useCategoriesListingLogic({});
  const renderThis: JSX.Element[] = [];

  if (categories) {
    for (const element of categories) {
      renderThis.push(
        <IndividualCategory
          id={element.id}
          name={element.name}
          key={element.id}
        />
      );
    }
  }

  return <div className='categories-listing'>{renderThis}</div>;
};

interface CategoriesListingLogicProps {}

export const useCategoriesListingLogic = ({}: CategoriesListingLogicProps) => {
  const [categories, setCategories] = useState<null | Category[]>(null);
  const getData = useCallback(async () => {
    const data = await getDataApiJSON('/api/category/getAllCategories', {});
    setCategories(data);
  }, []);

  useEffect(() => {
    getData();
  }, [getData]);
  return { categories };
};
interface IndividualCategoryProps {
  id: number;
  name: string;
}

const IndividualCategory: React.FC<IndividualCategoryProps> = ({
  id,
  name,
}) => {
  return (
    <Link className='individual-category' to={'/category/' + id}>
      {name}
    </Link>
  );
};
