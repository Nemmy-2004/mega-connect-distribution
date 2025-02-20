
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const ProductDetails = () => {
  const { categoryId } = useParams();
  const navigate = useNavigate();

  // Find the selected category
  const category = productCategories.find((cat) => cat.id === categoryId);

  if (!category) {
    return <div>Product category not found</div>;
  }

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Products
          </button>

          <div className="max-w-4xl mx-auto">
            <div className="glass-card rounded-xl overflow-hidden">
              <div className="aspect-[16/9] relative">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8">
                <h1 className="text-3xl font-bold mb-6">{category.name}</h1>
                <div className="grid gap-8 md:grid-cols-2">
                  {category.products.map((product) => (
                    <div
                      key={product.name}
                      className="glass-card rounded-lg p-6"
                    >
                      <h3 className="text-xl font-semibold mb-3">
                        {product.name}
                      </h3>
                      {product.variants ? (
                        <div>
                          <p className="text-primary/70 mb-2">Available Variants:</p>
                          <ul className="list-disc list-inside text-primary/70">
                            {product.variants.map((variant) => (
                              <li key={variant}>{variant}</li>
                            ))}
                          </ul>
                        </div>
                      ) : (
                        <p className="text-primary/70">{product.description}</p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

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
    image: "/lovable-uploads/625b7a9b-04fa-4807-9212-1a21bd79524a.png"
  }
];

export default ProductDetails;
