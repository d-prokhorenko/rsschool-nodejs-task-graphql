/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { FastifyType, RootValue } from '../root-value.js';

export const getPostsRootValue = (fastify: FastifyType): Partial<RootValue> => ({
  getAllPosts: async () => await fastify.prisma.post.findMany(),
  getPostById: async ({ id }: { id: string }) => {
    const post = await fastify.prisma.post.findUnique({
      where: {
        id,
      },
    });

    return post;
  },
  createPost: async (data) => await fastify.prisma.post.create({ data }),
  deletePost: async ({ id }) =>
    await fastify.prisma.post.delete({
      where: {
        id,
      },
    }),
  changePost: async ({ id, title }) =>
    await fastify.prisma.post.update({
      where: { id },
      data: {
        title,
      },
    }),
});
