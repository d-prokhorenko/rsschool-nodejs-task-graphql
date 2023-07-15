import { FastifyType, RootValue } from '../root-value.js';

export const getProfilesRootValue = (fastify: FastifyType): Partial<RootValue> => ({
  getAllProfiles: async () => await fastify.prisma.profile.findMany(),
  getProfileById: async ({ id }: { id: string }) => {
    const profile = await fastify.prisma.profile.findUnique({
      where: {
        id,
      },
    });

    return profile;
  },
});
