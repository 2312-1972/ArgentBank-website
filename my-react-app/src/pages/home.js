import React from "react";
//import { Link } from "react-router-dom";
import Header from '../components/header';
import Footer from '../components/footer';
import Hero from '../components/Hero';
import Features from '../components/Features';
import '../main.css';

const Home = () => {
  return (
    <div >
    <Header />
    <main>
      <Hero />
      <Features />
    </main>
    <Footer />
  </div>
  );
};

export default Home;
