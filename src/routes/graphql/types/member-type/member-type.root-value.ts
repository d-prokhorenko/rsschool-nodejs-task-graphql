import { FastifyType, RootValue } from '../root-value.js';

export const getMemberTypesRootValue = (fastify: FastifyType): Partial<RootValue> => ({
  getAllMemberTypes: async () => {
    return await fastify.prisma.memberType.findMany();
  },
});
