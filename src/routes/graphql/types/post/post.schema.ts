/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import { GraphQLNonNull, GraphQLList } from 'graphql';
import { RootValue } from '../root-value.js';
import { CreatePostInputType, PostType } from './post.type.js';
import { UUIDType } from '../uuid.js';

export const postSchemaQueryFields = {
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

export const postSchemaMutationFields = {
  createPost: {
    type: PostType,
    args: {
      dto: { type: CreatePostInputType },
    },
    resolve: async ({ createPost }: RootValue, { dto }) => {
      return await createPost(dto);
    },
  },
  deletePost: {
    type: PostType,
    args: {
      id: { type: new GraphQLNonNull(UUIDType) },
    },
    resolve: async ({ deletePost }: RootValue, args) => {
      return await deletePost(args);
    },
  },
};
