import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Quote } from "lucide-react";

interface Testimonial {
  quote: string;
  author: string;
  title: string;
  company: string;
}

interface TestimonialCarouselProps {
  testimonials: Testimonial[];
}

export function TestimonialCarousel({ testimonials }: TestimonialCarouselProps) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    arrows: false,
  };

  return (
    <div className="max-w-4xl mx-auto">
      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <div key={index} className="px-4">
            <div className="text-center">
              <Quote className="size-12 text-accent/20 mx-auto mb-6" />
              <blockquote className="text-2xl text-primary mb-8 leading-relaxed">
                "{testimonial.quote}"
              </blockquote>
              <div>
                <div className="text-primary mb-1">{testimonial.author}</div>
                <div className="text-sm text-muted-foreground">
                  {testimonial.title}, {testimonial.company}
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
