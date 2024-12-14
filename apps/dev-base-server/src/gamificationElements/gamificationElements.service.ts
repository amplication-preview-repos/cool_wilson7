import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { GamificationElementsServiceBase } from "./base/gamificationElements.service.base";

@Injectable()
export class GamificationElementsService extends GamificationElementsServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
