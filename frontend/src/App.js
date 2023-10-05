import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Container from 'react-bootstrap/Container';
import Home from './pages/Home';
import Details from './pages/Details';
import About from './pages/About';

function App() {
	return (
		<>
			<Router>
				<Navigation />
				<Container>
					<Routes>
						<Route exact path="/" element={<Home />} />
						<Route path="/locations/:locationId" element={<Details />} />
						<Route path="/about" element={<About />} />
					</Routes>
					<Footer />
				</Container>
			</Router>
		</>
	);
}

export default App;
