import React from 'react';
import Image from 'next/image';

const Home = () => {
  return (
    <div>
      {/* Organization Logo */}
      <Image src="/logo.png" alt="Organization Logo" width={200} height={200} />

      {/* Introduction Statement */}
      <h1>Welcome to Our Product Website</h1>
      <p>
        We are dedicated to providing high-quality products that meet your needs. Explore our wide range of products and find what you&apos;re looking for. 
        With a strong commitment to customer satisfaction, we continually strive to exceed your expectations. Our mission is to make your shopping experience 
        enjoyable and stress-free. We believe that every customer deserves the best, and that&apos;s why we go the extra mile to ensure that our products are not 
        only of the highest quality but also offered at competitive prices. Your satisfaction is our top priority.
      </p>

      {/* Product Images */}
      <div>
        <Image src="/product1.jpg" alt="Product 1" width={300} height={200} />
        <Image src="/product2.png" alt="Product 2" width={300} height={200} />
      </div>

      {/* More Content */}
      <h2>Our Featured Products</h2>
      <p>
        Discover our featured products that have been handpicked for their quality and innovation. From the latest electronic gadgets to trendy fashion items, 
        our selection is curated with care to provide you with the best options in the market. We are constantly on the lookout for new and exciting products 
        to add to our collection, ensuring that you always have access to the latest trends.
      </p>

      {/* Testimonials */}
      <h2>What Our Customers Say</h2>
      <p>
        Don&apos;t just take our word for it. Read what our satisfied customers have to say about their experience with our products and services. We take pride in 
        our positive customer feedback and look forward to adding you to our list of happy customers. Our dedicated customer support team is here to assist you 
        with any questions or concerns you may have, providing you with the peace of mind that you&apos;re in good hands.
      </p>
    </div>
  );
};

export default Home;

//Hello