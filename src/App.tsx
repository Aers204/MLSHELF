import React, { useState, useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { Search, Filter, ChevronDown, Sparkles, Zap, Globe, Users } from 'lucide-react';

const FloatingCard = ({ 
  seed, 
  delay = 0, 
  className = "",
  initialX = 0,
  initialY = 0 
}: {
  seed: string;
  delay?: number;
  className?: string;
  initialX?: number;
  initialY?: number;
}) => {
  const x = useMotionValue(initialX);
  const y = useMotionValue(initialY);
  const springX = useSpring(x, { stiffness: 50, damping: 20 });
  const springY = useSpring(y, { stiffness: 50, damping: 20 });

  return (
    <motion.div
      className={`absolute glass rounded-2xl p-4 shadow-2xl ${className}`}
      style={{ x: springX, y: springY }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ 
        opacity: 1, 
        scale: 1,
        rotate: [0, 5, -5, 0]
      }}
      transition={{ 
        delay,
        duration: 0.8,
        rotate: {
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }
      }}
      whileHover={{ scale: 1.1, rotate: 0 }}
    >
      <div className="flex items-center space-x-3">
        <img 
          src={`https://picsum.photos/seed/${seed}/80/80`}
          alt="Tiny ML Model"
          className="w-12 h-12 rounded-xl object-cover"
        />
        <div>
          <div className="text-white font-semibold text-sm">TinyModel</div>
          <div className="text-white/70 text-xs">{seed.toUpperCase()}</div>
        </div>
      </div>
    </motion.div>
  );
};

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const categories = ['All', 'Image', 'Text', 'Audio', '3D'];

  const floatingCards = [
    { seed: 'bert', initialX: 100, initialY: 200, delay: 0 },
    { seed: 'resnet', initialX: -150, initialY: 300, delay: 0.5 },
    { seed: 'gpt', initialX: 200, initialY: 100, delay: 1 },
    { seed: 'yolo', initialX: -100, initialY: 400, delay: 1.5 },
    { seed: 'vit', initialX: 300, initialY: 250, delay: 2 },
    { seed: 'wav2vec', initialX: -200, initialY: 150, delay: 2.5 },
  ];

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePosition({
          x: (e.clientX - rect.left - rect.width / 2) * 0.1,
          y: (e.clientY - rect.top - rect.height / 2) * 0.1,
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden" ref={containerRef}>
      {/* Animated Gradient Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 animate-gradient bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900" />
        <div className="absolute inset-0 animate-mesh">
          <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-r from-pink-500/30 to-violet-500/30 rounded-full blur-3xl" />
          <div className="absolute top-1/2 right-0 w-96 h-96 bg-gradient-to-r from-cyan-500/30 to-blue-500/30 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-gradient-to-r from-emerald-500/30 to-teal-500/30 rounded-full blur-3xl" />
        </div>
      </div>

      {/* Floating Model Cards */}
      <div className="fixed inset-0 z-10 pointer-events-none">
        {floatingCards.map((card, index) => (
          <FloatingCard
            key={card.seed}
            seed={card.seed}
            delay={card.delay}
            initialX={card.initialX + mousePosition.x}
            initialY={card.initialY + mousePosition.y}
            className={`animate-float-delay-${index + 1}`}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-20">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            {/* Glassmorphic Hero Panel */}
            <motion.div
              className="glass-strong rounded-3xl p-8 sm:p-12 lg:p-16 shadow-2xl"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {/* Logo/Icon */}
              <motion.div
                className="flex justify-center mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-2xl flex items-center justify-center shadow-lg">
                  <Sparkles className="w-8 h-8 text-white" />
                </div>
              </motion.div>

              {/* Main Headline */}
              <motion.h1
                className="text-4xl sm:text-5xl lg:text-7xl font-black text-white mb-6 leading-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  MLShelf
                </span>
                <br />
                <span className="text-white/90 text-3xl sm:text-4xl lg:text-5xl font-bold">
                  Your Tiny ML Model Hub
                </span>
              </motion.h1>

              {/* Subheading */}
              <motion.p
                className="text-xl sm:text-2xl text-white/80 mb-12 max-w-2xl mx-auto leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                Discover, deploy, and share lightweight machine learning models optimized for edge devices and production environments.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                className="flex flex-col sm:flex-row gap-6 justify-center items-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1 }}
              >
                <motion.a
                  href="/register"
                  className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-bold rounded-2xl shadow-2xl overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="relative flex items-center space-x-2">
                    <Zap className="w-5 h-5" />
                    <span>Get Started</span>
                  </span>
                </motion.a>

                <motion.a
                  href="/explore"
                  className="group px-8 py-4 glass border-2 border-white/30 text-white font-bold rounded-2xl shadow-xl hover:border-white/50 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="flex items-center space-x-2">
                    <Globe className="w-5 h-5" />
                    <span>Explore Models</span>
                  </span>
                </motion.a>
              </motion.div>

              {/* Stats */}
              <motion.div
                className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-white/20"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 }}
              >
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-white">10k+</div>
                  <div className="text-white/70 text-sm">Models</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-white">50k+</div>
                  <div className="text-white/70 text-sm">Developers</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-white">1M+</div>
                  <div className="text-white/70 text-sm">Downloads</div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </section>

        {/* Search + Filter Bar */}
        <motion.section
          className="relative z-30 -mt-20 px-4 sm:px-6 lg:px-8 pb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="max-w-6xl mx-auto">
            <motion.div
              className="glass-strong rounded-2xl p-6 shadow-2xl"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex flex-col lg:flex-row gap-4 items-center">
                {/* Search Input */}
                <div className="flex-1 relative w-full">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/60 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search models or demos..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent backdrop-blur-sm"
                  />
                </div>

                {/* Category Filter */}
                <div className="relative w-full lg:w-auto">
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="w-full lg:w-48 px-4 py-4 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent backdrop-blur-sm appearance-none cursor-pointer"
                  >
                    {categories.map((category) => (
                      <option key={category} value={category} className="bg-gray-800 text-white">
                        {category}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white/60 w-5 h-5 pointer-events-none" />
                </div>

                {/* Filter Button */}
                <motion.button
                  className="px-6 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Filter className="w-5 h-5" />
                </motion.button>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Community CTA Section */}
        <motion.section
          className="py-20 px-4 sm:px-6 lg:px-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              className="glass-strong rounded-3xl p-12 shadow-2xl"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="w-20 h-20 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-8"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <Users className="w-10 h-10 text-white" />
              </motion.div>

              <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
                Join Our Growing{' '}
                <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  MLShelf Community
                </span>
              </h2>

              <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
                Connect with thousands of ML practitioners, share your models, and collaborate on the future of tiny machine learning.
              </p>

              <motion.button
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-bold rounded-2xl shadow-2xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Join the Community
              </motion.button>
            </motion.div>
          </div>
        </motion.section>

        {/* Final CTA Section */}
        <motion.section
          className="py-20 px-4 sm:px-6 lg:px-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="max-w-6xl mx-auto text-center">
            <motion.div
              className="glass-strong rounded-3xl p-16 shadow-2xl relative overflow-hidden"
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.3 }}
            >
              {/* Background decoration */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10" />
              
              <div className="relative z-10">
                <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white mb-8 leading-tight">
                  Start sharing your{' '}
                  <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                    tiny ML models
                  </span>{' '}
                  today
                </h2>

                <p className="text-xl sm:text-2xl text-white/80 mb-12 max-w-3xl mx-auto">
                  Join thousands of developers building the future of edge AI. Deploy, share, and discover the next generation of ML models.
                </p>

                <motion.a
                  href="/register"
                  className="inline-flex items-center px-12 py-6 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-bold text-xl rounded-2xl shadow-2xl"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Sparkles className="w-6 h-6 mr-3" />
                  Sign Up Free
                </motion.a>

                <p className="text-white/60 mt-6 text-sm">
                  Free forever • No credit card required • Get started in 30 seconds
                </p>
              </div>
            </motion.div>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default App;