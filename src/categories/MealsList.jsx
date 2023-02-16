import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Card, CardBody, CardTitle, Button, CardText, Table } from 'reactstrap';
import { getMealId } from '../config/api';
import Loader from '../layouts/Loader';

function MealsList() {
	const { id } = useParams();
	const goBack = useNavigate();
	const [ recipe, setRecipe ] = useState({});
	const [ showrecipe, setShowRepice ] = useState(false);

	const handlerShow = () => {
		setShowRepice(!showrecipe);
	};

	useEffect(
		() => {
			getMealId(id).then((data) => setRecipe(data.meals[0]));
		},
		[ id ]
	);

	return (
		<div className="container my-5">
			<Button color="primary" onClick={() => goBack(-1)} className="mb-5">
				Go Back
			</Button>
			{!recipe.idMeal ? (
				<Loader />
			) : (
				<Card
					style={{
						width: '50%'
					}}
				>
					<img
						alt={recipe.strCategory}
						src={recipe.strMealThumb}
						style={{ height: '30rem', objectFit: 'cover' }}
					/>
					<CardBody>
						<CardTitle tag="h5">
							{recipe.strMeal}
							<hr />
						</CardTitle>
						<CardTitle tag="h5">
							{recipe.strCategory}
							<hr />
						</CardTitle>
						{recipe.strArea ? (
							<CardTitle tag="h5">
								{recipe.strArea}
								<hr />
							</CardTitle>
						) : null}
						<CardText>{recipe.strInstructions}</CardText>
						<Button onClick={handlerShow} color="primary" className="my-3">
							Show Recipe
						</Button>
						{showrecipe ? (
							<Table>
								<thead>
									<tr>
										<th>Ingredient</th>
										<th>Measure</th>
									</tr>
								</thead>
								<tbody>
									{Object.keys(recipe).map(
										(key, index) =>
											key.includes('Ingredient') && recipe[key] ? (
												<tr key={index}>
													<td>{recipe[key]}</td>
													<td>{recipe[`strMeasure${key.slice(13)}`]}</td>
												</tr>
											) : null
									)}
								</tbody>
							</Table>
						) : null}
						<h4>Watch video</h4>
						{recipe.strYoutube ? (
							<iframe
								style={{ width: '100%', height: '300px' }}
								src={`https://www.youtube.com/embed/${recipe.strYoutube.slice(-11)}`}
								title={id}
							/>
						) : null}
					</CardBody>
				</Card>
			)}
		</div>
	);
}

export default MealsList;
