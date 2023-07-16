/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import { GraphQLNonNull, GraphQLList } from 'graphql';
import { RootValue } from '../root-value.js';
import {
  ChangeProfileInputType,
  CreateProfileInputType,
  ProfileType,
} from './profile.type.js';
import { UUIDType } from '../uuid.js';

export const profileSchemaQueryFields = {
  profiles: {
    type: new GraphQLNonNull(new GraphQLList(new GraphQLNonNull(ProfileType))),
    resolve: async ({ getAllProfiles }: RootValue) => await getAllProfiles(),
  },
  profile: {
    type: ProfileType,
    args: {
      id: { type: new GraphQLNonNull(UUIDType) },
    },
    resolve: async ({ getProfileById }: RootValue, args: { id: string }) =>
      await getProfileById(args),
  },
};

export const profileSchemaMutationFields = {
  createProfile: {
    type: ProfileType,
    args: {
      dto: { type: CreateProfileInputType },
    },
    resolve: async ({ createProfile }: RootValue, { dto }) => {
      return await createProfile(dto);
    },
  },
  deleteProfile: {
    type: ProfileType,
    args: {
      id: { type: new GraphQLNonNull(UUIDType) },
    },
    resolve: async ({ deleteProfile }: RootValue, args) => {
      return await deleteProfile(args);
    },
  },
  changeProfile: {
    type: ProfileType,
    args: {
      id: { type: new GraphQLNonNull(UUIDType) },
      dto: { type: ChangeProfileInputType },
    },
    resolve: async ({ changeProfile }: RootValue, args) => {
      return await changeProfile(args);
    },
  },
};
