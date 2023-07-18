/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-return */
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
  createProfile: async (data) =>
    await fastify.prisma.profile.create({
      data,
    }),
  deleteProfile: async ({ id }) =>
    await fastify.prisma.profile.delete({
      where: {
        id,
      },
    }),
  changeProfile: async ({ id, isMale }) =>
    await fastify.prisma.profile.update({
      where: { id },
      data: {
        isMale,
      },
    }),
});
