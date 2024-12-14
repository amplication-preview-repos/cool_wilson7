import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { EmotionAiService } from "./emotionAi.service";
import { EmotionAiControllerBase } from "./base/emotionAi.controller.base";

@swagger.ApiTags("emotionAis")
@common.Controller("emotionAis")
export class EmotionAiController extends EmotionAiControllerBase {
  constructor(
    protected readonly service: EmotionAiService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
