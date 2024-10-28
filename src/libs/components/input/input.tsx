import { useState } from "react";
import styles from "./styles.module.css";
import { Icon } from "~/libs/components/components";
type Properties = {
  label: string;
  name: string;
  placeholder: string;
  type?: "text" | "password";
};

const Input: React.FC<Properties> = ({ label, name, placeholder, type = "text" }) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prevState) => !prevState);
  };

  return (
    <div className={styles["input-container"]}>
      <label htmlFor={name} className={styles["label"]}>
        {label}
      </label>
      <div className={styles["input-wrapper"]}>
        <input
          id={name}
          name={name}
          placeholder={placeholder}
          type={type === "password" && isPasswordVisible ? "text" : type}
          className={styles["input-field"]}
        />
        {type === "password" && (
          <div
            onClick={togglePasswordVisibility}
            className={styles["password-toggle"]}
            aria-label={isPasswordVisible ? "Hide password" : "Show password"}
          >  
            <Icon name={isPasswordVisible ? "eyeClose" : "eyeOpen"}/>
          </div>
        )}
      </div>
    </div>
  );
};

export { Input };
