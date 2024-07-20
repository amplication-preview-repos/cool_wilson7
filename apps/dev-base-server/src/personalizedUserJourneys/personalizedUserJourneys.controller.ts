import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { PersonalizedUserJourneysService } from "./personalizedUserJourneys.service";
import { PersonalizedUserJourneysControllerBase } from "./base/personalizedUserJourneys.controller.base";

@swagger.ApiTags("personalizedUserJourneys")
@common.Controller("personalizedUserJourneys")
export class PersonalizedUserJourneysController extends PersonalizedUserJourneysControllerBase {
  constructor(
    protected readonly service: PersonalizedUserJourneysService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
