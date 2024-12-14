import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CollaborativeCodingEnvironmentsServiceBase } from "./base/collaborativeCodingEnvironments.service.base";

@Injectable()
export class CollaborativeCodingEnvironmentsService extends CollaborativeCodingEnvironmentsServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
