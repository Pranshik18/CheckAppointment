import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Box, Container } from "@mui/system";
import axios from "axios";
import { makeStyles } from "@mui/styles";
import Header from "./Header";
import { Button, MenuItem, Select } from "@mui/material";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles((theme) => ({

  heading: {
    margin: theme.spacing(5),
    padding : '20px'
  },
  box: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between'
  },
  shadow: {
    width: "20%",
    margin: "0 auto",
    borderRadius: "10px",
    boxShadow: "2px 2px 10px 1px grey",
    justifyContent:"space-between",
    // paddingBottom: "20px",
    padding: "15px",
    minWidth: 300,
    maxWidth: 600,
    padding: '10px',
    margin: '15px'
},
}))

export default function Cars() {
  const [expanded, setExpanded] = useState(false);
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [filterCategory, setFilterCategory] = useState("All");
  const classes = useStyles();
  const filtered =
    filterCategory === "All"
      ? data : data.filter((item) => {
        return item.car_name === filterCategory;
    })

  useEffect(() => {
    axios.get("http://localhost:3001/car").then((res) => {
      setData(res.data);
    });
  }, []);

  const handleBuy = (value) => {
    localStorage.setItem("name" , value.car_name)
    localStorage.setItem("type" , value.car_type)
    localStorage.setItem("model" , value.model)
    localStorage.setItem("price", value.price)
    navigate('/checkout')
  }
  return (
    <Box>
      <Header />
      <Container maxWidth="lg">
        <Select
          value={filterCategory}
          color="primary"
          sx={{color : 'red' , border: '1px solid red' , margin:'10px'}}
          onChange={(e) => {
          setFilterCategory(e.target.value)
        }}>
          <MenuItem value= "All" >All</MenuItem>
          <MenuItem value= "Mercedes">Mercedes</MenuItem>
          <MenuItem value= "Audi">Audi</MenuItem>
          <MenuItem value= "Porsche" >Porsche</MenuItem>
          <MenuItem value= "Rolls Royce">Rolls Royce</MenuItem>
          <MenuItem value= "Tata" >Tata</MenuItem>
          <MenuItem value= "Toyata" >Toyata</MenuItem>
          <MenuItem value= "Mahindra" >Mahindra</MenuItem>
          <MenuItem value= "Jeep" >Jeep</MenuItem>
          <MenuItem value= "Hyundai" >Hyundai</MenuItem>
          <MenuItem value= "Lamborghini" >Lamborghini</MenuItem>
          <MenuItem value= "Ferrari" >Ferrari</MenuItem>
          <MenuItem value= "Maruti Suzuki">Maruti Suzuki</MenuItem>
        </Select>
        <Typography variant="h3" className={classes.heading}>Car Stock Available</Typography>
        <Box className={classes.box}>
        {filtered.map((item) => {
          return (
            <Card className={classes.shadow}>
              <CardHeader
                avatar={
                  <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                    R
                  </Avatar>
                }
                action={
                  <IconButton aria-label="settings">
                    <MoreVertIcon />
                  </IconButton>
                }
                title={item.car_name}
                subheader={item.car_type}
              />
              <CardMedia component="img" height="194" width='200' z image={item.image} />
              <CardContent>
                <Typography variant="h6">
                  {item.car_name + " " + item.model}
                </Typography>
                <Typography variant="h6">
                  Acceleration - {item.acceleration}
                </Typography>
                <Typography variant="h6">Price ${item.price}</Typography>
              </CardContent>
              <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                  <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                  <ShareIcon />
                </IconButton>
                <Button onClick={(e)=> handleBuy(item)}>Buy</Button>
              </CardActions>
              <Collapse in={expanded} timeout="auto" unmountOnExit></Collapse>
            </Card>
          );
        })}
        </Box>
      </Container>
    </Box>
  );
}
