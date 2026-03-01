import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const Podcasts = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-black to-gray-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Legal Podcasts
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Stay updated with the latest legal insights, trends, and expert discussions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-orange-800 hover:bg-orange-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                Listen Now
              </button>
              <button className="border border-white text-white hover:bg-white hover:text-black px-8 py-3 rounded-lg font-semibold transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Episodes */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Episodes
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Listen to our most popular episodes featuring legal experts and industry leaders
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center">
                <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">The Future of Legal Tech</h3>
                <p className="text-gray-600 mb-4">Exploring how AI and automation are transforming the legal industry</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">45 min</span>
                  <button className="text-orange-800 font-semibold hover:text-orange-700">
                    Play Episode →
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
                <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Constitutional Law Today</h3>
                <p className="text-gray-600 mb-4">Current debates and developments in constitutional interpretation</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">52 min</span>
                  <button className="text-orange-800 font-semibold hover:text-orange-700">
                    Play Episode →
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center">
                <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">International Law Perspectives</h3>
                <p className="text-gray-600 mb-4">Global legal challenges and cross-border legal issues</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">38 min</span>
                  <button className="text-orange-800 font-semibold hover:text-orange-700">
                    Play Episode →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Podcasts;





























