import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import Lottie from 'lottie-react';
import { Search, Filter, Star, Download, Users, Zap, Shield, Globe, ArrowRight, Github as GitHub, Twitter, Linkedin, Mail, ChevronRight, Play, Code, Share2, Award } from 'lucide-react';

// Placeholder for Lottie animation - will be replaced when user provides ml-animation.json
const placeholderAnimation = {
  v: "5.5.2",
  fr: 25,
  ip: 0,
  op: 75,
  w: 400,
  h: 400,
  nm: "ML Animation",
  ddd: 0,
  assets: [],
  layers: [
    {
      ddd: 0,
      ind: 1,
      ty: 4,
      nm: "Circle",
      sr: 1,
      ks: {
        o: { a: 0, k: 100 },
        r: { a: 1, k: [{ i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 0, s: [0] }, { t: 74, s: [360] }] },
        p: { a: 0, k: [200, 200, 0] },
        a: { a: 0, k: [0, 0, 0] },
        s: { a: 0, k: [100, 100, 100] }
      },
      ao: 0,
      shapes: [
        {
          ty: "gr",
          it: [
            {
              d: 1,
              ty: "el",
              s: { a: 0, k: [100, 100] },
              p: { a: 0, k: [0, 0] }
            },
            {
              ty: "fl",
              c: { a: 0, k: [0.2, 0.4, 0.8, 1] }
            }
          ]
        }
      ],
      ip: 0,
      op: 75,
      st: 0
    }
  ]
};

const LandingPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [animationData, setAnimationData] = useState(placeholderAnimation);

  // Load animation data if available
  useEffect(() => {
    const loadAnimation = async () => {
      try {
        const response = await fetch('/ml-animation.json');
        if (response.ok) {
          const data = await response.json();
          setAnimationData(data);
        }
      } catch (error) {
        console.log('Using placeholder animation');
      }
    };
    loadAnimation();
  }, []);

  const featuredModels = [
    {
      id: 1,
      name: 'TinyBERT',
      description: 'Compact language model for text classification',
      author: 'Google Research',
      downloads: '12.5k',
      rating: 4.8,
      size: '4.2MB',
      tags: ['NLP', 'Classification', 'BERT']
    },
    {
      id: 2,
      name: 'MobileNetV3',
      description: 'Efficient image classification for mobile devices',
      author: 'TensorFlow',
      downloads: '25.3k',
      rating: 4.9,
      size: '2.1MB',
      tags: ['Vision', 'Mobile', 'Classification']
    },
    {
      id: 3,
      name: 'DistilGPT-2',
      description: 'Lightweight text generation model',
      author: 'Hugging Face',
      downloads: '8.7k',
      rating: 4.6,
      size: '6.8MB',
      tags: ['NLP', 'Generation', 'GPT']
    },
  ];

  const features = [
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Deploy tiny ML models with minimal latency and maximum performance.',
    },
    {
      icon: Shield,
      title: 'Secure & Reliable',
      description: 'Enterprise-grade security with 99.9% uptime guarantee.',
    },
    {
      icon: Globe,
      title: 'Global CDN',
      description: 'Worldwide distribution for low-latency access anywhere.',
    },
    {
      icon: Users,
      title: 'Community Driven',
      description: 'Collaborative platform with thousands of ML practitioners.',
    },
  ];

  const steps = [
    {
      icon: Search,
      title: 'Discover',
      description: 'Browse our extensive library of tiny ML models'
    },
    {
      icon: Code,
      title: 'Integrate',
      description: 'Simple APIs and SDKs for quick integration'
    },
    {
      icon: Play,
      title: 'Deploy',
      description: 'Deploy to edge devices or cloud infrastructure'
    },
    {
      icon: Share2,
      title: 'Share',
      description: 'Contribute your own models to the community'
    },
  ];

  // Animation controls
  const controls = useAnimation();
  const featuresRef = useRef(null);
  const stepsRef = useRef(null);
  const communityRef = useRef(null);
  
  const featuresInView = useInView(featuresRef, { once: true });
  const stepsInView = useInView(stepsRef, { once: true });
  const communityInView = useInView(communityRef, { once: true });

  useEffect(() => {
    if (featuresInView) {
      controls.start('visible');
    }
  }, [featuresInView, controls]);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const stepVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <motion.h1 
                  className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.8 }}
                >
                  MLShelf –{' '}
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Your Tiny ML Model Hub
                  </span>
                </motion.h1>
                <motion.p 
                  className="text-xl text-gray-600 leading-relaxed max-w-lg"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                >
                  Discover, share, and deploy lightweight machine learning models optimized for edge devices and production environments.
                </motion.p>
              </div>

              <motion.div 
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                <motion.a
                  href="/register"
                  className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get Started
                  <ArrowRight className="ml-2 w-5 h-5" />
                </motion.a>
                <motion.a
                  href="/explore"
                  className="inline-flex items-center px-8 py-4 border-2 border-gray-300 text-gray-700 font-semibold rounded-lg hover:border-blue-600 hover:text-blue-600 transition-colors"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Explore Models
                  <Search className="ml-2 w-5 h-5" />
                </motion.a>
              </motion.div>
            </motion.div>

            {/* Right Side - Lottie Animation */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex justify-center"
            >
              <div className="w-96 h-96 bg-gradient-to-br from-blue-100 to-purple-100 rounded-3xl flex items-center justify-center shadow-2xl">
                <Lottie
                  animationData={animationData}
                  loop={true}
                  className="w-80 h-80"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Search & Filter Bar */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl shadow-lg p-6"
          >
            <div className="flex flex-col lg:flex-row gap-4 items-center">
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search models, authors, or tags..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div className="flex items-center space-x-4">
                <Filter className="text-gray-400 w-5 h-5" />
                <select
                  value={selectedFilter}
                  onChange={(e) => setSelectedFilter(e.target.value)}
                  className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="all">All Categories</option>
                  <option value="nlp">NLP</option>
                  <option value="vision">Computer Vision</option>
                  <option value="audio">Audio</option>
                  <option value="mobile">Mobile</option>
                </select>
              </div>
            </div>
          </motion.div>

          {/* Featured Models Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Featured Models</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredModels.map((model, index) => (
                <motion.div
                  key={model.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6"
                >
                  <div className="space-y-4">
                    <div className="flex justify-between items-start">
                      <h3 className="text-xl font-semibold text-gray-900">{model.name}</h3>
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-sm text-gray-600">{model.rating}</span>
                      </div>
                    </div>
                    <p className="text-gray-600">{model.description}</p>
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <span>by {model.author}</span>
                      <span>{model.size}</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {model.tags.map((tag) => (
                        <span key={tag} className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center justify-between pt-4">
                      <div className="flex items-center space-x-1 text-gray-600">
                        <Download className="w-4 h-4" />
                        <span className="text-sm">{model.downloads}</span>
                      </div>
                      <motion.button
                        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        View Model
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why MLShelf Section */}
      <section ref={featuresRef} className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why MLShelf?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Built by ML engineers, for ML engineers. MLShelf provides the tools and community you need to accelerate your tiny ML projects.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={controls}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white rounded-xl shadow-lg p-8 text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* How It Works Section */}
      <section ref={stepsRef} className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From discovery to deployment in four simple steps
            </p>
          </motion.div>

          <div className="space-y-12">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                variants={stepVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className={`flex flex-col lg:flex-row items-center gap-12 ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className="flex-1 space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                      {index + 1}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">{step.title}</h3>
                  </div>
                  <p className="text-lg text-gray-600 leading-relaxed max-w-lg">
                    {step.description}
                  </p>
                  <motion.button
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                    whileHover={{ x: 5 }}
                  >
                    Learn more <ChevronRight className="ml-1 w-4 h-4" />
                  </motion.button>
                </div>
                <div className="flex-1 flex justify-center">
                  <div className="w-64 h-64 bg-gradient-to-br from-blue-100 to-purple-100 rounded-3xl flex items-center justify-center shadow-xl">
                    <step.icon className="w-24 h-24 text-blue-600" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section ref={communityRef} className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto">
              <Users className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-4xl font-bold text-gray-900">Join Our Growing Community</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Connect with thousands of ML practitioners, share your models, and collaborate on the future of tiny machine learning.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">10k+</div>
                <div className="text-gray-600">Active Users</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600">2.5k+</div>
                <div className="text-gray-600">Models Shared</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600">50M+</div>
                <div className="text-gray-600">Downloads</div>
              </div>
            </div>
            <motion.button
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Join the Community
              <Users className="ml-2 w-5 h-5" />
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-600 to-purple-700">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <h2 className="text-5xl font-bold text-white leading-tight">
              Start sharing your tiny ML models today
            </h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Join thousands of developers building the future of edge AI. Deploy, share, and discover the next generation of ML models.
            </p>
            <motion.a
              href="/register"
              className="inline-flex items-center px-12 py-4 bg-white text-blue-600 font-bold rounded-lg hover:bg-gray-50 transition-colors text-lg shadow-xl"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Sign Up Free
              <Award className="ml-2 w-6 h-6" />
            </motion.a>
            <p className="text-sm text-blue-200">
              Free forever • No credit card required • Get started in 30 seconds
            </p>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Logo & Description */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">ML</span>
                </div>
                <span className="text-xl font-bold">MLShelf</span>
              </div>
              <p className="text-gray-400">
                The leading platform for tiny ML model discovery and deployment.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Product</h3>
              <div className="space-y-2">
                <a href="/explore" className="block text-gray-400 hover:text-white transition-colors">Explore Models</a>
                <a href="/pricing" className="block text-gray-400 hover:text-white transition-colors">Pricing</a>
                <a href="/docs" className="block text-gray-400 hover:text-white transition-colors">Documentation</a>
                <a href="/api" className="block text-gray-400 hover:text-white transition-colors">API</a>
              </div>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <div className="space-y-2">
                <a href="/about" className="block text-gray-400 hover:text-white transition-colors">About</a>
                <a href="/contact" className="block text-gray-400 hover:text-white transition-colors">Contact</a>
                <a href="/blog" className="block text-gray-400 hover:text-white transition-colors">Blog</a>
                <a href="/careers" className="block text-gray-400 hover:text-white transition-colors">Careers</a>
              </div>
            </div>

            {/* Social & Contact */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Connect</h3>
              <div className="flex space-x-4">
                <motion.a
                  href="https://github.com"
                  className="text-gray-400 hover:text-white transition-colors"
                  whileHover={{ scale: 1.1, y: -2 }}
                >
                  <GitHub className="w-6 h-6" />
                </motion.a>
                <motion.a
                  href="https://twitter.com"
                  className="text-gray-400 hover:text-white transition-colors"
                  whileHover={{ scale: 1.1, y: -2 }}
                >
                  <Twitter className="w-6 h-6" />
                </motion.a>
                <motion.a
                  href="https://linkedin.com"
                  className="text-gray-400 hover:text-white transition-colors"
                  whileHover={{ scale: 1.1, y: -2 }}
                >
                  <Linkedin className="w-6 h-6" />
                </motion.a>
                <motion.a
                  href="mailto:hello@mlshelf.com"
                  className="text-gray-400 hover:text-white transition-colors"
                  whileHover={{ scale: 1.1, y: -2 }}
                >
                  <Mail className="w-6 h-6" />
                </motion.a>
              </div>
              <div className="mt-4 text-sm text-gray-400">
                <p>hello@mlshelf.com</p>
                <p>San Francisco, CA</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2025 MLShelf. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;