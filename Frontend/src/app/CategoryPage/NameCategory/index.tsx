import { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getDataApiJSON } from '../../../utils/globals/petitions';
import { CategoryInfo } from './types';
import './nameCategory.sass'

interface NameCategoryProps extends NameCategoryLogicProps {
}
const NameCategory: React.FC<NameCategoryProps> = ({}) => {
  const {name} = useCategoryProductLogic({});

  return ( 
      <div className='category-name'>{name}</div>
  );
};

interface NameCategoryLogicProps {}

const useCategoryProductLogic = ({}: NameCategoryLogicProps) => {
  const { id } = useParams();
  const [categoryInfo, setCategoryInfo] = useState<CategoryInfo | null>(null);
  const getData = useCallback(async () => {
    const nameData = await getDataApiJSON('/api/category/getCategoryInstance', {
      id,
    });
    setCategoryInfo(nameData);
  }, [id]);

  useEffect(() => {
    getData();
  }, [getData]);
  const name =categoryInfo?.name||''
  return { categoryInfo,name };
};


export default NameCategory;

