import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { EmotionAiResolverBase } from "./base/emotionAi.resolver.base";
import { EmotionAi } from "./base/EmotionAi";
import { EmotionAiService } from "./emotionAi.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => EmotionAi)
export class EmotionAiResolver extends EmotionAiResolverBase {
  constructor(
    protected readonly service: EmotionAiService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
