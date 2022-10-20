import { useState } from "react";
import {
  Tooltip,
  Fab,
  Modal,
  Box,
  Typography,
  styled,
  Avatar,
  TextField,
  Stack,
  ButtonGroup,
  Button,
} from "@mui/material";
import { Add, EmojiEmotions, Image, VideoCameraBack, PersonAdd, DateRange } from "@mui/icons-material";

const StyledModal = styled(Modal)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const UserBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  marginBottom: "20px",
});

const AddPost = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = (e) => {
    setModalOpen(true);
  };

  const closeModal = (e) => {
    setModalOpen(false);
  };

  return (
    <>
      <Tooltip
        title="Add"
        sx={{
          position: "fixed",
          bottom: 20,
          left: { xs: "calc(50% - 25px)", md: 30 },
        }}
        onClick={openModal}
      >
        <Fab color="primary" aria-label="add post">
          <Add />
        </Fab>
      </Tooltip>
      <StyledModal open={modalOpen} onClose={closeModal}>
        <Box width={400} height={280} bgcolor={"background.default"} color={"text.primary"} p={3} borderRadius={5}>
          <Typography variant="h6" color="gray" textAlign="center">
            Add Post
          </Typography>
          <UserBox>
            <Avatar sx={{ width: 30, height: 30 }} />
            <Typography fontWeight={500} variant="span">
              John Doe
            </Typography>
          </UserBox>
          <TextField
            sx={{ width: "100%" }}
            multiline
            rows={3}
            placeholder="What's on your mind?"
            variant="standard"
          />
          <Stack direction="row" gap={1} mt={2} mb={3}>
            <EmojiEmotions color="primary" />
            <Image color="secondary" />
            <VideoCameraBack color="success" />
            <PersonAdd color="error" />
          </Stack>
          <ButtonGroup variant="contained" aria-label="outlined primary button group" fullWidth>
            <Button>Post</Button>
            <Button sx={{width:"100px"}}>
              <DateRange />
            </Button>
          </ButtonGroup>
        </Box>
      </StyledModal>
    </>
  );
};
export default AddPost;
