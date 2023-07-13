import { GraphQLList, GraphQLNonNull, GraphQLObjectType, GraphQLSchema } from 'graphql';
import { RootValue } from './root-value.js';
import { UserType } from './user/user.type.js';
import { ProfileType } from './profile/profile.type.js';
import { PostType } from './post/post.type.js';
import { memberTypeSchemaFields } from './member-type/member-type.schema.js';
import { postSchemaFields } from './post/post.schema.js';
import { profileSchemaFields } from './profile/profile.schema.js';
import { userSchemaFields } from './user/user.schema.js';

const queryType = new GraphQLObjectType({
  name: 'Query',
  fields: () => ({
    ...memberTypeSchemaFields,
    ...postSchemaFields,
    ...userSchemaFields,
    ...profileSchemaFields,
  }),
});

export const Schema: GraphQLSchema = new GraphQLSchema({
  query: queryType,
});
