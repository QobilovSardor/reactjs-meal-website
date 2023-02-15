import { Link } from 'react-router-dom';
import {Card, CardBody, CardTitle, CardText, Button } from 'reactstrap';

function CategoryItem(props) {
  const {strCategory, strCategoryThumb, strCategoryDescription} = props;
  return (
    <div>
      <Card
        style={{
          width: '18rem'
        }}
      >
        <img
          alt={strCategory}
          src={strCategoryThumb}
        />
        <CardBody>
          <CardTitle tag="h5">
            {strCategory}
          </CardTitle>
          <hr />
          <CardText>
            {strCategoryDescription.slice(0, 60)}...
          </CardText>
          <Button color='success' className='text-white' >
            <Link style={{color: 'white', textDecoration: 'none'}} to={`/mealscategory/${strCategory}`}>Watch category</Link>
          </Button>
        </CardBody>
      </Card>
    </div>
  );
}

export default CategoryItem;