import React from 'react';
import './NavigationItems.css'
import DropdownItem from '../NavigationItems/DropdownItem/DropdownItem';

const dropdownItems = [
    {   name: 'Cars' , 
        items: [ 
                    { name: 'Create Car', link: '/create-car' }, 
                    { name: 'Best Deals', link: '/'}, 
                    { name: 'New Cars', link: '/'  }
                ] 
    }
];
const navigationItems = () => (
    <div className="NavigationItems">
        {dropdownItems.map(item => { return <DropdownItem 
                                                name={item.name} 
                                                items={item.items}
                                                key={item.name} /> }) }
    </div>
);

export default navigationItems;