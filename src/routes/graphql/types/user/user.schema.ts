/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import { GraphQLNonNull, GraphQLList } from 'graphql';
import { RootValue } from '../root-value.js';
import { UserType } from './user.type.js';
import { UUIDType } from '../uuid.js';

export const userSchemaFields = {
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
