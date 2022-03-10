import * as React from 'react';
import ShelfItem from '../ShelfItem/ShelfItem';

// import { Card} from '@mui/material';
import { useSelector } from 'react-redux';

function ShelfPage() {


  const shelf_items = useSelector(store => store.shelf_items)



  console.log('this is the cool whacky info we gots', shelf_items)

  return (
    <>
      <div className="container">
        <h2>Shelf</h2>
        <p>All of the available iboooptems can be seen here.</p>
      </div>

      <div className="shelf-items">
        {shelf_items.map((item, i) => (
          <div key={i}>
          <ShelfItem 
          key={i}
          item={item}/>
          </div>
        ))}
      </div>
    </>
  );
}

export default ShelfPage;

