import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { VoiceControlledDevelopmentResolverBase } from "./base/voiceControlledDevelopment.resolver.base";
import { VoiceControlledDevelopment } from "./base/VoiceControlledDevelopment";
import { VoiceControlledDevelopmentService } from "./voiceControlledDevelopment.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => VoiceControlledDevelopment)
export class VoiceControlledDevelopmentResolver extends VoiceControlledDevelopmentResolverBase {
  constructor(
    protected readonly service: VoiceControlledDevelopmentService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
