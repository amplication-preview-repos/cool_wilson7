import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PersonalizedUserJourneysServiceBase } from "./base/personalizedUserJourneys.service.base";

@Injectable()
export class PersonalizedUserJourneysService extends PersonalizedUserJourneysServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
