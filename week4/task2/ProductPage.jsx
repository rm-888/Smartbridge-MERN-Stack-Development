import { useState } from "react";

const products = [
  { id: 1, name: "Laptop", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCNq5kXr7QyNOjacpmlo4tP_ctEn7qAR86lg&s", price: "₹1,20,000", description: "These feature stunning displays, exceptional performance, and a stylish build that’s precision-crafted with premium materials. Designed for both beauty and power, XPS laptops feature groundbreaking technologies like InfinityEdge screens, advanced thermal design, and immersive entertainment options. Screen resolution up to 4K UHD+ delivers crisp images and precise text. A high-performance laptop with 16GB RAM intel core processors." },
  { id: 2, name: "Smartphone", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2LuC5pJ6iWBYiWk9QrX3Rai7s4jmhxKeyBw&s", price: "₹80,000", description: "A latest-gen smartphone with amazing camera. These have a touchscreen interface, allowing users to access a wide range of applications and services, such as web browsing, email, and social media, as well as multimedia playback and streaming. These have built-in cameras, GPS navigation, and support for various communication methods, including voice calls, text messaging, and internet-based messaging apps." },
  { id: 3, name: "Headphones", image: "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/boAt-Rockerz-450-Pro.jpg?v=1682579854", price: "₹1,500", description: "Our wireless headphones deliver comfort and crystal-clear sound with their ergonomic design and advanced technology. Bluetooth connectivity ensures hassle-free pairing, allowing you to connect effortlessly to your devices. Embrace a tangle-free lifestyle and experience the freedom that boAt wireless Bluetooth headphones bring to your daily activities. Upgrade your audio experience, cut the cords, and step into a world of wireless convenience with our headphones - the epitome of style, comfort, and superior sound quality."}
];

export default function ProductPage() {
  const [visible, setVisible] = useState(null);

  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 bg-gray-100 rounded-lg shadow-xl">
      <h1 className="text-4xl font-bold text-center mb-6 text-gray-800">Our Products</h1>
      <div className="space-y-6">
        {products.map((product) => (
          <div 
            key={product.id} 
            className="p-6 bg-white rounded-lg shadow-lg border border-gray-200 transition-transform transform hover:scale-105 flex flex-col items-center text-center">
            <img src={product.image} alt={product.name} className="w-auto h-40 mb-4 rounded"/>
            <h2 className="text-xl font-semibold text-gray-900">{product.name}</h2>
            <p className="text-gray-600 text-lg font-medium">{product.price}</p>
            <button
              className="mt-4 px-5 py-2 bg-pink-600 text-white font-medium rounded-lg hover:bg-pink-700 transition-colors"
              onClick={() => setVisible(visible === product.id ? null : product.id)}
            >
              {visible === product.id ? "Hide Details" : "More Details"}
            </button>
            {visible === product.id && (
              <p className="mt-4 text-gray-700 text-sm bg-gray-50 p-4 rounded-lg">
                {product.description}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
