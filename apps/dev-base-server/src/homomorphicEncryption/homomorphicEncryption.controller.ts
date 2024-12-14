import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { HomomorphicEncryptionService } from "./homomorphicEncryption.service";
import { HomomorphicEncryptionControllerBase } from "./base/homomorphicEncryption.controller.base";

@swagger.ApiTags("homomorphicEncryptions")
@common.Controller("homomorphicEncryptions")
export class HomomorphicEncryptionController extends HomomorphicEncryptionControllerBase {
  constructor(
    protected readonly service: HomomorphicEncryptionService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
