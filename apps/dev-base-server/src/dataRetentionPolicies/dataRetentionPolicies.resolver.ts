import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { DataRetentionPoliciesResolverBase } from "./base/dataRetentionPolicies.resolver.base";
import { DataRetentionPolicies } from "./base/DataRetentionPolicies";
import { DataRetentionPoliciesService } from "./dataRetentionPolicies.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => DataRetentionPolicies)
export class DataRetentionPoliciesResolver extends DataRetentionPoliciesResolverBase {
  constructor(
    protected readonly service: DataRetentionPoliciesService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
