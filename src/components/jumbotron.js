import Carousel from 'react-bootstrap/Carousel';

import JUMBO1 from '../assets/jumbo1.png'
import JUMBO2 from '../assets/jumbo2.png'

function Jumbotron() {
    return (
        <Carousel id="jumbotron" fade className="p-5">
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={JUMBO1}
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={JUMBO2}
                    alt="Second slide"
                />
            </Carousel.Item>
        </Carousel>
    );
}

export default Jumbotron;