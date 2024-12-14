import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { StreamProcessingResolverBase } from "./base/streamProcessing.resolver.base";
import { StreamProcessing } from "./base/StreamProcessing";
import { StreamProcessingService } from "./streamProcessing.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => StreamProcessing)
export class StreamProcessingResolver extends StreamProcessingResolverBase {
  constructor(
    protected readonly service: StreamProcessingService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
