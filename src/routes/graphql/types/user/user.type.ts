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
  GraphQLInputObjectType,
  GraphQLFloat,
} from 'graphql';
import { UUIDType } from '../uuid.js';
import { ProfileType } from '../profile/profile.type.js';
import { PostType } from '../post/post.type.js';
import { MemberType } from '../member-type/member-type.type.js';
import { FastifyType } from '../root-value.js';

export const UserType = new GraphQLObjectType({
  name: 'User',
  description: 'User data',
  fields: () => ({
    id: { type: new GraphQLNonNull(UUIDType) },
    name: { type: GraphQLString },
    balance: { type: GraphQLInt },
    profile: {
      type: ProfileType,
      resolve: async (root, _, fastify: FastifyType) =>
        await fastify.prisma.profile.findUnique({
          where: {
            userId: root.id,
          },
        }),
      fields: () => ({
        memberType: {
          type: MemberType,
          resolve: async (root, _, fastify: FastifyType) =>
            await fastify.prisma.memberType.findUnique({
              where: {
                id: root.memberTypeId,
              },
            }),
        },
      }),
    },
    posts: {
      type: new GraphQLList(PostType),
      resolve: async (root, _, fastify: FastifyType) =>
        await fastify.prisma.post.findMany({
          where: {
            authorId: root.id,
          },
        }),
    },
    userSubscribedTo: {
      type: new GraphQLList(UserType),
      resolve: async (root, _, fastify: FastifyType) =>
        await fastify.prisma.user.findMany({
          where: {
            subscribedToUser: {
              some: {
                subscriberId: root.id,
              },
            },
          },
        }),
      fields: () => ({
        subscribedToUser: {
          type: new GraphQLList(UserType),
          resolve: async (root, _, fastify: FastifyType) =>
            await fastify.prisma.user.findMany({
              where: {
                userSubscribedTo: {
                  some: {
                    authorId: root.id,
                  },
                },
              },
            }),
        },
      }),
    },
    subscribedToUser: {
      type: new GraphQLList(UserType),
      resolve: async (root, _, fastify: FastifyType) =>
        await fastify.prisma.user.findMany({
          where: {
            userSubscribedTo: {
              some: {
                authorId: root.id,
              },
            },
          },
        }),
      fields: () => ({
        userSubscribedTo: {
          type: new GraphQLList(UserType),
          resolve: async (root, _, fastify: FastifyType) =>
            await fastify.prisma.user.findMany({
              where: {
                subscribedToUser: {
                  some: {
                    subscriberId: root.id,
                  },
                },
              },
            }),
        },
      }),
    },
  }),
});

export const CreateUserInputType = new GraphQLInputObjectType({
  name: 'CreateUserInput',
  fields: {
    name: { type: new GraphQLNonNull(GraphQLString) },
    balance: { type: new GraphQLNonNull(GraphQLFloat) },
  },
});
