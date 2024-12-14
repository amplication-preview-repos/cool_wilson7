import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { DecentralizedStorageService } from "./decentralizedStorage.service";
import { DecentralizedStorageControllerBase } from "./base/decentralizedStorage.controller.base";

@swagger.ApiTags("decentralizedStorages")
@common.Controller("decentralizedStorages")
export class DecentralizedStorageController extends DecentralizedStorageControllerBase {
  constructor(
    protected readonly service: DecentralizedStorageService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
