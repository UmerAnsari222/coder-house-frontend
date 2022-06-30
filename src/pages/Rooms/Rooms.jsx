import React, { useState, useEffect } from "react";
import AddCardModal from "../../components/AddCardModal/AddCardModal";
import RoomCards from "../../components/RoomCards/RoomCards";
import { getAllRooms } from "../../http";
import styles from "./Rooms.module.css";

// const rooms = [
//   {
//     id: 1,
//     topic: "Which framework best for frontend",
//     speakers: [
//       {
//         id: 1,
//         name: "Jon Doe",
//         avatar: "/images/monkey-avatar.png",
//       },
//       {
//         id: 2,
//         name: "Jon Doe",
//         avatar: "/images/monkey-avatar.png",
//       },
//     ],
//     totalPeople: 40,
//   },
//   {
//     id: 2,
//     topic: "Which framework best for backend",
//     speakers: [
//       {
//         id: 1,
//         name: "Jon Doe",
//         avatar: "/images/monkey-avatar.png",
//       },
//       {
//         id: 2,
//         name: "Jon Doe",
//         avatar: "/images/monkey-avatar.png",
//       },
//     ],
//     totalPeople: 40,
//   },
//   {
//     id: 3,
//     topic: "Which framework best for python",
//     speakers: [
//       {
//         id: 1,
//         name: "Jon Doe",
//         avatar: "/images/monkey-avatar.png",
//       },
//       {
//         id: 2,
//         name: "Jon Doe",
//         avatar: "/images/monkey-avatar.png",
//       },
//     ],
//     totalPeople: 40,
//   },
// ];

const Rooms = () => {
  const [showModal, setShowModal] = useState(false);
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    const fetchRooms = async () => {
      const { data } = await getAllRooms();
      console.log(data);
      setRooms(data);
    };
    fetchRooms();
  }, []);

  function openModal() {
    setShowModal(true);
  }
  function onClose() {
    setShowModal(false);
  }
  return (
    <>
      <div className="container">
        {/* Header Rooms Component */}
        <div className={styles.roomsHeader}>
          <div className={styles.left}>
            <span className={styles.heading}>All voice rooms</span>
            <div className={styles.searchBox}>
              <img src="/images/search.png" alt="search" />
              <input type="text" className={styles.searchInput} />
            </div>
          </div>
          <div className={styles.right}>
            <button onClick={openModal} className={styles.startRoomButton}>
              <img src="/images/call.png" alt="callout" />
              <span>Start a room</span>
            </button>
          </div>
        </div>
        {/* Rooms List */}
        <div className={styles.roomsList}>
          {rooms.map((room) => (
            <>
              <RoomCards key={room.id} room={room} />
            </>
          ))}
        </div>
      </div>
      {showModal && <AddCardModal onClose={onClose} />}
    </>
  );
};

export default Rooms;
