import React from "react";
import "./Testimonials.css";
import TestimonialCard from "../../../components/TestimonialCard/TestimonialCard";

const testimonials = [
  {
    id: 1,
    author: "John Doe",
    description:
      "Little Lemon is a hidden gem in the heart of Chicago! The bruschettas were out of this world—fresh, flavorful, and beautifully presented.",
    image:
      "https://ntvb.tmsimg.com/assets/assets/31110_v9_bd.jpg?w=360&h=480",
    rating: 5,
  },
  {
    id: 2,
    author: "Mark Jayce",
    description:
      "The blend of modern flair with a nostalgic vibe made it a memorable night. We will definitely be coming back!",
    image:
      "https://yt3.googleusercontent.com/5x667kpeTmALMbeZHtnQWyA0A0CpKpQyCPPjUzq343AXvse9POWQtXT480rruq19EiETD8zmyQ=s900-c-k-c0x00ffffff-no-rj",
    rating: 5,
  },
  {
    id: 3,
    author: "Sarah Pen",
    description:
      "If you're looking for a place that truly treats food as art, Little Lemon is it. From the warm, welcoming environment to the exquisite dishes, everything was perfect.  ",
    image:
      "https://pbs.twimg.com/profile_images/1690745815650762752/1yA7Vg20_400x400.jpg",
    rating: 4,
  },
];

const Testimonials = () => {
  return (
    <div className="testimonial-background">
      <div className="testimonials">
        <div className="testimonials-container">
          <h1 className="testimonial-title">Testimonials</h1>
        </div>

        <div className="testimonials-list">
          {testimonials.map((testimonial) => (
            <TestimonialCard
            
              key={testimonial.id}
              author={testimonial.author}
              description={testimonial.description}
              image={testimonial.image}
              rating={testimonial.rating}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
