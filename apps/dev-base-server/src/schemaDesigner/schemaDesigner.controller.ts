import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { SchemaDesignerService } from "./schemaDesigner.service";
import { SchemaDesignerControllerBase } from "./base/schemaDesigner.controller.base";

@swagger.ApiTags("schemaDesigners")
@common.Controller("schemaDesigners")
export class SchemaDesignerController extends SchemaDesignerControllerBase {
  constructor(
    protected readonly service: SchemaDesignerService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
