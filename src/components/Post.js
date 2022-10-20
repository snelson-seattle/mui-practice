import {
  Card,
  CardHeader,
  CardContent,
  CardMedia,
  CardActions,
  Avatar,
  Typography,
  IconButton,
  Checkbox
} from "@mui/material";

import { Favorite, FavoriteBorder, MoreVert, Share } from "@mui/icons-material";

const Post = ({title, date, content, imageUrl, imageDescription}) => {
  return (
    <Card sx={{margin: 3}}>
      <CardHeader avatar={<Avatar  />} action={<IconButton aria-label="settings"><MoreVert /></IconButton>} title={title} subheader={date} />
      <CardMedia component="img" height="20%" image={imageUrl} alt={imageDescription} />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
            {content}
        </Typography>
      </CardContent>
      <CardActions>
        <IconButton aria-label="like this post">
            <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{color: "red"}} />} />
        </IconButton>
        <IconButton aria-label="share">
          <Share />
        </IconButton>
      </CardActions>
    </Card>
  );
};
export default Post;
