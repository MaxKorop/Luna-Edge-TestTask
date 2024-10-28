import styles from "./styles.module.css"

type Properties = {
  label: string;
  onClick: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

const Button: React.FC<Properties> = ({ label, onClick, type = 'button', disabled = false }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={styles["button"]}
    >
      {label}
    </button>
  );
};

export { Button };
