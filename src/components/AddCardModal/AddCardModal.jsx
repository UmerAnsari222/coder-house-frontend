import React, { useState } from "react";
import styles from "./AddCardModal.module.css";
import TextInput from "../shared/TextInput/TextInput";
import { createRoom as create } from "../../http";
import { useHistory } from "react-router-dom";

const AddCardModal = ({ onClose }) => {
  const history = useHistory();
  const [roomType, setRoomType] = useState("open");
  const [topic, setTopic] = useState("");

  async function createRoom() {
    try {
      if (!topic) return;
      const { data } = await create({ topic, roomType });
      history.push(`/room/${data.id}`);
      console.log(data);
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <div className={styles.modalMask}>
      <div className={styles.modalBody}>
        <button className={styles.closedButton} onClick={onClose}>
          <img src="/images/cross.png" alt="closed" />
        </button>
        <div className={styles.modalHeader}>
          <h3 className={styles.heading}>Enter the topic to be discussed</h3>
          <TextInput
            fullwidth="true"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
          />
          <h2 className={styles.subHeading}>Room type</h2>
          <div className={styles.roomType}>
            <div
              onClick={() => setRoomType("open")}
              className={`${styles.typeBox} ${
                roomType === "open" ? styles.active : ""
              }`}
            >
              <img src="/images/open.png" />
              <span>Open</span>
            </div>
            <div
              onClick={() => setRoomType("social")}
              className={`${styles.typeBox} ${
                roomType === "social" ? styles.active : ""
              }`}
            >
              <img src="/images/users.png" />
              <span>Social</span>
            </div>
            <div
              onClick={() => setRoomType("private")}
              className={`${styles.typeBox} ${
                roomType === "private" ? styles.active : ""
              }`}
            >
              <img src="/images/closed.png" />
              <span>Private</span>
            </div>
          </div>
        </div>
        <div className={styles.modalFooter}>
          <h2>Start a room, open to everyone</h2>
          <button onClick={createRoom} className={styles.footerButton}>
            <img src="/images/cone.png" alt="" />
            <span>Let’s Go</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddCardModal;
