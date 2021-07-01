import { Main } from 'page-bases/Main';
import { PostForm } from '../../components/PostForm';
import { toast } from 'react-toastify';

export const PostEditor = () => {
  return (
    <Main>
      <PostForm
        handleSubmitCb={(sentValues) =>
          toast.success(<pre>{JSON.stringify(sentValues, null, 2)}</pre>)
        }
      />
    </Main>
  );
};
