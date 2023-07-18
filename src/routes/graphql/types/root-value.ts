/* eslint-disable @typescript-eslint/no-explicit-any */
import { TypeBoxTypeProvider } from '@fastify/type-provider-typebox';
import { FastifyInstance, RawServerDefault, FastifyBaseLogger } from 'fastify';
import { IncomingMessage, ServerResponse } from 'http';
import { getMemberTypesRootValue } from './member-type/member-type.root-value.js';
import { getPostsRootValue } from './post/post.root-value.js';
import { getProfilesRootValue } from './profile/profile.root-value.js';
import { getUsersRootValue } from './user/user.root-value.js';

export interface RootValue {
  [key: string]: any;
}

export type FastifyType = FastifyInstance<
  RawServerDefault,
  IncomingMessage,
  ServerResponse<IncomingMessage>,
  FastifyBaseLogger,
  TypeBoxTypeProvider
>;

export function getRootValue(fastify: FastifyType): RootValue {
  return {
    ...getMemberTypesRootValue(fastify),
    ...getPostsRootValue(fastify),
    ...getUsersRootValue(fastify),
    ...getProfilesRootValue(fastify),
  };
}
