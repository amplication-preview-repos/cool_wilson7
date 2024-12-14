import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { NaturalLanguageToCodeService } from "./naturalLanguageToCode.service";
import { NaturalLanguageToCodeControllerBase } from "./base/naturalLanguageToCode.controller.base";

@swagger.ApiTags("naturalLanguageToCodes")
@common.Controller("naturalLanguageToCodes")
export class NaturalLanguageToCodeController extends NaturalLanguageToCodeControllerBase {
  constructor(
    protected readonly service: NaturalLanguageToCodeService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
