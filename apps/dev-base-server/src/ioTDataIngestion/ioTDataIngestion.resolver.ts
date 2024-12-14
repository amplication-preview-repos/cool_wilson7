import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { IoTDataIngestionResolverBase } from "./base/ioTDataIngestion.resolver.base";
import { IoTDataIngestion } from "./base/IoTDataIngestion";
import { IoTDataIngestionService } from "./ioTDataIngestion.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => IoTDataIngestion)
export class IoTDataIngestionResolver extends IoTDataIngestionResolverBase {
  constructor(
    protected readonly service: IoTDataIngestionService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
