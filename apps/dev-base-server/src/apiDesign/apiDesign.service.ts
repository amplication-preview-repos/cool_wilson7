import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ApiDesignServiceBase } from "./base/apiDesign.service.base";

@Injectable()
export class ApiDesignService extends ApiDesignServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
