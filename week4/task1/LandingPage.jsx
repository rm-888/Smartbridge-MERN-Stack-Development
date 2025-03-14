import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const products = [
  { id: 1, name: "Bluetooth Mouse", price: "₹2000", image: "https://m.media-amazon.com/images/I/617qk0IEXaL.jpg"},
  { id: 2, name: "Air Dopes", price: "₹2500", image: "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/30071378/2024/7/18/fd0cec2c-e89a-46c1-8a02-aace5196ee641721287623297-boAt-Airdopes-280-ANC-Wireless-Earbuds-8211721287622760-1.jpg"},
  { id: 3, name: "Smart Watch", price: "₹3000", image: "https://m.media-amazon.com/images/I/51rW3mp1PoL.jpg"}
];

const Hero = () => {
  return (
    <section id="home" className="text-center py-20 bg-pink-500 text-white">
      <h2 className="text-4xl font-bold">Welcome to E-Store</h2>
      <p className="mt-4 text-lg">Find the best products with the best deals!</p>
    </section>
  );
};

const ProductSection = () => {
  return (
    <section id="products" className="py-10 px-4">
      <h2 className="text-3xl font-bold text-center mb-6">Our Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {products.map((product) => (
          <div key={product.id} className="bg-white p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 flex flex-col items-center text-center">
            <img src={product.image} alt={product.name} className="w-auto h-40 mb-4 rounded" />
            <h3 className="text-xl font-bold">{product.name}</h3>
            <p className="text-lg text-gray-700">{product.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

const Navbar = () => {
  return (
    <nav className="bg-gray-700 text-white p-4 flex justify-between items-center fixed top-0 w-full z-50">
      <h1 className="text-xl text-pink-500 font-bold">E-Store</h1>
      <div className="flex space-x-4">
        <a href="#home" className="hover:underline hover:text-pink-500">Home</a>
        <a href="#products" className="hover:underline hover:text-pink-500">Products</a>
        <a href="#contact" className="hover:underline hover:text-pink-500">Contact</a>
      </div>
    </nav>
  );
};

const Footer = () => {
  return (
    <footer id="contact" className="bg-gray-700 text-white text-center p-6">
      <div className="flex justify-center space-x-4 text-xl">
        <a href="#" className="hover:text-pink-500"><FaFacebook /></a>
        <a href="#" className="hover:text-pink-500"><FaTwitter /></a>
        <a href="#" className="hover:text-pink-500"><FaInstagram /></a>
      </div>
      <p className="mt-4">&copy; 2025 Brand. All rights reserved.</p>
    </footer>
  );
};

const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <ProductSection />
      <Footer />
    </div>
  );
};

export default LandingPage;
