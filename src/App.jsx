import { useState } from 'react';
import './App.css';
import restaurantImage from './assets/restaurante.webp';
import Navigation from './components/navigation.jsx';
import Cards from './components/Cards.jsx';

function App() {
	const [selectedCategory, setSelectedCategory] = useState(0);
	
	return (
		<>
			<div className="container">
				<div className="banner">
					<img src={restaurantImage} alt="Imagem do Restaurante" />
				</div>
				
				<Navigation
					selectedCategory={selectedCategory}
					setSelectedCategory={setSelectedCategory}
				/>
				
				<Cards selectedCategory={selectedCategory} />
			</div>
		</>
	);
}

export default App;