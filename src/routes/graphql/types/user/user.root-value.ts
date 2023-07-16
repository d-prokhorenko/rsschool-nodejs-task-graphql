/* eslint-disable @typescript-eslint/no-unsafe-assignment */
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
  createUser: async (data) => {
    return await fastify.prisma.user.create({
      data,
    });
  },
  deleteUser: async ({ id }) =>
    await fastify.prisma.user.delete({
      where: {
        id,
      },
    }),
  changeUser: async ({ id, name }) =>
    await fastify.prisma.user.update({
      where: { id },
      data: {
        name,
      },
    }),
});
