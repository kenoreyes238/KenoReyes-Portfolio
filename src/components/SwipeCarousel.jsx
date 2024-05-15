import Carousel from 'react-bootstrap/Carousel';

export default function SwipeCarousel() {
  return (
    <Carousel className="carousel">
      <Carousel.Item>
        <img src="YapperChat.png" />
      </Carousel.Item>
      <Carousel.Item>
      <img src="Pokedex.png" />
      </Carousel.Item>
      <Carousel.Item>
      <img src="shopping.png" />
      </Carousel.Item>
    </Carousel>
  );
}