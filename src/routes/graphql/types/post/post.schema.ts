/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import { GraphQLNonNull, GraphQLList } from 'graphql';
import { RootValue } from '../root-value.js';
import { PostType } from './post.type.js';
import { UUIDType } from '../uuid.js';

export const postSchemaFields = {
  posts: {
    type: new GraphQLNonNull(new GraphQLList(new GraphQLNonNull(PostType))),
    resolve: async ({ getAllPosts }: RootValue) => await getAllPosts(),
  },
  post: {
    type: PostType,
    args: {
      id: { type: new GraphQLNonNull(UUIDType) },
    },
    resolve: async ({ getPostById }: RootValue, args: { id: string }) =>
      await getPostById(args),
  },
};
