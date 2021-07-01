import { PostForm } from '../../components/PostForm';
import { toast } from 'react-toastify';
import { Helmet } from 'react-helmet';

export const PostEditor = () => {
  return (
    <>
      <Helmet title="Edit/Create Post - GraphQL + Apollo-Client - Otávio Miranda" />

      <PostForm
        handleSubmitCb={(sentValues) =>
          toast.success(<pre>{JSON.stringify(sentValues, null, 2)}</pre>)
        }
      />
    </>
  );
};
