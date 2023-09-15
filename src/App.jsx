import {
  Typography,
  AppBar,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  CssBaseline,
  Grid,
  Toolbar ,
  Container,
} from "@mui/material";
import {CameraAlt} from "@mui/icons-material";
function App() {
  return (
  <>
  <CssBaseline/>
  <AppBar position="relative">
    <Toolbar >
      <CameraAlt/>
      <Typography variant='h6'>
        PhotoAlbum
      </Typography>
    </Toolbar >
  </AppBar>
  </>)
}

export default App;
