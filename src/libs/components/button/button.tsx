import styles from "./styles.module.css"

type Properties = {
  label: string;
  onClick: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  className?: string;
}

const Button: React.FC<Properties> = ({ className, label, onClick, type = 'button', disabled = false }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${className ?? styles["button"]}`}
    >
      {label}
    </button>
  );
};

export { Button };
