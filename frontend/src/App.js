import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Header from './components/Header';
import Container from 'react-bootstrap/esm/Container';
import Home from './pages/Home';
import Details from './pages/Details';
import About from './pages/About';

function App() {
	return (
		<>
			<Router>
				<Navigation />
				<Container>
					<Header title="Loc8r" strapline="Find a place to work with wifi!" />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/locations/:id" element={<Details />} />
						<Route path="/about" element={<About />} />
					</Routes>
				</Container>
			</Router>
		</>
	);
}

export default App;
