import * as React from 'react';
import ShelfItem from '../ShelfItem/ShelfItem';

import { styled } from '@mui/material/styles';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Masonry from '@mui/lab/Masonry';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from '@mui/material';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';


// import { Card} from '@mui/material';
import { useSelector } from 'react-redux';

function ShelfPage() {


  const heights = [150, 30, 90, 70, 90, 100, 150, 30, 50, 80];

  const StyledAccordion = styled(Accordion)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    color: theme.palette.text.secondary,
  }));


  const shelf_items = useSelector(store => store.shelf_items)



  console.log('this is the cool whacky info we gots', shelf_items)

  return (
    <>
      <div className="container">
        <h2>Shelf</h2>
        <p>All of the available iboooptems can be seen here.</p>
      </div>

      <div className="shelf-items">

        <Box sx={{ width: 4/5, minHeight: 377 }}>
          <Masonry columns={[1,2,3,4]} spacing={4}>

            {shelf_items.map((item, i) => (
              <div key={i}>
                <ShelfItem
                  key={i}
                  item={item} />
              </div>
            ))}

          </Masonry>
        </Box>
      </div>
    </>
  );
}

export default ShelfPage;

