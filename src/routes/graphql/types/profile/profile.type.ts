import { GraphQLObjectType, GraphQLBoolean, GraphQLInt } from 'graphql';
import { UUIDType } from '../uuid.js';
import { MemberTypeIdEnum } from '../member-type/member-type.type.js';

export const ProfileType = new GraphQLObjectType({
  name: 'Profile',
  description: 'Profile data',
  fields: () => ({
    id: { type: UUIDType },
    isMale: { type: GraphQLBoolean },
    yearOfBirth: { type: GraphQLInt },
    userId: { type: UUIDType },
    memberTypeId: { type: MemberTypeIdEnum },
  }),
});
