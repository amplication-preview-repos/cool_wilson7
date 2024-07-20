import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { DigitalTwinSupportResolverBase } from "./base/digitalTwinSupport.resolver.base";
import { DigitalTwinSupport } from "./base/DigitalTwinSupport";
import { DigitalTwinSupportService } from "./digitalTwinSupport.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => DigitalTwinSupport)
export class DigitalTwinSupportResolver extends DigitalTwinSupportResolverBase {
  constructor(
    protected readonly service: DigitalTwinSupportService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
