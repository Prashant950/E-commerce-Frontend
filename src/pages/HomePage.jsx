import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FiStar } from "react-icons/fi";
import Button from "../components/Common/Button";
import ProductCard from "../components/Product/ProductCard";
import PremiumStats from "../components/Common/PremiumStats";
import WhyChooseLuxury from "../components/Common/WhyChooseLuxury";
import { useTheme } from "../context/ThemeContext";

const featuredProducts = [
  {
    id: 1,
    name: "Premium Leather Watch",
    price: 24916, // INR (299.99 USD * 83)
    originalPrice: 33167,
    image:
      "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=500&h=500&fit=crop",
    category: "Accessories",
    description: "Elegant leather watch with Swiss movement",
    rating: 5,
    isNew: true,
    discount: 25,
  },
  {
    id: 2,
    name: "Silk Evening Dress",
    price: 49799, // INR (599.99 USD * 83)
    originalPrice: 66399,
    image:
      "https://images.unsplash.com/photo-1595777707802-9b80f0afd1c1?w=500&h=500&fit=crop",
    category: "Fashion",
    description: "Luxurious silk evening dress",
    rating: 5,
    discount: 25,
  },
  {
    id: 3,
    name: "Diamond Necklace",
    price: 107917, // INR (1299.99 USD * 83)
    image:
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=500&h=500&fit=crop",
    category: "Jewelry",
    description: "Exquisite diamond necklace",
    rating: 5,
    isNew: true,
  },
  {
    id: 4,
    name: "Premium Perfume",
    price: 16577, // INR (199.99 USD * 83)
    originalPrice: 20709,
    image:
      "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=500&h=500&fit=crop",
    category: "Fragrance",
    description: "Luxury fragrance collection",
    rating: 4,
    discount: 20,
  },
];

const categories = [
  {
    id: 1,
    name: "Jewelry",
    image:
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=300&h=300&fit=crop",
    count: 24,
  },
  {
    id: 2,
    name: "Fashion",
    image:
      "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=300&h=300&fit=crop",
    count: 18,
  },
  {
    id: 3,
    name: "Accessories",
    image:
      "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=300&h=300&fit=crop",
    count: 32,
  },
  {
    id: 4,
    name: "Fragrance",
    image:
      "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=300&h=300&fit=crop",
    count: 16,
  },
];

const testimonials = [
  {
    id: 1,
    name: "Mr. Rohit Kapoor",
    role: "Fashion Designer",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
    text: "Luxury has exceeded all my expectations. The quality is impeccable and the customer service is outstanding.",
    rating: 5,
  },
  {
    id: 2,
    name: "Mr. Vikram Singh",
    role: "Business Executive",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
    text: "I have been a loyal customer for 3 years. Every product is worth every penny. Highly recommended!",
    rating: 5,
  },
  {
    id: 3,
    name: "Ms. Anjali Mehta",
    role: "Luxury Blogger",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
    text: "The attention to detail and premium quality of Luxury products is unmatched in the market.",
    rating: 5,
  },
];

export default function HomePage() {
  const { isDark } = useTheme();

  return (
    <div className={isDark ? "bg-luxury-900" : "bg-white"}>
      {/* Hero Section */}
      <section
        className={`relative text-white py-37 h-[500px] md:h-[650px] lg:h-[650px] overflow-hidden bg-cover bg-center bg-no-repeat`}
        style={{
          backgroundImage:
            //   "url('https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1920&q=80')"
            "url('https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=1920&q=80')",
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Existing Gradient Blur Effects */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gold-400 rounded-full mix-blend-multiply filter blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-luxury-600 rounded-full mix-blend-multiply filter blur-3xl"></div>
        </div>

        <div className="container-custom text-center relative z-10 flex flex-col items-center justify-center h-full px-4">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold mb-4 md:mb-6"
          >
            Luxury Redefined
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gold-100 mb-6 md:mb-10 font-light"
          >
            Discover the finest collection of handcrafted luxury products
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link to="/collections">
              <Button variant="primary" size="lg">
                Shop Collection
              </Button>
            </Link>

            <a href="#featured">
              <Button
                variant="outline"
                size="lg"
                className="!border-white !text-white hover:!bg-white hover:!text-luxury-900 transition-colors"
              >
                Learn More
              </Button>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Categories Section */}
      <section
        className={`${isDark ? "bg-luxury-900" : "bg-white"} py-12 md:py-20`}
      >
        <div className="container-custom">
          <div className="text-center mb-12 md:mb-16 px-4">
            <h2
              className={`text-3xl md:text-4xl font-serif font-bold mb-3 md:mb-4 ${isDark ? "text-gold-300" : "text-luxury-900"}`}
            >
              Shop by Category
            </h2>
            <p
              className={`text-base md:text-lg ${isDark ? "text-luxury-300" : "text-luxury-600"}`}
            >
              Explore our curated collections
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {categories.map((category, idx) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-xl mb-4 h-48 md:h-64">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                    <Button
                      variant="primary"
                      size="md"
                      className="opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      Explore
                    </Button>
                  </div>
                </div>
                <h3
                  className={`text-lg md:text-xl font-serif text-center ${isDark ? "text-white" : "text-luxury-900"}`}
                >
                  {category.name}
                </h3>
                <p
                  className={`text-center text-xs md:text-sm ${isDark ? "text-luxury-400" : "text-luxury-600"}`}
                >
                  {category.count} products
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section
        id="featured"
        className={`${isDark ? "bg-luxury-800" : "bg-luxury-50"} py-12 md:py-20`}
      >
        <div className="container-custom">
          <div className="text-center mb-12 md:mb-16 px-4">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className={`font-semibold text-xs md:text-sm tracking-widest uppercase ${isDark ? "text-gold-400" : "text-gold-600"}`}
            >
              Exclusive Selection
            </motion.span>
            <h2
              className={`text-3xl md:text-4xl font-serif font-bold mb-2 md:mb-4 mt-2 ${isDark ? "text-gold-300" : "text-luxury-900"}`}
            >
              Featured Products
            </h2>
            <p
              className={`text-base md:text-lg ${isDark ? "text-luxury-300" : "text-luxury-600"}`}
            >
              Handpicked items from our most prestigious collection
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-8 md:mb-12">
            {featuredProducts.map((product, idx) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Link to="/collections">
              <Button variant="outline" size="lg">
                View All Products
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Luxury Component */}
      <WhyChooseLuxury />

      {/* Testimonials */}
      <section
        className={`${isDark ? "bg-luxury-800" : "bg-luxury-900"} text-white py-20`}
      >
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold mb-4">
              Customer Testimonials
            </h2>
            <p className={isDark ? "text-luxury-300" : "text-luxury-200"}>
              Join thousands of satisfied luxury enthusiasts
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className={`p-8 rounded-lg ${isDark ? "bg-luxury-700" : "bg-luxury-800"}`}
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FiStar
                      key={i}
                      className="text-gold-400 fill-gold-400"
                      size={16}
                    />
                  ))}
                </div>
                <p className="text-luxury-100 mb-6 italic">
                  \"{testimonial.text}\"
                </p>
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold text-white">
                      {testimonial.name}
                    </p>
                    <p className="text-luxury-300 text-sm">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Premium Stats Section */}
      <PremiumStats />
    </div>
  );
}
