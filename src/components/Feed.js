import { Box } from "@mui/material";
import Post from "./Post";

import bridge from "../images/bridge.jpg";
import field from "../images/field.jpg";
import building from "../images/building.jpg";
import morning from "../images/morning.jpg";
import boats from "../images/boats.jpg";

const Feed = () => {
  return (
    <Box flex={4} p={2}>
      <Post
        content={"lorem ipsum"}
        title="John Doe"
        date="October 18, 2022"
        imageUrl={bridge}
      />
      <Post
        content={"lorem ipsum"}
        title="Unknown"
        date="October 17, 2022"
        imageUrl={building}
      />
      <Post
        content={"lorem ipsum"}
        title="Scott"
        date="October 17, 2022"
        imageUrl={field}
      />
      <Post
        content={"lorem ipsum"}
        title="John Doe"
        date="October 16, 2022"
        imageUrl={morning}
      />
      <Post
        content={"lorem ipsum"}
        title="Unknown"
        date="October 14, 2022"
        imageUrl={boats}
      />
    </Box>
  );
};
export default Feed;
