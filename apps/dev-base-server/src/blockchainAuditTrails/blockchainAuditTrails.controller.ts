import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { BlockchainAuditTrailsService } from "./blockchainAuditTrails.service";
import { BlockchainAuditTrailsControllerBase } from "./base/blockchainAuditTrails.controller.base";

@swagger.ApiTags("blockchainAuditTrails")
@common.Controller("blockchainAuditTrails")
export class BlockchainAuditTrailsController extends BlockchainAuditTrailsControllerBase {
  constructor(
    protected readonly service: BlockchainAuditTrailsService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
