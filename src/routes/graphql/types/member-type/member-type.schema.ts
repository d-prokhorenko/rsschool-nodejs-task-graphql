/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import { GraphQLNonNull, GraphQLList } from 'graphql';
import { RootValue } from '../root-value.js';
import { MemberType } from './member-type.type.js';

export const memberTypeSchemaFields = {
  memberTypes: {
    type: new GraphQLNonNull(new GraphQLList(new GraphQLNonNull(MemberType))),
    resolve: async ({ getAllMemberTypes }: RootValue) => await getAllMemberTypes(),
  },
};
