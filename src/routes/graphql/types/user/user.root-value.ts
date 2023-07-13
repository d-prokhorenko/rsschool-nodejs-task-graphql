import { FastifyType, RootValue } from '../root-value.js';

export const getUsersRootValue = (fastify: FastifyType): Partial<RootValue> => ({
  getAllUsers: async () => await fastify.prisma.user.findMany(),
  getUserById: async ({ id }: { id: string }) => {
    const user = await fastify.prisma.user.findUnique({
      where: {
        id,
      },
    });

    if (user) {
      return user;
    } else {
      throw new Error('User not found');
    }
  },
});
