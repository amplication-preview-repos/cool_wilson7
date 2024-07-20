import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { RealTimeTranslationService } from "./realTimeTranslation.service";
import { RealTimeTranslationControllerBase } from "./base/realTimeTranslation.controller.base";

@swagger.ApiTags("realTimeTranslations")
@common.Controller("realTimeTranslations")
export class RealTimeTranslationController extends RealTimeTranslationControllerBase {
  constructor(
    protected readonly service: RealTimeTranslationService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
