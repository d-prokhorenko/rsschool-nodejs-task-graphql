import { FastifyType, RootValue } from '../root-value.js';

export const getUsersRootValue = (fastify: FastifyType): Partial<RootValue> => ({
  getAllUsers: async () => {
    return await fastify.prisma.user.findMany();
  },
  getUserById: async ({ id }: { id: string }) => {
    const user = await fastify.prisma.user.findUnique({
      where: {
        id,
      },
    });

    if (user) {
      const profile = await fastify.prisma.profile.findUnique({
        where: {
          userId: id,
        },
      });
      const memberType = profile
        ? await fastify.prisma.memberType.findUnique({
            where: {
              id: profile.memberTypeId,
            },
          })
        : null;
      const posts = await fastify.prisma.post.findMany({
        where: {
          authorId: id,
        },
      });

      return {
        ...user,
        profile: profile
          ? {
              ...profile,
              memberType,
            }
          : null,
        posts,
      };
    }

    return user;
  },
});
