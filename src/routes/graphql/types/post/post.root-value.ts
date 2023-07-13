import { FastifyType, RootValue } from '../root-value.js';

export const getPostsRootValue = (fastify: FastifyType): Partial<RootValue> => ({
  getAllPosts: async () => {
    return await fastify.prisma.post.findMany();
  },
});
