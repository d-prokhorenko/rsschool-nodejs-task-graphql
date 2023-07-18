import { FastifyPluginAsyncTypebox } from '@fastify/type-provider-typebox';
import { createGqlResponseSchema, gqlResponseSchema } from './schemas.js';
import { graphql } from 'graphql';
import { getRootValue } from './types/root-value.js';
import { Schema } from './types/shema.js';

const plugin: FastifyPluginAsyncTypebox = async (fastify) => {
  fastify.route({
    url: '/',
    method: 'POST',
    schema: {
      ...createGqlResponseSchema,
      response: {
        200: gqlResponseSchema,
      },
    },
    async handler(req) {
      const { query, variables } = req.body;

      return await graphql({
        schema: Schema,
        source: query,
        rootValue: getRootValue(fastify),
        contextValue: fastify,
        variableValues: variables,
      });
    },
  });
};

export default plugin;
