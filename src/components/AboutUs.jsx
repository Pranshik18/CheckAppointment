import { Box, Container, Grid,  Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Header from "./Header";
const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(10),
    paddingBottom: theme.spacing(12),
  },
  image: {
    maxWidth: "100%",
  },
}));

const AboutUs = () => {
  const classes = useStyles();

  return (<>
    <Header />
    <Box className={classes.root}>
      <Container maxWidth="lg">
        
        <Typography variant="h4" align="center" gutterBottom>
          About Us
        </Typography>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <img src='https://i.postimg.cc/8Cqsv733/joshua-koblin-eq-W1-MPin-EV4-unsplash-removebg-preview.png' alt="Car" className={classes.image} />
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="body1" paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
              pulvinar nisi quis tellus sagittis, vitae volutpat dolor euismod.
              Morbi id metus id ligula ullamcorper dictum. Vestibulum ante
              ipsum primis in faucibus orci luctus et ultrices posuere cubilia
              Curae; Phasellus sem velit, malesuada eu convallis a, efficitur
              eget nisi. Integer maximus sapien vitae lectus dictum malesuada.
            </Typography>
            <Typography variant="body1" paragraph>
              Proin ac eros sed quam pellentesque lacinia. Nulla quis mattis
              dolor. Fusce congue elit libero, ut fermentum massa mollis quis.
              Ut vulputate, lacus ac iaculis imperdiet, dolor dui placerat
              lectus, sit amet sodales enim velit sit amet velit. Sed in
              feugiat lectus. Nulla facilisi. Curabitur vel vestibulum ex.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
    </>
  );
};

export default AboutUs;
