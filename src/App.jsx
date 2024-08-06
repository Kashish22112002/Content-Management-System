import React from 'react';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      <header className="bg-white shadow">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <h1 className="text-2xl font-bold">My CMS</h1>
          <nav>
            <ul className="flex space-x-4">
              <li><a href="#features" className="hover:text-indigo-600">Features</a></li>
              <li><a href="#about" className="hover:text-indigo-600">About</a></li>
              <li><a href="#contact" className="hover:text-indigo-600">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>
      <main>
        <section className="bg-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-4">Welcome to My CMS</h2>
            <p className="text-lg mb-8">A modern solution to manage your content seamlessly and efficiently.</p>
            <a href="#features" className="bg-indigo-600 text-white py-3 px-6 rounded-full hover:bg-indigo-500 transition">Learn More</a>
          </div>
        </section>
        <section id="features" className="py-20 bg-gray-100">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Features</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-semibold mb-4">User Management</h3>
                <p>Easily manage users, roles, and permissions.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-semibold mb-4">Content Editing</h3>
                <p>Rich text editing with powerful tools and customization options.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-semibold mb-4">Analytics</h3>
                <p>Get insights and analytics to improve your content strategy.</p>
              </div>
            </div>
          </div>
        </section>
        <section id="about" className="py-20 bg-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">About Us</h2>
            <p className="text-lg mb-8">We are a team of passionate developers dedicated to providing the best content management experience.</p>
            <p className="text-lg">Our mission is to simplify content management and make it accessible to everyone.</p>
          </div>
        </section>
        <section id="contact" className="py-20 bg-gray-100">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
            <p className="text-lg mb-8">Have questions? Get in touch with us!</p>
            <a href="mailto:info@mycms.com" className="bg-indigo-600 text-white py-3 px-6 rounded-full hover:bg-indigo-500 transition">Email Us</a>
          </div>
        </section>
      </main>
      <footer className="bg-white py-6">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-600">&copy; 2024 My CMS. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
