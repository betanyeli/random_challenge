import React from "react";
import axios from "axios";
import {
  Grid,
  Card,
  CardMedia,
  CardHeader,
  Avatar,
  Container,
  CardActions,
  Typography,
  CardContent,
  Button,
} from "@material-ui/core";
import "./CommonStyles.css";

export default class ResultApi extends React.Component {
  state = {
    persons: [],
    occupation: ["Frontend Dev", "Backend Dev", "TikToker", "Musician", "Product Owner", "CTO", "Data Scientist"]
  };

  componentDidMount() {
    axios.get(`https://randomuser.me/api/?results=20`).then((res) => {
      const persons = res.data.results;
      console.log("res", res.data.results);
      this.setState({ persons });
    });
  }

  randomizer (arr){
    let result= arr[Math.floor(Math.random()*arr.length)]
    return result;
  }
  
  render() {

    return (
      <Container className="cardGrid" maxWidth="md">
        {/* End hero unit */}
        <Grid container spacing={4}>
          {this.state.persons.map((el, card) => (
            <Grid item key={card} xs={12} sm={6} md={4}>
              <Card className="card">
                <CardHeader
                  avatar={
                    <Avatar alt="Profile Image" src={el.picture.thumbnail} />
                  }
                  title= {el.name.title + ' ' + el.name.last }
                  subheader="September 14, 2016"
                />
                <CardContent className="cardContent">
                  <Typography gutterBottom variant="h5" component="h2">
                    {this.randomizer(this.state.occupation)}
                  </Typography>
                  <Typography>
                Hello! I'm {el.name.first } from {el.location.city} - {el.location.country}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" color="primary">
                    Match
                  </Button>
                  <Button size="small" color="primary">
                    Contact
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    );
  }
}
