import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AdaptiveUiComponentsServiceBase } from "./base/adaptiveUiComponents.service.base";

@Injectable()
export class AdaptiveUiComponentsService extends AdaptiveUiComponentsServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
