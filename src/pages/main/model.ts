import { combine, createEffect, createEvent, createStore, sample } from 'effector';

import { JsonPlaceholderType } from '../../shared/types/pages.types';

export const getCommentsFx = createEffect(async (postId: any) => {
  const url = `posts/${postId}/comments`;
  const base = 'https://jsonplaceholder.typicode.com';
  const req = await fetch(`${base}/${url}`);
  return req.json();
});

export const nextPost = createEvent();

export const changeTheme = createEvent<JsonPlaceholderType>();

export const $postComments = createStore<JsonPlaceholderType[]>([]).on(
  getCommentsFx.doneData,
  (_, posts) => posts
);

const $currentPost = createStore(1).on(getCommentsFx.done, (_, { params: postId }) => postId);

export const $posts = combine(
  $currentPost,
  $postComments,
  getCommentsFx.pending,
  (postId, comments, isLoading) =>
    isLoading ? 'Загрузка поста...' : `Пост ${postId} имеет ${comments.length} комментариев`
);

sample({
  source: $currentPost,
  clock: nextPost,
  fn: (postId) => postId + 1,
  target: getCommentsFx,
});

$posts.watch((status) => {
  console.log(status);
});
