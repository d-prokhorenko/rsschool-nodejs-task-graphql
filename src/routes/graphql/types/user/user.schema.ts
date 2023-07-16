/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import { GraphQLNonNull, GraphQLList } from 'graphql';
import { RootValue } from '../root-value.js';
import { ChangeUserInputType, CreateUserInputType, UserType } from './user.type.js';
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
      dto: { type: CreateUserInputType },
    },
    resolve: async ({ createUser }: RootValue, { dto }) => {
      return await createUser(dto);
    },
  },
  deleteUser: {
    type: UserType,
    args: {
      id: { type: new GraphQLNonNull(UUIDType) },
    },
    resolve: async ({ deleteUser }: RootValue, args) => {
      return await deleteUser(args);
    },
  },
  changeUser: {
    type: UserType,
    args: {
      id: { type: new GraphQLNonNull(UUIDType) },
      dto: { type: ChangeUserInputType },
    },
    resolve: async ({ changeUser }: RootValue, args) => {
      return await changeUser(args);
    },
  },
};
