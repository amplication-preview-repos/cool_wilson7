import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ServerlessContainersServiceBase } from "./base/serverlessContainers.service.base";

@Injectable()
export class ServerlessContainersService extends ServerlessContainersServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
