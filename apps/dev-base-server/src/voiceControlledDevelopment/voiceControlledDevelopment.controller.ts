import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { VoiceControlledDevelopmentService } from "./voiceControlledDevelopment.service";
import { VoiceControlledDevelopmentControllerBase } from "./base/voiceControlledDevelopment.controller.base";

@swagger.ApiTags("voiceControlledDevelopments")
@common.Controller("voiceControlledDevelopments")
export class VoiceControlledDevelopmentController extends VoiceControlledDevelopmentControllerBase {
  constructor(
    protected readonly service: VoiceControlledDevelopmentService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
