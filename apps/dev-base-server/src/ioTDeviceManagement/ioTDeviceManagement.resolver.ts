import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { IoTDeviceManagementResolverBase } from "./base/ioTDeviceManagement.resolver.base";
import { IoTDeviceManagement } from "./base/IoTDeviceManagement";
import { IoTDeviceManagementService } from "./ioTDeviceManagement.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => IoTDeviceManagement)
export class IoTDeviceManagementResolver extends IoTDeviceManagementResolverBase {
  constructor(
    protected readonly service: IoTDeviceManagementService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
