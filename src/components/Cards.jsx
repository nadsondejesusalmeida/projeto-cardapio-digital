import Card from './Card.jsx';
import { mainDishes, desserts, drinks } from '../assets/cardapio.js';

const Cards = ({ selectedCategory }) => {
	const categoryItems = [ mainDishes, desserts, drinks ];
	const currentList = categoryItems[selectedCategory] || [];
	
	return (
		<div className="cards">
			{categoryItems[selectedCategory].map((categoryItem, index) => (
				<Card key={index} categoryItem={categoryItem} />
			))}
		</div>
	)
}

export default Cards;