import { FastifyType, RootValue } from '../root-value.js';

export const getUsersRootValue = (fastify: FastifyType): Partial<RootValue> => ({
  getAllUsers: async () => {
    return await fastify.prisma.user.findMany();
  },
  getUserById: async ({ id }: { id: string }) => {
    return await fastify.prisma.user.findUnique({
      where: {
        id,
      },
    });
  },
});
