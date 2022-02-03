import {
  Card,
  Box,
  Avatar,
  Stack,
  Typography,
  IconButton,
  Divider,
  Chip,
  Switch,
} from "@mui/material";
import { grey } from "@mui/material/colors";


function MyCard() {
  return (
    <Card>
      <Box sx={{ p: 2, display: "flex" }}>
        <Stack spacing={0.5}>
          <Typography fontWeight={700}>Project 1</Typography>
          <Typography variant="body2" color="text.secondary"></Typography>
        </Stack>
        <Avatar src="youtube.png" style={{margin: "0rem 0rem 0rem 60%"}}/>
      </Box>
      <Divider />
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        sx={{ px: 2, py: 1, bgcolor: "background.default" }}
      >
        <Chip label="primary" color="primary" />
        <Switch />
      </Stack>
    </Card>
  );
}

export default MyCard;
