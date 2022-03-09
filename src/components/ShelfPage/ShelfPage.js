import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

// import { Card} from '@mui/material';
import { useSelector } from 'react-redux';

function ShelfPage() {

  const user = useSelector(store => store.user)
  const shelf_items = useSelector(store => store.shelf_items)

  console.log('this is the cool whacky info we gots', user, shelf_items)

  return (
    <>
      <div className="container">
        <h2>Shelf</h2>
        <p>All of the available iboooptems can be seen here.</p>
      </div>

      <div className="shelf-items">
        {shelf_items.map(item => (
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              height="140"
              image={item.image_url}
              alt={item.description}
            />
            <CardContent>
              {/* <Typography gutterBottom variant="h5" component="div">
              Item
            </Typography> */}
              <Typography variant="body2" color="text.secondary">
                {item.description}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Delete</Button>
              {/* <Button size="small">Learn More</Button> */}
            </CardActions>
          </Card>
        ))}
      </div>
    </>
  );
}

export default ShelfPage;

