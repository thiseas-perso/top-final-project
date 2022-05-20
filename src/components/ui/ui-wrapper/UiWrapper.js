import React from "react";
import NavBar from "../NavBar/NavBar";
import Aside from "../Aside/Aside";

import { useSelector, useDispatch } from "react-redux";
import { toggleModal } from "../../../features/modalSlice";

import styles from "./UiWrapper.module.css";
import PostModal from "../postmodal/PostModal";

const UiWrapper = ({ children }) => {
  const dispatch = useDispatch();
  const modalIsOpen = useSelector((state) => state.modal.isOpen);
  const modalHandler = () => {
    dispatch(toggleModal());
  };

  return (
    <div className={styles.wrapper}>
      <NavBar onClick={modalHandler} />
      <div className={styles.mainctn}>
        <main className={styles.main}>{children}</main>
        {modalIsOpen && <PostModal onClose={modalHandler} />}
      </div>
      <Aside />
    </div>
  );
};

export default UiWrapper;
