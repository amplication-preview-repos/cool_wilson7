import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { VisualProgrammingInterfacesServiceBase } from "./base/visualProgrammingInterfaces.service.base";

@Injectable()
export class VisualProgrammingInterfacesService extends VisualProgrammingInterfacesServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
