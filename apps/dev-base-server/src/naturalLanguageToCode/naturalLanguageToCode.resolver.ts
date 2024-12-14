import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { NaturalLanguageToCodeResolverBase } from "./base/naturalLanguageToCode.resolver.base";
import { NaturalLanguageToCode } from "./base/NaturalLanguageToCode";
import { NaturalLanguageToCodeService } from "./naturalLanguageToCode.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => NaturalLanguageToCode)
export class NaturalLanguageToCodeResolver extends NaturalLanguageToCodeResolverBase {
  constructor(
    protected readonly service: NaturalLanguageToCodeService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
