import Header from '../components/Header';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function About() {
	return (
		<>
			<Header title="About" />
			<Row>
				<Col lg={8}>
					<p>
						Loc8r was created to help people find places to sit down and get a
						bit of work done.
					</p>
					<p>
						This app was inspired from the book <em>Getting MEAN</em> by Simon
						Holmes/Clive Harber. Originally, the app was created with Angular
						and the MEAN stack, but I thought it would be cool to rebuild it
						using React and the MERN stack!
					</p>
				</Col>
			</Row>
		</>
	);
}

export default About;
