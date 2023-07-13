import { FastifyPluginAsyncTypebox } from '@fastify/type-provider-typebox';
import { createGqlResponse, gqlResponse } from './schemas.js';
import { graphql } from 'graphql';
import { getRootValue } from './types/root-value.js';
import { Schema } from './types/shema.js';

const plugin: FastifyPluginAsyncTypebox = async (fastify) => {
  fastify.route({
    url: '/',
    method: 'POST',
    schema: {
      ...createGqlResponse,
      response: {
        200: gqlResponse,
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
