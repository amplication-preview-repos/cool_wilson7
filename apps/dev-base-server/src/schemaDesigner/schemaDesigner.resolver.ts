import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { SchemaDesignerResolverBase } from "./base/schemaDesigner.resolver.base";
import { SchemaDesigner } from "./base/SchemaDesigner";
import { SchemaDesignerService } from "./schemaDesigner.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => SchemaDesigner)
export class SchemaDesignerResolver extends SchemaDesignerResolverBase {
  constructor(
    protected readonly service: SchemaDesignerService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
