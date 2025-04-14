
export interface Testimonial {
  id: string;
  text: string;
  author: string;
  location: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    text: "I've never found a gloss that felt this smooth and looked this good. Zara's Gloss is my new obsession!",
    author: "Ada",
    location: "Lagos",
    rating: 5
  },
  {
    id: "2",
    text: "The lip scrub and brush combo changed my lip game! So soft and perfect under my matte lipstick.",
    author: "Chinyere",
    location: "Abuja",
    rating: 5
  },
  {
    id: "3",
    text: "Every order feels like a treat. Packaging is cute, and the glosses are top-tier. Highly recommend!",
    author: "Simi",
    location: "PH",
    rating: 5
  },
  {
    id: "4",
    text: "The overnight lip mask has completely transformed my dry lips. I wake up with the softest lips ever!",
    author: "Folake",
    location: "Ibadan",
    rating: 5
  },
  {
    id: "5",
    text: "MOOD MAGIC is truly magical! The color it turns on me is absolutely perfect. Worth every naira!",
    author: "Jessica",
    location: "Enugu",
    rating: 5
  }
];
