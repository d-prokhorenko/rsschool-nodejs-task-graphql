import {
  GraphQLObjectType,
  GraphQLBoolean,
  GraphQLInt,
  GraphQLInputObjectType,
  GraphQLNonNull,
} from 'graphql';
import { UUIDType } from '../uuid.js';
import { MemberType, MemberTypeIdEnum } from '../member-type/member-type.type.js';

export const ProfileType = new GraphQLObjectType({
  name: 'Profile',
  description: 'Profile data',
  fields: () => ({
    id: { type: UUIDType },
    isMale: { type: GraphQLBoolean },
    yearOfBirth: { type: GraphQLInt },
    userId: { type: UUIDType },
    memberTypeId: { type: MemberTypeIdEnum },
    memberType: { type: MemberType },
  }),
});

export const CreateProfileInputType = new GraphQLInputObjectType({
  name: 'CreateProfileInput',
  fields: {
    isMale: { type: new GraphQLNonNull(GraphQLBoolean) },
    yearOfBirth: { type: new GraphQLNonNull(GraphQLInt) },
    userId: { type: new GraphQLNonNull(UUIDType) },
    memberTypeId: { type: new GraphQLNonNull(MemberTypeIdEnum) },
  },
});
