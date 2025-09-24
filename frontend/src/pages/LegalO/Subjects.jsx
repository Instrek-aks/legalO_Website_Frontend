import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const Subjects = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-black to-gray-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Subjects for Tomorrow
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Explore emerging legal fields and prepare for the future of law
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-orange-800 hover:bg-orange-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                Explore Subjects
              </button>
              <button className="border border-white text-white hover:bg-white hover:text-black px-8 py-3 rounded-lg font-semibold transition-colors">
                Enroll Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Emerging Subjects */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Emerging Legal Fields
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Stay ahead of the curve with cutting-edge legal subjects and technologies
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-orange-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Cybersecurity Law</h3>
              <p className="text-gray-600 mb-4">
                Data protection, privacy regulations, and digital security legal frameworks
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• GDPR and Data Protection</li>
                <li>• Cybercrime Legislation</li>
                <li>• Digital Privacy Rights</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-blue-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">AI & Technology Law</h3>
              <p className="text-gray-600 mb-4">
                Legal implications of artificial intelligence and emerging technologies
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• AI Ethics and Regulation</li>
                <li>• Autonomous Systems Law</li>
                <li>• Technology Licensing</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-green-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Environmental Law</h3>
              <p className="text-gray-600 mb-4">
                Climate change legislation and environmental protection laws
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Climate Change Policy</li>
                <li>• Renewable Energy Law</li>
                <li>• Environmental Compliance</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-purple-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Cryptocurrency Law</h3>
              <p className="text-gray-600 mb-4">
                Blockchain technology, digital currencies, and financial regulations
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Digital Asset Regulation</li>
                <li>• Blockchain Contracts</li>
                <li>• Crypto Taxation</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="w-16 h-16 bg-red-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-red-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Health Tech Law</h3>
              <p className="text-gray-600 mb-4">
                Telemedicine, digital health, and medical technology regulations
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Telemedicine Regulations</li>
                <li>• Health Data Privacy</li>
                <li>• Medical Device Law</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="w-16 h-16 bg-yellow-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-yellow-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Gig Economy Law</h3>
              <p className="text-gray-600 mb-4">
                Employment law for the digital age and platform-based work
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Platform Worker Rights</li>
                <li>• Digital Employment</li>
                <li>• Remote Work Law</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Subjects;





























