const Card = ({ categoryItem }) => {
	const { name, price, image, description } = categoryItem;
	
	return (
		<div className="card">
			<div className="card__texts">
				<h2 className="card__title">{name}</h2>
				<p>{description}</p>
				<p className="card__price">{price}</p>
			</div>
			<div className="card__image">
				<img src={image} alt="Imagem do Produto" />
			</div>
		</div>
	);
};

export default Card;