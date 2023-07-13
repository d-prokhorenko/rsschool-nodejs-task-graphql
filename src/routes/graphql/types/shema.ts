import { GraphQLObjectType, GraphQLSchema } from 'graphql';
import { memberTypeSchemaFields } from './member-type/member-type.schema.js';
import { postSchemaFields } from './post/post.schema.js';
import { profileSchemaFields } from './profile/profile.schema.js';
import { userSchemaFields } from './user/user.schema.js';

const RootQueryType = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: () => ({
    ...memberTypeSchemaFields,
    ...postSchemaFields,
    ...userSchemaFields,
    ...profileSchemaFields,
  }),
});

export const Schema: GraphQLSchema = new GraphQLSchema({
  query: RootQueryType,
});
