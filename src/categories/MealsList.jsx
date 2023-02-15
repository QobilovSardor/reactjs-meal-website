import { useParams } from "react-router-dom";
import {Card, CardBody, CardTitle, Button, CardSubtitle, CardText } from 'reactstrap';

function MealsList(props) {
  const {id} = useParams();
  const {strMeal, strCategory, strArea, strInstructions, strMealThumb} = props;

  return (
    <div className="container my-5">
      <Card
        style={{
          width: '18rem'
        }}
      >
        <img
          alt="Sample"
          src={strMealThumb}
        />
        <CardBody>
          <CardTitle tag="h5">
            Card title
          </CardTitle>
          <CardSubtitle
            className="mb-2 text-muted"
            tag="h6"
          >
            Card subtitle
          </CardSubtitle>
          <CardText>
            {strInstructions}
          </CardText>
          <Button>
            Button
          </Button>
        </CardBody>
      </Card>
    </div>
  );
}

export default MealsList;