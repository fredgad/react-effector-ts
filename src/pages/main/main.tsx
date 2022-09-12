import { useStore } from 'effector-react';
import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

import { JsonPlaceholderType } from '../../shared/types/pages.types';
import { Text } from '../../shared/ui';
import './main.scss';
import { $postComments, nextPost } from './model';

export const MainPage = () => {
  useEffect(() => {
    nextPost();
  }, []);

  const posts = useStore($postComments);
  console.log(posts, 'posts');
  const sad = posts.map((post: JsonPlaceholderType, i: number) => {
    return (
      <div className="json" key={i}>
        <Text data-type="h5">Name: {post.name}</Text>
        <Text data-type="h5">Body: {post.body}</Text>
        <Text data-type="h5">Id: {post.id}</Text>
        <Text data-type="h5">Email: {post.email}</Text>
        <Text data-type="h5">PostId: {post.postId}</Text>
      </div>
    );
  });

  return (
    <>
      <Helmet title="Main Page" />
      <div className="page-title" onClick={() => nextPost()}>
        Main Page
      </div>
      {sad}
    </>
  );
};
