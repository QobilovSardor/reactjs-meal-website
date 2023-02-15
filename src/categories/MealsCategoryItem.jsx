import {Card, CardBody, CardTitle, Button } from 'reactstrap';
import { Link } from 'react-router-dom';

function MealsCategoryItem(props) {
  const {strMeal, strMealThumb, idMeal} = props;

  return (
    <div>
      <Card
        style={{
          width: '18rem'
        }}
        className='card'
      >
        <img
          alt={strMeal}
          src={strMealThumb}
        />
        <CardBody>
          <CardTitle tag="h5">
            {strMeal}
          </CardTitle>
          <hr />
          <Button color='primary'>
            <Link style={{color: 'white', textDecoration: 'none'}} to={`/mealslist/${idMeal}`}>Watch category</Link>
          </Button>
        </CardBody>
      </Card>
    </div>
  );
}

export default MealsCategoryItem;