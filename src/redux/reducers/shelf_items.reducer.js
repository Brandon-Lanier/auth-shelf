// import { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';

const dummyData = [
  { id: 1, description: 'check it out, its a fish', image_url: 'https://mishpacha.com/wp-content/uploads/2020/12/lifeR-1.jpg', user_id: 1 },
  { id: 2, description: 'my favorite kind of scooter', image_url: 'https://thumbs.dreamstime.com/b/cool-man-scooter-handsome-elegant-suit-sunglasses-sitting-backwards-red-blue-background-active-men-s-lifestyle-210941379.jpg', user_id: 1 },
  { id: 3, description: 'man the 90\'s were a different time', image_url: 'https://www.hellowonderful.co/wp-content/uploads/2021/06/2021-06-22_0001.jpg', user_id: 1 },
  { id: 3, description: 'man the 90\'s were a different time', image_url: 'https://www.hellowonderful.co/wp-content/uploads/2021/06/2021-06-22_0001.jpg', user_id: 1 },
  { id: 3, description: 'man the 90\'s were a different time', image_url: 'https://www.hellowonderful.co/wp-content/uploads/2021/06/2021-06-22_0001.jpg', user_id: 1 },
  { id: 3, description: 'man the 90\'s were a different time', image_url: 'https://www.hellowonderful.co/wp-content/uploads/2021/06/2021-06-22_0001.jpg', user_id: 1 },
  { id: 3, description: 'man the 90\'s were a different time', image_url: 'https://www.hellowonderful.co/wp-content/uploads/2021/06/2021-06-22_0001.jpg', user_id: 1 },
  { id: 3, description: 'man the 90\'s were a different time', image_url: 'https://www.hellowonderful.co/wp-content/uploads/2021/06/2021-06-22_0001.jpg', user_id: 1 },
  { id: 3, description: 'man the 90\'s were a different time', image_url: 'https://www.hellowonderful.co/wp-content/uploads/2021/06/2021-06-22_0001.jpg', user_id: 1 },
]

const shelf_items = (state = [], action) => {

  if (action.type === 'SET_ITEMS') {
    return action.payload;
  }
  // If action.type is anything else, it'll just return the last value of state.
  return state;
}


export default shelf_items;