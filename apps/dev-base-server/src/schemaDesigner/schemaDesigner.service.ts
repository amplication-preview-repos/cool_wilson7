import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SchemaDesignerServiceBase } from "./base/schemaDesigner.service.base";

@Injectable()
export class SchemaDesignerService extends SchemaDesignerServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
