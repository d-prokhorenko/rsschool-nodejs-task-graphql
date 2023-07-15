/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import { GraphQLNonNull, GraphQLList } from 'graphql';
import { RootValue } from '../root-value.js';
import { MemberType, MemberTypeIdEnum } from './member-type.type.js';
import { MemberTypeId } from '../../../member-types/schemas.js';

export const memberTypeSchemaQueryFields = {
  memberTypes: {
    type: new GraphQLNonNull(new GraphQLList(new GraphQLNonNull(MemberType))),
    resolve: async ({ getAllMemberTypes }: RootValue) => await getAllMemberTypes(),
  },
  memberType: {
    type: MemberType,
    args: {
      id: { type: new GraphQLNonNull(MemberTypeIdEnum) },
    },
    resolve: async ({ getMemberTypeById }: RootValue, args: { id: MemberTypeId }) =>
      await getMemberTypeById(args),
  },
};

export const memberTypeSchemaMutationFields = {};
