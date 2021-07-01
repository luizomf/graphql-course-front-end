import { RegisterForm } from 'components/RegisterForm';
import { Main } from 'page-bases/Main';
import { toast } from 'react-toastify';

export const Register = () => {
  return (
    <Main>
      <RegisterForm
        handleSubmitCb={(sentValues) =>
          toast.success(<pre>{JSON.stringify(sentValues, null, 2)}</pre>)
        }
      />
    </Main>
  );
};
