import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLNonNull,
  GraphQLList,
} from 'graphql';
import { UUIDType } from '../uuid.js';
import { ProfileType } from '../profile/profile.type.js';
import { PostType } from '../post/post.type.js';

export const UserType = new GraphQLObjectType({
  name: 'User',
  description: 'User data',
  fields: () => ({
    id: { type: new GraphQLNonNull(UUIDType) },
    name: { type: GraphQLString },
    balance: { type: GraphQLInt },
    profile: { type: ProfileType },
    posts: { type: new GraphQLList(PostType) },
  }),
});
