import React, { useState } from "react";
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
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  DialogActions,
} from "@mui/material";
import {
  AccountCircle,
  ShoppingCart,
  Assignment,
  Logout,
  Edit,
} from "@mui/icons-material";

const UserDashboard = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const [editOpen, setEditOpen] = useState(false);
  const [editedName, setEditedName] = useState(user?.name || "");
  const [editedEmail, setEditedEmail] = useState(user?.email || "");

  const handleLogout = () => {
    localStorage.removeItem("user");
    window.location.href = "/login";
  };

  const handleSaveProfile = () => {
    const updatedUser = { ...user, name: editedName, email: editedEmail };
    localStorage.setItem("user", JSON.stringify(updatedUser));
    setEditOpen(false);
    window.location.reload(); // Optional: can replace with state-based update for better UX
  };

  return (
    <>
      <Header />

      {/* Edit Profile Dialog */}
      <Dialog open={editOpen} onClose={() => setEditOpen(false)}>
        <DialogTitle>Edit Profile</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Name"
            fullWidth
            variant="standard"
            value={editedName}
            onChange={(e) => setEditedName(e.target.value)}
          />
          <TextField
            margin="dense"
            label="Email"
            fullWidth
            variant="standard"
            value={editedEmail}
            onChange={(e) => setEditedEmail(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setEditOpen(false)}>Cancel</Button>
          <Button onClick={handleSaveProfile} variant="contained">
            Save
          </Button>
        </DialogActions>
      </Dialog>

      {/* Dashboard Content */}
      <Box sx={{ p: 4, backgroundColor: "#f7f7f7", minHeight: "100vh", mt: 6 }}>
        <Typography variant="h4" sx={{ mb: 3, fontWeight: 700, color: "#333" }}>
          Welcome back, {user?.name || "User"}!
        </Typography>

        <Grid container spacing={4} mt={2}>
          {/* Profile Card */}
          <Grid item xs={12} md={4}>
            <Card
              sx={{
                p: 3,
                textAlign: "center",
                boxShadow: 3,
                borderRadius: 2,
                backgroundColor: "#fff",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                "&:hover": {
                  transform: "scale(1.05)",
                  boxShadow: 6,
                },
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
              <Typography variant="h6" sx={{ fontWeight: 600, color: "#333" }}>
                {user?.name}
              </Typography>
              <Typography color="text.secondary" sx={{ fontSize: 14, mb: 2 }}>
                {user?.email}
              </Typography>
              <Stack direction="row" spacing={2} justifyContent="center" mt={2}>
                <Button
                  startIcon={<Edit />}
                  variant="outlined"
                  sx={{
                    borderColor: "#3f51b5",
                    color: "#3f51b5",
                    "&:hover": { backgroundColor: "#e8eaf6" },
                  }}
                  onClick={() => setEditOpen(true)}
                >
                  Edit Profile
                </Button>
                <Button
                  startIcon={<Logout />}
                  variant="outlined"
                  color="error"
                  onClick={handleLogout}
                  sx={{
                    borderColor: "error.main",
                    color: "error.main",
                    "&:hover": { backgroundColor: "#ffebee" },
                  }}
                >
                  Logout
                </Button>
              </Stack>
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
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                "&:hover": {
                  transform: "scale(1.05)",
                  boxShadow: 6,
                },
              }}
            >
              <CardContent>
                <Stack direction="row" alignItems="center" spacing={2}>
                  <Assignment color="primary" />
                  <Typography variant="h6">My Orders</Typography>
                </Stack>
                <Divider sx={{ my: 2 }} />
                <Typography variant="body2" sx={{ color: "#555" }}>
                  You have 3 recent orders.
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
                  View Orders
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
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                "&:hover": {
                  transform: "scale(1.05)",
                  boxShadow: 6,
                },
              }}
            >
              <CardContent>
                <Stack direction="row" alignItems="center" spacing={2}>
                  <ShoppingCart color="secondary" />
                  <Typography variant="h6">My Cart</Typography>
                </Stack>
                <Divider sx={{ my: 2 }} />
                <Typography variant="body2" sx={{ color: "#555" }}>
                  2 items in your cart.
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
                  Go to Cart
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
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                "&:hover": {
                  transform: "scale(1.05)",
                  boxShadow: 6,
                },
              }}
            >
              <Typography variant="h6" sx={{ fontWeight: 600, color: "#333" }}>
                Recommended for You
              </Typography>
              <Typography variant="body2" sx={{ color: "#777", mb: 2 }}>
                Explore top-rated products and personalized suggestions based on your activity.
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

export default UserDashboard;
