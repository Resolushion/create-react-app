import React from 'react'
import styles from "./Cards.module.scss";

const Card = ({ name, location, status, image }) => {
    return (
        <div className={`${styles.card} ${styles.hoverC} d-flex flex-column justify-content-center hvr-grow`}>
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
