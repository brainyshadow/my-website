import "../App.css";
import { Typography } from "@mui/material";

const date = new Date().getFullYear();
const Footer = () => {
  return (
    <>
      <div className="footer">
        <Typography
          variant="body1"
          color="white"
          sx={{
            margin: "auto",
            verticalAlign: "bottom",
          }}
        >
          Brainy Shadow | &copy; {date}
        </Typography>
      </div>
    </>
  );
};

export default Footer;
