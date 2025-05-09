import Header from "../../Components/Shared/Header";
import {
  Box,
  Typography,
  Grid,
  Button,
  Card,
  CardContent,
  Avatar,
  Stack,
  Divider,
  TextField,
} from "@mui/material";
import { AccountCircle, Edit } from "@mui/icons-material";
import { useState, useEffect } from "react";

const UserRegister = () => {
  const [userData, setUserData] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  // Load user data from localStorage
  useEffect(() => {
    const storedUserData = JSON.parse(localStorage.getItem("user"));
    if (storedUserData) {
      setUserData(storedUserData);
      setName(storedUserData.name);
      setEmail(storedUserData.email);
    }
  }, []);

  const handleSave = () => {
    // Save the user data in localStorage
    const updatedUserData = { name, email };
    localStorage.setItem("user", JSON.stringify(updatedUserData));
    setUserData(updatedUserData); // Update local state with the new data
    setIsEditing(false); // Disable editing after saving
  };

  return (
    <>
      <Header />
      <Box sx={{ p: 4, backgroundColor: "#f7f7f7", minHeight: "100vh", mt: 6 }}>
        <Typography variant="h4" sx={{ mb: 3, fontWeight: 700, color: "#333" }}>
          Welcome, {userData ? userData.name : "User"}!
        </Typography>

        <Grid container spacing={4}>
          {/* Profile Card */}
          <Grid item xs={12} md={4}>
            <Card
              sx={{
                p: 3,
                textAlign: "center",
                boxShadow: 3,
                borderRadius: 2,
                backgroundColor: "#fff",
              }}
            >
              <Avatar
                sx={{
                  width: 100,
                  height: 100,
                  mx: "auto",
                  mb: 2,
                  backgroundColor: "#3f51b5",
                  color: "#fff",
                }}
              >
                <AccountCircle fontSize="large" />
              </Avatar>

              {isEditing ? (
                <>
                  <TextField
                    fullWidth
                    label="Name"
                    sx={{ mb: 2 }}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  <TextField
                    fullWidth
                    label="Email"
                    sx={{ mb: 2 }}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <Stack direction="row" spacing={2} justifyContent="center">
                    <Button variant="contained" onClick={handleSave}>
                      Save
                    </Button>
                    <Button
                      variant="outlined"
                      color="error"
                      onClick={() => setIsEditing(false)}
                    >
                      Cancel
                    </Button>
                  </Stack>
                </>
              ) : (
                <>
                  <Typography variant="h6" sx={{ fontWeight: 600, color: "#333" }}>
                    {userData ? userData.name : "Name not available"}
                  </Typography>
                  <Typography color="text.secondary" sx={{ fontSize: 14, mb: 2 }}>
                    {userData ? userData.email : "Email not available"}
                  </Typography>
                  <Stack direction="row" spacing={2} justifyContent="center" mt={2}>
                    <Button
                      startIcon={<Edit />}
                      variant="outlined"
                      onClick={() => setIsEditing(true)}
                    >
                      Edit Profile
                    </Button>
                  </Stack>
                </>
              )}
            </Card>
          </Grid>

          {/* Orders Card */}
          <Grid item xs={12} md={4}>
            <Card
              sx={{
                p: 3,
                boxShadow: 3,
                borderRadius: 2,
                backgroundColor: "#fff",
              }}
            >
              <CardContent>
                <Stack direction="row" alignItems="center" spacing={2}>
                  <Typography variant="h6">My Orders</Typography>
                </Stack>
                <Divider sx={{ my: 2 }} />
                <Typography variant="body2" sx={{ color: "#555" }}>
                  You have no orders yet.
                </Typography>
                <Button
                  variant="outlined"
                  fullWidth
                  sx={{
                    mt: 2,
                    backgroundColor: "#3f51b5",
                    color: "#fff",
                    "&:hover": { backgroundColor: "#303f9f" },
                  }}
                >
                  Browse Products
                </Button>
              </CardContent>
            </Card>
          </Grid>

          {/* Cart Card */}
          <Grid item xs={12} md={4}>
            <Card
              sx={{
                p: 3,
                boxShadow: 3,
                borderRadius: 2,
                backgroundColor: "#fff",
              }}
            >
              <CardContent>
                <Stack direction="row" alignItems="center" spacing={2}>
                  <Typography variant="h6">My Cart</Typography>
                </Stack>
                <Divider sx={{ my: 2 }} />
                <Typography variant="body2" sx={{ color: "#555" }}>
                  Your cart is empty.
                </Typography>
                <Button
                  variant="outlined"
                  fullWidth
                  sx={{
                    mt: 2,
                    backgroundColor: "#f50057",
                    color: "#fff",
                    "&:hover": { backgroundColor: "#c51162" },
                  }}
                >
                  Go to Shop
                </Button>
              </CardContent>
            </Card>
          </Grid>

          {/* Recommended Section */}
          <Grid item xs={12}>
            <Card
              sx={{
                p: 3,
                boxShadow: 3,
                borderRadius: 2,
                backgroundColor: "#fff",
              }}
            >
              <Typography variant="h6" sx={{ fontWeight: 600, color: "#333" }}>
                Recommended for You
              </Typography>
              <Typography variant="body2" sx={{ color: "#777", mb: 2 }}>
                Explore top-rated products and personalized suggestions based on
                your activity.
              </Typography>
              <Button
                sx={{
                  mt: 2,
                  backgroundColor: "#3f51b5",
                  color: "#fff",
                  "&:hover": { backgroundColor: "#303f9f" },
                }}
                variant="contained"
              >
                Explore Now
              </Button>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default UserRegister;
