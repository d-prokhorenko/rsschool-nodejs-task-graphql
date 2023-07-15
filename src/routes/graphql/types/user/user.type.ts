import { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLNonNull } from 'graphql';
import { UUIDType } from '../uuid.js';
import { ProfileType } from '../profile/profile.type.js';

export const UserType = new GraphQLObjectType({
  name: 'User',
  description: 'User data',
  fields: () => ({
    id: { type: new GraphQLNonNull(UUIDType) },
    name: { type: GraphQLString },
    balance: { type: GraphQLInt },
    profile: { type: ProfileType },
  }),
});
