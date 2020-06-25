import React, { Component } from "react";
import Tours from "../Tours/Tours";
import tourData from "../../tourData";
export default class TourList extends Component {
  state = {
    tours: tourData,
  };
  removeTours = (id) => {
    const { tours } = this.state;
    const sortedTours = tours.filter((tour) => tour.id !== id);
    this.setState({
      tours: sortedTours,
    });
  };
  render() {
    const { tours } = this.state;
    return (
      <section className='tour-list'>
        {tours.map((tour) => (
          <Tours
            key={tour.key}
            tour={tour}
            removeTours={this.removeTours}></Tours>
        ))}
      </section>
    );
  }
}
