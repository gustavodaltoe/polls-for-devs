import { useContext } from 'react';
import Styles from './input-styles.scss';
import Context from '@/presentation/contexts/form/form-context';

type Props = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

export const Input = (props: Props) => {
  const { errorState } = useContext(Context);
  const error = errorState[props.name];

  const getStatus = () => {
    return '🔴';
  };
  const getTitle = () => {
    return error;
  };

  return (
    <div className={Styles.inputWrap}>
      <input {...props} />
      <span
        data-testid={`${props.name}-status`}
        title={getTitle()}
        className={Styles.status}
      >
        {getStatus()}
      </span>
    </div>
  );
};
