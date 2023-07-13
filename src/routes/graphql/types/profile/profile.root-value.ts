import { FastifyType, RootValue } from '../root-value.js';

export const getProfilesRootValue = (fastify: FastifyType): Partial<RootValue> => ({
  getAllProfiles: async () => {
    return await fastify.prisma.profile.findMany();
  },
});
