import { GraphQLObjectType, GraphQLNonNull, GraphQLInt, GraphQLEnumType } from 'graphql';
import { MemberTypeId } from '../../../member-types/schemas.js';

export const MemberTypeIdEnum = new GraphQLEnumType({
  name: 'MemberTypeId',
  description: 'Member types',
  values: {
    [MemberTypeId.BASIC]: {
      value: MemberTypeId.BASIC,
    },
    [MemberTypeId.BUSINESS]: {
      value: MemberTypeId.BUSINESS,
    },
  },
});

export const MemberType = new GraphQLObjectType({
  name: 'MemberType',
  description: 'MemberType data',
  fields: () => ({
    id: { type: new GraphQLNonNull(MemberTypeIdEnum) },
    discount: { type: GraphQLInt },
    postsLimitPerMonth: { type: GraphQLInt },
  }),
});
