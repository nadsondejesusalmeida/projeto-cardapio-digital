import React from 'react';

const Navigation = ({ setSelectedCategory, selectedCategory }) => {
	const categories = [ 'Pratos Principais', 'Sobremesas', 'Bebidas' ];
	console.log(selectedCategory);
	
	return (
		<div className="categories">
			{categories.map((category, index) => (
				<p 
					onClick={() => setSelectedCategory(index)}
					key={index}
					className={`category${
						index === selectedCategory ? " category--selected" : ""
					}`}
				>
					{category}
				</p>
				))}
		</div>
	);
};

export default Navigation;