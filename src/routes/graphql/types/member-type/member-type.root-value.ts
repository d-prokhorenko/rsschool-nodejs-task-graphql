import { MemberTypeId } from '../../../member-types/schemas.js';
import { FastifyType, RootValue } from '../root-value.js';

export const getMemberTypesRootValue = (fastify: FastifyType): Partial<RootValue> => ({
  getAllMemberTypes: async () => await fastify.prisma.memberType.findMany(),
  getMemberTypeById: async ({ id }: { id: MemberTypeId }) => {
    const memberType = await fastify.prisma.memberType.findUnique({
      where: {
        id,
      },
    });

    return memberType;
  },
});
