import "../App.css";
import { Typography } from "@mui/material";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div>
          <Typography
            variant="body1"
            color="white"
            sx={{ margin:"auto",display: "inline-block", verticalAlign: "middle" }}
          >
            Brainy Shadow
          </Typography>
        </div>
      </div>
    </>
  );
};

export default Footer;
