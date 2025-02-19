
import { useState } from "react";
import { motion } from "framer-motion";

const productCategories = [
  {
    id: "biscuits",
    name: "Biscuits",
    products: [
      { name: "Pure Bliss", variants: ["Milk Cookies", "Choco Cookies"] },
      { name: "Yale Shapes", description: "Colorful biscuit assortment" },
      { name: "Waferchoc", description: "Chocolate Enrobed Wafer" },
      { name: "Mini Rolls", description: "Creamy rolled biscuits" },
      { name: "Butter Bake", description: "Rich butter cookies" }
    ],
    image: "/lovable-uploads/aa1fc87a-3b45-4ca0-9936-1ea03ae95750.png"
  },
  {
    id: "bread",
    name: "Yale Bread",
    products: [
      { name: "Yale Bread", description: "Oven fresh, Bromate Free" }
    ],
    image: "/lovable-uploads/eac305fe-4138-4bdd-9622-0b39c425645d.png"
  }
];

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  return (
    <section id="products" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary">
            Our Products
          </span>
          <h2 className="mt-6 text-3xl md:text-4xl font-bold">
            Quality Products for Every Occasion
          </h2>
          <p className="mt-4 text-primary/70">
            From daily essentials to special celebrations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {productCategories.map((category) => (
            <div
              key={category.id}
              className="glass-card rounded-xl overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="aspect-[4/3] relative overflow-hidden">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">{category.name}</h3>
                <ul className="space-y-2">
                  {category.products.map((product) => (
                    <li
                      key={product.name}
                      className="text-primary/70 flex items-center"
                    >
                      • {product.name}
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => setSelectedCategory(category)}
                  className="mt-4 w-full px-4 py-2 bg-primary/10 text-primary rounded-lg hover:bg-primary/20 transition-colors"
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block glass-card rounded-xl p-8">
            <h3 className="text-xl font-semibold mb-4">Special Events & Occasions</h3>
            <ul className="grid grid-cols-2 md:grid-cols-3 gap-4 text-primary/70">
              <li>Birthdays</li>
              <li>Thanksgivings</li>
              <li>Church Services</li>
              <li>Mosque Events</li>
              <li>Naming Ceremonies</li>
              <li>House Warming</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
