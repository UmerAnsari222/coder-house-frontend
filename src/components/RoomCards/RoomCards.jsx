import React from "react";
import styles from "./RoomCards.module.css";
import { useHistory } from "react-router-dom";

const RoomCards = ({ room }) => {
  const history = useHistory();
  return (
    <div
      className={styles.card}
      onClick={() => {
        history.push(`/room/${room.id}`);
      }}
    >
      <h3 className={styles.topic}>{room.topic}</h3>
      <div
        className={`${styles.speakers} ${
          room.speakers.length === 1 ? styles.singleSpeaker : ""
        }`}
      >
        <div className={styles.avatars}>
          {room.speakers.map((speaker) => (
            <img
              key={speaker.id}
              src={speaker.avatar}
              className={styles.avatar}
              alt="avatar"
            />
          ))}
        </div>
        <div className={styles.names}>
          {room.speakers.map((speaker) => (
            <div key={speaker.id} className={styles.nameWrapper}>
              <span>{speaker.name}</span>
              <img src="/images/chat.png" alt="Chat" />
            </div>
          ))}
        </div>
      </div>

      <div className={styles.peopleCount}>
        <span className={styles.totalPeople}>{room.totalPeople}</span>
        <img src="/images/user.png" alt="user" />
      </div>
    </div>
  );
};

export default RoomCards;
