import React, { useState } from 'react'
import styles from "./Cards.module.scss";
import {
    MDBBtn,
    MDBModal,
    MDBModalDialog,
    MDBModalContent,
    MDBModalHeader,
    MDBModalTitle,
    MDBModalBody,
    MDBModalFooter,
} from 'mdb-react-ui-kit';

const Modal = ({ name, image, location, origin, gender, species, status, type }) => {
    const [topRightModal, setTopRightModal] = useState(false);

    const toggleShow = () => setTopRightModal(!topRightModal);

    return (
        <>
            <MDBBtn className={styles.modalBtn} onClick={toggleShow}>Details</MDBBtn>
            <MDBModal animationDirection="right"
                show={topRightModal}
                tabIndex='-1'
                setShow={setTopRightModal}>
                <MDBModalDialog position="top-right" size="sm">
                    <MDBModalContent >
                        <MDBModalHeader>
                            <MDBModalTitle>{name}</MDBModalTitle>
                            <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn>
                        </MDBModalHeader>
                        <MDBModalBody className='pt-0'>
                            <div className="modal-body d-flex flex-column">
                                <img src={image} alt="" className={`${styles.img} img-fluid`} />
                                {(() => {
                                    if (status === "Dead") {
                                        return (<div className={`${styles.badgeModal} bg-danger fs-5 text-center text-light mb-2`}>
                                            {status}
                                        </div>)
                                    } else if (status === "Alive") {
                                        return (<div className={`${styles.badgeModal} bg-success fs-5 text-center text-light mb-2`}>
                                            {status}
                                        </div>)
                                    } else {
                                        return (<div className={`${styles.badgeModal} bg-secondary fs-5 text-center text-light mb-2`}>
                                            {status}
                                        </div>)
                                    }
                                })()}
                                <MDBModalFooter className='justify-content-start p-0'>
                                    <div className='content d-flex flex-column'>
                                        <div className="">
                                            <span className={`${styles.infoName} fw-bold`}>Location: </span>
                                            <span className={styles.info}>{location}</span>
                                        </div>
                                        <div className="">
                                            <span className={`${styles.infoName} fw-bold`}>Gender: </span>
                                            <span className={styles.info}>{gender}</span>
                                        </div>
                                        <div className="">
                                            <span className={`${styles.infoName} fw-bold`}>Species: </span>
                                            <span className={styles.info}>{species}</span>
                                        </div>
                                        <div className="">
                                            <span className={`${styles.infoName} fw-bold`}>Type: </span>
                                            <span className={styles.info}>{type === "" ? "Unknown" : type}</span>
                                        </div>
                                        <div className="">
                                            <span className={`${styles.infoName} fw-bold`}>Origin: </span>
                                            <span className={styles.info}>{origin === "" ? "Unknown" : origin}</span>
                                        </div>
                                    </div>
                                </MDBModalFooter>

                            </div>
                        </MDBModalBody>
                    </MDBModalContent>
                </MDBModalDialog>
            </MDBModal>

        </>
    );
}

export default Modal;
