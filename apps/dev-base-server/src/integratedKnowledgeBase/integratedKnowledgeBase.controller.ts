import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { IntegratedKnowledgeBaseService } from "./integratedKnowledgeBase.service";
import { IntegratedKnowledgeBaseControllerBase } from "./base/integratedKnowledgeBase.controller.base";

@swagger.ApiTags("integratedKnowledgeBases")
@common.Controller("integratedKnowledgeBases")
export class IntegratedKnowledgeBaseController extends IntegratedKnowledgeBaseControllerBase {
  constructor(
    protected readonly service: IntegratedKnowledgeBaseService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
