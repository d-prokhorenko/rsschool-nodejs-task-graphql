import { FastifyType, RootValue } from '../root-value.js';

export const getProfilesRootValue = (fastify: FastifyType): Partial<RootValue> => ({
  getAllProfiles: async () => await fastify.prisma.profile.findMany(),
  getProfileById: async ({ id }: { id: string }) => {
    const profile = await fastify.prisma.profile.findUnique({
      where: {
        id,
      },
    });

    if (profile) {
      return profile;
    } else {
      throw new Error('Profile not found');
    }
  },
});
