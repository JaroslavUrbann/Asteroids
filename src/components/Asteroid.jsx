import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from "react-router-dom";

const Component = ({ data }) => (
    <section id="asteroid">
        <div className="props">
            name: {data.name}
        </div>
        <div className="props">
            estimated diameter: {Math.round(data.estimated_diameter.meters.estimated_diameter_min)} - {Math.round(data.estimated_diameter.meters.estimated_diameter_max)} km
        </div>
        <div className="props">
            is dangerous: {data.is_potentially_hazardous_asteroid.toString()}
        </div>
    </section>
);

const Asteroid = connect()(withRouter(Component));

export default Asteroid;