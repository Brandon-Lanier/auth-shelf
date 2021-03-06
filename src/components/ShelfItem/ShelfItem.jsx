import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import DoneIcon from '@mui/icons-material/Done';
import EditIcon from '@mui/icons-material/Edit';
import DeleteSweepIcon from '@mui/icons-material/DeleteSweep';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useSelector, useDispatch } from 'react-redux';


function ShelfItem({ item }) {
  const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  }));

  const dispatch = useDispatch();

  const user = useSelector((store) => store.user);

  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  
  const handleDelete = () => {
      console.log(item.id);
      if (alert('Are you sure?')) {
      dispatch({type: 'DELETE_ITEM', payload: item.id})
  }
}

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component='img'
        height='194'
        image={item.image_url}
        alt={'Whoops it looks like there was an error'}
      />
      <CardContent>
        <Typography variant='body2' color='text.secondary'>
          {item.description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        {/* <IconButton aria-label="Edit">
          <EditIcon />
        </IconButton> */}
        {/* <IconButton aria-label="Complete Task">
          <DoneIcon />
        </IconButton> */}
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label='show more'
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout='auto' unmountOnExit>
        <CardContent>
          <Typography paragraph>Consider the following:</Typography>
          <Typography paragraph>
            <i>{item.kanyeQuote}</i>
          </Typography>
          {item.username ? (
            <Typography align='right'>- {item.username}</Typography>
          ) : (
            <Typography align='right'>- Yeezy</Typography>
          )}
          {user.id === item.user_id &&
            <DeleteSweepIcon onClick={handleDelete} />
          }
        </CardContent>
      </Collapse>
    </Card>
  );
}
export default ShelfItem;
