import React from "react";

import {
  Box,
  Typography,
  AvatarGroup,
  Avatar,
  Divider,
  ImageList,
  ImageListItem,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";

import raspberries from "../images/raspberries.jpg";
import coffee from "../images/coffee.jpg";
import salmon from "../images/salmon.jpg";
import asparagus from "../images/asparagus.jpg";
import osaka from "../images/osaka.jpg";
import skewers from "../images/skewers.jpg";
import shanghai from "../images/shanghai.jpg";
import bridge from "../images/bridge.jpg";
import santorini from "../images/santorini.jpg";
import amsterdam from "../images/amsterdam.jpg";
import paris from "../images/paris.jpg";

const Rightbar = () => {
  return (
    <Box flex={2} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
      <Box width={300}>
        <Typography variant="h6" fontWeight={100} mt={2} mb={1}>
          Online Friends
        </Typography>
        <AvatarGroup max={7}>
          <Avatar />
          <Avatar />
          <Avatar />
          <Avatar />
          <Avatar />
          <Avatar />
          <Avatar />
          <Avatar />
          <Avatar />
        </AvatarGroup>
        <Typography variant="h6" fontWeight={100} mt={2} mb={1}>
          Recent Photos
        </Typography>
        <ImageList cols={3} rowHeight={100} gap={2}>
          <ImageListItem>
            <img src={coffee} alt="" />
          </ImageListItem>
          <ImageListItem>
            <img src={raspberries} alt="" />
          </ImageListItem>
          <ImageListItem>
            <img src={salmon} alt="" />
          </ImageListItem>
          <ImageListItem>
            <img src={asparagus} alt="" />
          </ImageListItem>
          <ImageListItem>
            <img src={skewers} alt="" />
          </ImageListItem>
          <ImageListItem>
            <img src={osaka} alt="" />
          </ImageListItem>
          <ImageListItem>
            <img src={shanghai} alt="" />
          </ImageListItem>
          <ImageListItem>
            <img src={bridge} alt="" />
          </ImageListItem>
          <ImageListItem>
            <img src={santorini} alt="" />
          </ImageListItem>
          <ImageListItem>
            <img src={amsterdam} alt="" />
          </ImageListItem>
          <ImageListItem>
            <img src={paris} alt="" />
          </ImageListItem>
        </ImageList>
        <Typography variant="h6" fontWeight={100} mt={2} mb={1}>
          Recent Conversations
        </Typography>

        <List
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        >
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Brunch this weekend?"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Ali Connors
                  </Typography>
                  {" — I'll be in your neighborhood doing errands this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Summer BBQ"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    to Scott, Alex, Jennifer
                  </Typography>
                  {" — Wish I could come, but I'm out of town this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Oui Oui"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Sandra Adams
                  </Typography>
                  {" — Do you have Paris recommendations? Have you ever…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="John Doe" src="/static/images/avatar/3.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="European Travel Guide"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    John Doe
                  </Typography>
                  {" — Top 10 Must See places in Europe"}
                </React.Fragment>
              }
            />
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};
export default Rightbar;
