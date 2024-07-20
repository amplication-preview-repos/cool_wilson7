import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { DocumentDatabaseService } from "./documentDatabase.service";
import { DocumentDatabaseControllerBase } from "./base/documentDatabase.controller.base";

@swagger.ApiTags("documentDatabases")
@common.Controller("documentDatabases")
export class DocumentDatabaseController extends DocumentDatabaseControllerBase {
  constructor(
    protected readonly service: DocumentDatabaseService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
