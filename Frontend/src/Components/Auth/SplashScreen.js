import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Container } from "@mui/material";
import logo from "./CampusCartLogo.png";

const SplashScreen = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/login");
    }, 3000); 

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <Container
      maxWidth="xs"
      sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        bgcolor: "#f5f5f5",
      }}
    >
      <Box
        component="img"
        src={logo}
        alt="CampusCart Logo"
        sx={{ width: "150px" }}
      />
    </Container>
  );
};

export default SplashScreen;
