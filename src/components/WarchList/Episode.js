import React from 'react'
import styles from "../cards/Cards.module.scss";
import logo from "../../assets/logo.png";
import AddButton from './AddButton';

const Episode = ({ name, air_date, episode }) => {
    return (
        <div className={`${styles.card} p-2 hvr-grow`}>
            <img src={logo} className="img-fluid" alt="" />
            <div className="fs-6 fw-bold mb-2">{name}</div>
            <div className="fs-6 fw-bold">Date:
                <span className="fs-6 fw-light">{air_date}</span>
            </div>
            <div className="fs-6 fw-bold">Episode:
                <span className="fs-6 fw-light">{episode}</span>
            </div>
            <AddButton />
        </div>
    )
}

export default Episode
