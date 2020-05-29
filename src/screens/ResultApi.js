import React from "react";
import axios from "axios";
import Moment from "moment";
import {
  Grid,
  Card,
  CardHeader,
  Avatar,
  Container,
  CardActions,
  Typography,
  CardContent,
  Button,
  IconButton
} from "@material-ui/core";
import FavoriteIcon from "@material-ui/icons/Favorite";
import "./CommonStyles.css";

export default class ResultApi extends React.Component {
  state = {
    persons: [],
    occupation: [
      "Frontend Dev",
      "Backend Dev",
      "TikToker",
      "Musician",
      "Product Owner",
      "CTO",
      "Data Scientist",
    ],
    hobbies: [
      "dance, sing and watch Netflix",
      "travel, cooking, and watch football",
      "draw anime, drink wine and walk on the beach",
      "sleep, swim and travel",
    ],
  };

  componentDidMount() {
    axios.get(`https://randomuser.me/api/?results=20`).then((res) => {
      const persons = res.data.results;
      console.log("res", res.data.results);
      this.setState({ persons });
    });
  }

  randomizer(arr) {
    let result = arr[Math.floor(Math.random() * arr.length)];
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
                  title={el.name.title + " " + el.name.last}
                  subheader={Moment(el.dob.date).format("DD-MM-YYYY")}
                />
                <CardContent className="cardContent">
                  <Typography gutterBottom variant="h5" component="h2">
                    {this.randomizer(this.state.occupation)}
                  </Typography>
                  <Typography>
                    Hello, everyone! I'm {el.name.first}{" "}
                    {el.gender == "male" ? (
                      <span role="img" aria-label="male">
                        🕺
                      </span>
                    ) : (
                      <span role="img" aria-label="female">
                        💃
                      </span>
                    )}{" "}, {el.dob.age} years old, 
                    from {el.location.city} - {el.location.country} . I like to{" "}
                    {this.randomizer(this.state.hobbies)}
                  </Typography>
                </CardContent>
                <CardActions>
                  <IconButton aria-label="add to favorites">
                    <FavoriteIcon style={{ fontSize: 30, color: "red" }} />
                  </IconButton>
                    <Button  size="small" color="primary">
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
