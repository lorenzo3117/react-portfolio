import styles from "./Spinner.module.scss";

interface SpinnerProps {
  text?: string;
}

export const Spinner = ({ text }: SpinnerProps) => {
  return (
    <div aria-busy="true" className={styles.spinner}>
      {text}
    </div>
  );
};
