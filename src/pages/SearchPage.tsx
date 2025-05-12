import React, { useState, useEffect } from "react";
import {
  Box,
  TextField,
  Pagination,
  Card,
  CardContent,
  AppBar,
  Toolbar,
  Typography,
  Grid,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import useDebounce from "../hooks/DebouncePath";
import { searchAnime } from "../api/SearchApi";

const SearchPage = () => {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [results, setResults] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const debouncedQuery = useDebounce(query, 250);
  const navigate = useNavigate();

  useEffect(() => {
    if (!debouncedQuery) {
      setResults([]);
      setTotalPages(1);
      return;
    }

    searchAnime(debouncedQuery, page)
      .then(({ results, totalPages }) => {
        setResults(results.slice(0, 10));
        setTotalPages(totalPages);
      })
      .catch(() => {
        setResults([]);
        setTotalPages(1);
      });
  }, [debouncedQuery, page]);

  return (
    <Box sx={{ bgcolor: "background.default", minHeight: "100vh", pb: 6 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h5" sx={{ flexGrow: 1 }}>
            Anime Search App
          </Typography>
        </Toolbar>
      </AppBar>

      <Box sx={{ width: "95%", maxWidth: 1200, mx: "auto", mt: 4 }}>
        <TextField
          placeholder="Search Anime"
          fullWidth
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setPage(1);
          }}
          sx={{ mb: 2 }}
        />

        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {results.slice(0, 10).map((anime) => (
            <Grid item key={anime.mal_id} xs={2} sm={4} md={4}>
              <Card
                sx={{
                  width: "220px",
                  cursor: "pointer",
                  height: "100%",
                }}
                onClick={() => navigate(`/anime/${anime.mal_id}`)}
              >
                <Box sx={{ overflow: "hidden" }}>
                  <img
                    src={anime.images.jpg.image_url}
                    alt={anime.title}
                    style={{
                      width: "100%",
                      height: "250px",
                      objectFit: "cover",
                      display: "block",
                    }}
                  />
                </Box>
                <CardContent>
                  <Typography variant="subtitle1" noWrap>
                    {anime.title}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Pagination
          count={totalPages}
          page={page}
          onChange={(e, val) => setPage(val)}
          sx={{ mt: 2, mb: 4 }}
        />
      </Box>
    </Box>
  );
};

export default SearchPage;
