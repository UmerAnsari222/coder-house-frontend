import React, { useState } from "react";
import Button from "../../../components/shared/Button/Button";
import Card from "../../../components/shared/Card/Card";
import TextInput from "../../../components/shared/TextInput/TextInput";
import { setName } from "../../../store/activateSlice";
import { useDispatch, useSelector } from "react-redux";
import styles from "./StepName.module.css";

const StepName = ({ onNext }) => {
  const dispatch = useDispatch();
  const { name } = useSelector((state) => state.activate);
  const [fullname, setFullname] = useState(name);
  function nextStep() {
    console.log("onClick");

    if (!fullname) {
      return;
    }
    dispatch(setName(fullname));
    onNext();
  }
  return (
    <>
      <div className={styles.cardWrapper}>
        <Card title="What’s your full name?" icon="goggle">
          <TextInput
            value={fullname}
            onChange={(e) => setFullname(e.target.value)}
          />
          <p className={styles.bottomPara}>
            People use real names at codershouse :){" "}
          </p>
          <div>
            <div className={styles.actionButtonWrap}>
              <Button onClick={nextStep} text="Next" />
            </div>
          </div>
        </Card>
      </div>
    </>
  );
};

export default StepName;
