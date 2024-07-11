import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import WhyChooseUs from './components/WhyChooseUs';
import ExploreMenu from './components/ExploreMenu';
import HealthyFood from './components/HealthyFood';
import DeliveryPayment from './components/DeliveryPayment';
import ThankingCustomers from './components/ThankYou'
import FollowUs from './components/FollowUs';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <Banner />
      <WhyChooseUs />
      <ExploreMenu />
      <HealthyFood />
      <DeliveryPayment />
      <ThankingCustomers />
      <FollowUs />
      <Footer />
    </div>
  );
}

export default App;
