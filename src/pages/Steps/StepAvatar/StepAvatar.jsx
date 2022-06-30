import React, { useState, useEffect } from "react";
import Button from "../../../components/shared/Button/Button";
import Card from "../../../components/shared/Card/Card";
import styles from "./StepAvatar.module.css";
import { useSelector, useDispatch } from "react-redux";
import { setAvatar } from "../../../store/activateSlice";
import { activate } from "../../../http";
import { setAuth } from "../../../store/authSlice";
import Loader from "../../../components/shared/Loader/Loader";

const StepAvatar = ({ onNext }) => {
  const [loading, setLoading] = useState(false);
  const { name, avatar } = useSelector((state) => state.activate);
  const [image, setImage] = useState("/images/monkey-avatar.png");
  const [unMounted, setUnMounted] = useState(false);
  const dispatch = useDispatch();
  function captureImage(event) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = function () {
      setImage(reader.result);
      dispatch(setAvatar(reader.result));
    };
    console.log(event);
  }
  async function submit() {
    if (!name || !avatar) return;
    setLoading(true);
    try {
      const { data } = await activate({ name, avatar });
      console.log(data);
      if (data.auth) {
        if (!unMounted) {
          dispatch(setAuth(data));
        }
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    return () => {
      setUnMounted(true);
    };
  }, []);

  if (loading) return <Loader message="Activation in progress ..." />;

  return (
    <>
      <div className={styles.cardWrapper}>
        <Card title={`Okay, ${name}`} icon="goggle">
          <div className={styles.avatarWrapper}>
            <img src={image} alt="monkey-avatar" />
          </div>
          <div>
            <input
              onChange={captureImage}
              type="file"
              id="avatarInput"
              className={styles.avatarInput}
            />
            <label htmlFor="avatarInput">Choose a different photo</label>
          </div>
          <div>
            <div className={styles.actionButtonWrap}>
              <Button onClick={submit} text="Next" />
            </div>
          </div>
        </Card>
      </div>
    </>
  );
};

export default StepAvatar;
