import { GraphQLObjectType, GraphQLNonNull, GraphQLID, GraphQLInt } from 'graphql';

export const MemberTypeType = new GraphQLObjectType({
  name: 'MemberType',
  description: 'MemberType data',
  fields: () => ({
    id: { type: new GraphQLNonNull(GraphQLID) },
    discount: { type: GraphQLInt },
    postsLimitPerMonth: { type: GraphQLInt },
  }),
});
