import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  Box,
  TextField,
  Pagination,
  Card,
  CardContent,
  AppBar,
  Toolbar,
  Typography,
  CircularProgress,
  Stack,
  Button,
} from "@mui/material";
import * as Icons from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { getAnimeDetails } from "../api/AnimeApi";

const ArrowBackIosNewIcon = Icons.ArrowBackIosNew;

const AnimePage = () => {
  const { id } = useParams();
  const [anime, setAnime] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    getAnimeDetails(id!).then((res) => {
      setAnime(res.data);
      setLoading(false);
    });
  }, [id]);

  if (loading) return <CircularProgress />;

  return (
    <Box>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h5" sx={{ flexGrow: 1 }}>
            Anime Search App
          </Typography>
        </Toolbar>
      </AppBar>

      <Card
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          mt: 5,
          width: "1200px",
          mx: "auto",
        }}
      >
        <img
          src={anime.images.jpg.image_url}
          alt={anime.title}
          width={300}
          height={400}
        />

        <Box sx={{ ml: 2 }}>
          <Typography variant="h4">{anime.title}</Typography>
          <Typography
            variant="body1"
            sx={{ mt: 2, textAlign: "justify", pr: 2 }}
          >
            {anime.synopsis}
          </Typography>
          <Stack direction="row" spacing={2} sx={{ mt: 2 }}>
            <Box
              sx={{
                width: "150px",
                height: "85px",
                backgroundColor: "#ACE7F8",
                color: "#004DFF",
                border: "1px solid",
                borderColor: "#004DFF",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "30px",
                fontWeight: "900",
              }}
            >
              {anime.score}
              <Typography variant="body1" sx={{ fontSize: "10px" }}>
                USERS
              </Typography>
            </Box>
            <Box
              sx={{
                width: "150px",
                height: "85px",
                backgroundColor: "#CEC2EB",
                color: "#653780",
                border: "1px solid",
                borderColor: "#653780",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "30px",
                fontWeight: "900",
              }}
            >
              #{anime.rank}
              <Typography variant="body1" sx={{ fontSize: "10px" }}>
                RANKED
              </Typography>
            </Box>
            <Box
              sx={{
                width: "150px",
                height: "85px",
                backgroundColor: "#EB949E",
                color: "#E20A4A",
                border: "1px solid",
                borderColor: "#E20A4A",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "30px",
                fontWeight: "900",
              }}
            >
              #{anime.popularity}
              <Typography variant="body1" sx={{ fontSize: "10px" }}>
                POPULARITY
              </Typography>
            </Box>
            <Box
              sx={{
                width: "150px",
                height: "85px",
                backgroundColor: "#AEDCAE",
                color: "#228B22",
                border: "1px solid",
                borderColor: "#228B22",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "30px",
                fontWeight: "900",
              }}
            >
              {anime.members?.toLocaleString()}
              <Typography variant="body1" sx={{ fontSize: "10px" }}>
                MEMBERS
              </Typography>
            </Box>
          </Stack>
        </Box>
      </Card>
      <Button
        variant="contained"
        sx={{ mt: 2, ml: 30 }}
        startIcon={<ArrowBackIosNewIcon />}
        onClick={() => navigate(-1)}
      >
        Back
      </Button>
    </Box>
  );
};

export default AnimePage;
