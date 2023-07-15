/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLNonNull,
  GraphQLList,
} from 'graphql';
import { UUIDType } from '../uuid.js';
import { ProfileType } from '../profile/profile.type.js';
import { PostType } from '../post/post.type.js';
import { MemberType } from '../member-type/member-type.type.js';

export const UserType = new GraphQLObjectType({
  name: 'User',
  description: 'User data',
  fields: () => ({
    id: { type: new GraphQLNonNull(UUIDType) },
    name: { type: GraphQLString },
    balance: { type: GraphQLInt },
    profile: {
      type: ProfileType,
      resolve: async (root, _, fastify) =>
        await fastify.prisma.profile.findUnique({
          where: {
            userId: root.id,
          },
        }),
      fields: () => ({
        memberType: {
          type: MemberType,
          resolve: async (root, _, fastify) =>
            await fastify.prisma.memberType.findUnique({
              where: {
                id: root.id,
              },
            }),
        },
      }),
    },
    posts: {
      type: new GraphQLList(PostType),
      resolve: async (root, _, fastify) =>
        await fastify.prisma.post.findMany({
          where: {
            authorId: root.id,
          },
        }),
    },
  }),
});
