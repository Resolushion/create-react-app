import ModalView from "./ModalView";
import React from "react";
import Card from "./Card";

const Cards = ({ results }) => {

    let display;
    if (results) {
        display = results.map(character => {
            let { id, name, image, location, status, origin, gender, species, type } = character;
            return (
                <div key={id} className="col-lg-4 col-md-6 col-12 mb-4 position-relative">
                    <Card name={name} image={image} status={status} location={location.name} />
                    <ModalView
                        name={name}
                        image={image}
                        location={location.name}
                        status={status}
                        origin={origin.name}
                        gender={gender}
                        species={species}
                        type={type}
                    />
                </div >
            );

        })
    } else {
        display = "No Characters Found ;/";
    }
    return <>{display}</>;

}

export default Cards;
