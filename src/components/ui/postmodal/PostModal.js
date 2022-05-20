import React from "react";
import ReactDOM from "react-dom";
import styles from "./PostModal.module.css";

const Backdrop = ({ onClick }) => {
  return <div className={styles.backdrop} onClick={onClick} />;
};

const ModalOverlay = ({ onClick }) => {
  return (
    <div className={styles.modalctn}>
      <h2>PostModal</h2>
      <p>New post placeholder</p>
      <button onClick={onClick}>Close</button>
      <button onClick={onClick}>Send</button>
    </div>
  );
};

const PostModal = ({ onClose }) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onClick={onClose} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay onClick={onClose} />,
        document.getElementById("modal-root")
      )}
    </>
  );
};

export default PostModal;
