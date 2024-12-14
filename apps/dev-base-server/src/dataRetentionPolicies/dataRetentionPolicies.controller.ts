import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { DataRetentionPoliciesService } from "./dataRetentionPolicies.service";
import { DataRetentionPoliciesControllerBase } from "./base/dataRetentionPolicies.controller.base";

@swagger.ApiTags("dataRetentionPolicies")
@common.Controller("dataRetentionPolicies")
export class DataRetentionPoliciesController extends DataRetentionPoliciesControllerBase {
  constructor(
    protected readonly service: DataRetentionPoliciesService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
