import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { PasswordlessAuthenticationService } from "./passwordlessAuthentication.service";
import { PasswordlessAuthenticationControllerBase } from "./base/passwordlessAuthentication.controller.base";

@swagger.ApiTags("passwordlessAuthentications")
@common.Controller("passwordlessAuthentications")
export class PasswordlessAuthenticationController extends PasswordlessAuthenticationControllerBase {
  constructor(
    protected readonly service: PasswordlessAuthenticationService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
