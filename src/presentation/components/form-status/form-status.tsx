import { Spinner } from '../spinner/spinner';
import Styles from './form-status-styles.scss';

export const FormStatus = () => {
  return (
    <div className={Styles.errorWrap}>
      <Spinner className={Styles.spinner} />
      <span className={Styles.error}>Erro</span>
    </div>
  );
};
