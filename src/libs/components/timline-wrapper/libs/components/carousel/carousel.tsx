import AliceCarousel from "react-alice-carousel";
import { CarouselItem } from "./libs/components/carousel-item/carousel-item";
import "./styles.css";

const Carousel: React.FC = () => {
  return (
    <>
      <AliceCarousel
        animationDuration={700}
        autoPlayInterval={3000}
        autoPlay
        autoPlayStrategy="none"
        disableButtonsControls
        infinite
        responsive={{
          0: { items: 1 },
          568: { items: 1 },
          1024: { items: 1 },
        }}
        items={[
          <CarouselItem />,
          <CarouselItem />,
          <CarouselItem />,
          <CarouselItem />,
          <CarouselItem />,
        ]}
      />
    </>
  )
}

export { Carousel };