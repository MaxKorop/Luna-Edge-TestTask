import { Link } from "react-router-dom";
import { Input, Button, ChadHeader } from "~/libs/components/components";

import styles from "./styles.module.css";
import { ChangeEvent, useCallback, useContext, useState } from "react";
import { Context } from "~/libs/components/app/app";
import { type Stage } from "~/libs/types/stage.type";

const SignUpForm: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const { currentStage, changeStage, setUser, setCurrentStage } = useContext(Context);

  const submit = useCallback(
    () => {
      setUser?.({ email, name, password });
      changeStage?.(currentStage, (stage: Stage) => {
        stage.finished = true;
        stage.active = false;
        return stage;
      });
      changeStage?.(currentStage+1, (stage: Stage) => {
        stage.active = true;
        return stage;
      });
      setCurrentStage?.(currentStage + 1);
    },
    [email, name, password, currentStage, setUser, setCurrentStage]
  )

  return (
    <div className={styles["container"]}>
      <ChadHeader />
      <span className={styles["header"]}>Welcome to Chad</span>
      <span className={styles["text"]}>Go live in 10 minutes! 
        Our self-service widget empowers your customers 
        to manage orders and track shipments 24/7 without driving you crazy.
      </span>
      <div className={styles["input-wrapper"]}>
        <Input
          value={email}
          name="email-input"
          label="Email"
          placeholder="megachad@trychad.com"
          onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
        />
        <Input
          value={name}
          name="name-input"
          label="Your name"
          placeholder="Mega Chad"
          onChange={(e: ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
        />
        <Input
          value={password}
          name="password-input"
          label="Password"
          placeholder="Enter password"
          type="password"
          onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
        />
      </div>
      <div className={styles["button"]}><Button label="Create account" onClick={submit} /></div>
      <span className={styles["text-bottom"]}>Already have an account? <Link to={"/sign-up"} className={styles["link"]}>Login</Link></span>
    </div>
  )
}

export { SignUpForm };