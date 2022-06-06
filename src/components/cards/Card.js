import React, { useState, useEffect } from 'react'
import styles from "./Cards.module.scss";

const Card = ({ name, location, status, image }) => {
    const [width, setWidth] = useState(window.innerWidth);
    const updateDimension = () => {
        setWidth(window.innerWidth)
    }
    useEffect(() => {
        window.addEventListener("resize", updateDimension)
        return () => window.removeEventListener("resize", updateDimension)
    }, [])

    return (
        <div className={`${styles.card} d-flex flex-column justify-content-center ${width > 768 ? "hvr-grow" : ""}`}>
            <img src={image} alt="" className={`${styles.img} img-fluid`} />
            <div style={{ padding: "10px", cursor: "pointer" }} className="content">
                <div className="fs-5 fw-bold mb-4">{name}</div>
                <div className="fs-6">Last location</div>
                <div className="fs-6">{location}</div>
            </div>
            {(() => {
                if (status === "Dead") {
                    return (<div className={`${styles.badge} position-absolute badge bg-danger`}>
                        {status}
                    </div>)
                } else if (status === "Alive") {
                    return (<div className={`${styles.badge} position-absolute badge bg-success`}>
                        {status}
                    </div>)
                } else {
                    return (<div className={`${styles.badge} position-absolute badge bg-secondary`}>
                        {status}
                    </div>)
                }
            })()}
        </div>

    )
}

export default Card;
