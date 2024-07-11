import React from 'react';
import './ExploreMenu.css';

const menuItems = [
  {
    id: 1,
    image: './images/em-coffee-bourbon-img.png',
    title: 'Desserts'
  },
  {
    id: 2,
    image: './images/em-ginger-fried-img.png',
    title: 'Non-Veg Starters'
  },
  {
    id: 3,
    image: './images/em-gluten-img.png',
    title: 'Salad'
  },
  {
    id: 4,
    image: './images/em-grilled-seafood-img.png',
    title: 'Fish & Sea food'
  },
  {
    id: 5,
    image: './images/em-hyderabadi-biryani-img.png',
    title: 'Main Course'
  },
  {
    id: 6,
    image: './images/em-mushroom-noodles-img.png',
    title: 'Noodles'
  },
  {
    id: 7,
    image: './images/em-soup-img.png',
    title: 'Soups'
  },
  {
    id: 8,
    image: './images/em-veg-starters-img.png',
    title: 'Veg Starters'
  }
];

const ExploreMenu = () => (
  <div className="explore-menu-section" id="exploreMenuSection">
    <div className="explore-menu-container">
      <h1 className="menu-section-heading">Explore Menu</h1>
      <div className="menu-item-container">
        {menuItems.map(item => (
          <div className="menu-item-card" key={item.id}>
            <img className='menu-item-image' src={item.image} alt={item.title} />
            <h1 className="menu-card-title">{item.title}</h1>
            <a className="menu-item-link" href="#">View All <svg width="16" height="16" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M10.854 8.354a.5.5 0 0 0 0-.708L7.707 4.5a.5.5 0 1 0-.708.708L9.293 8 7 10.293a.5.5 0 1 0 .707.707l3.147-3.147z"/><path fill-rule="evenodd" d="M4 8a.5.5 0 0 0 .5.5h6.5a.5.5 0 0 0 0-1H4.5A.5.5 0 0 0 4 8z"/></svg></a>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default ExploreMenu;
