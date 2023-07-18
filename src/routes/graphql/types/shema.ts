/* eslint-disable @typescript-eslint/no-unsafe-return */
import { GraphQLObjectType, GraphQLSchema } from 'graphql';
import {
  memberTypeSchemaMutationFields,
  memberTypeSchemaQueryFields,
} from './member-type/member-type.schema.js';
import { postSchemaMutationFields, postSchemaQueryFields } from './post/post.schema.js';
import {
  profileSchemaMutationFields,
  profileSchemaQueryFields,
} from './profile/profile.schema.js';
import { userSchemaMutationFields, userSchemaQueryFields } from './user/user.schema.js';

const RootQueryType = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: () => ({
    ...memberTypeSchemaQueryFields,
    ...postSchemaQueryFields,
    ...userSchemaQueryFields,
    ...profileSchemaQueryFields,
  }),
});

const RootMutationType = new GraphQLObjectType({
  name: 'RootMutationType',
  fields: () => ({
    ...memberTypeSchemaMutationFields,
    ...postSchemaMutationFields,
    ...userSchemaMutationFields,
    ...profileSchemaMutationFields,
  }),
});

export const Schema: GraphQLSchema = new GraphQLSchema({
  query: RootQueryType,
  mutation: RootMutationType,
});
