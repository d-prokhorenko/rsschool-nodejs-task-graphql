/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import { GraphQLNonNull, GraphQLList, GraphQLString, GraphQLInt } from 'graphql';
import { RootValue } from '../root-value.js';
import { UserType } from './user.type.js';
import { UUIDType } from '../uuid.js';

export const userSchemaQueryFields = {
  users: {
    type: new GraphQLNonNull(new GraphQLList(new GraphQLNonNull(UserType))),
    resolve: async ({ getAllUsers }: RootValue) => await getAllUsers(),
  },
  user: {
    type: UserType,
    args: {
      id: { type: new GraphQLNonNull(UUIDType) },
    },
    resolve: async ({ getUserById }: RootValue, args: { id: string }) =>
      await getUserById(args),
  },
};

export const userSchemaMutationFields = {
  createUser: {
    type: UserType,
    args: {
      dto: {
        name: { type: new GraphQLNonNull(GraphQLString) },
        balance: { type: new GraphQLNonNull(GraphQLInt) },
      },
    },
    resolve: async ({ createUser }: RootValue, args) => {
      return await createUser(args.dto);
    },
  },
};
