import React from "react";
import "./styles/FeedbackModal.scss";

function FeedbackModal(props) {
    
    return (
        props.modalVisible?
        <div className="feedbackModal">
            <div className="modal-content">
                <span className="close" onClick={() => props.setModalVisible(false)}>&times;</span>
                <h3 className="feedback-header">Enjoying our Calculator</h3>
                <a 
                target="_blank"
                onClick={() => props.setModalVisible(false)}
                href="https://docs.google.com/forms/d/e/1FAIpQLSe6gAvq9kj-RNmnqD5CgpQhV1BtXpMfawnhGIOa1g8BVRXHmw/viewform?usp=sf_link" 
                rel="noreferrer">
                Please Share Us Your Feedback</a>
            </div>
        </div>
        : ""
    )
}

export default FeedbackModal;