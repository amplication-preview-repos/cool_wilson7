import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { StatefulServerlessServiceBase } from "./base/statefulServerless.service.base";

@Injectable()
export class StatefulServerlessService extends StatefulServerlessServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
