import React from "react";
import axios from "axios";
import {
  Grid,
  Card,
  CardMedia,
  CardHeader,
} from "@material-ui/core";

export default class ResultApi extends React.Component {
  state = {
    persons: [],
  };

  componentDidMount() {
    axios.get(`https://randomuser.me/api/?results=20`).then((res) => {
      const persons = res.data.results;
      console.log("res", res.data.results);
      this.setState({ persons });
    });
  }

  render() {
    return (
      <Grid container>
        <Grid item xs={12} sm={6} md={6}>
          {this.state.persons.map((el, id) => 
            <Card key={id}>
              {el.name.title}
              <CardHeader>
              
                <CardMedia
                        imageUrl={el.picture.thumbnail}
                        title="Card Image" />
            
              </CardHeader>
            </Card>
          )}
        </Grid>
      </Grid>
    );
  }
}
