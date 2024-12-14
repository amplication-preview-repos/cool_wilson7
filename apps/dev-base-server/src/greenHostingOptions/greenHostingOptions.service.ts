import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { GreenHostingOptionsServiceBase } from "./base/greenHostingOptions.service.base";

@Injectable()
export class GreenHostingOptionsService extends GreenHostingOptionsServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
