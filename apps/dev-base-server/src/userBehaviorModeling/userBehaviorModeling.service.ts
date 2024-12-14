import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { UserBehaviorModelingServiceBase } from "./base/userBehaviorModeling.service.base";

@Injectable()
export class UserBehaviorModelingService extends UserBehaviorModelingServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
