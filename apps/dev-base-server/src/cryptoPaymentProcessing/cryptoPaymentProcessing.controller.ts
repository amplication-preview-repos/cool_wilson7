import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { CryptoPaymentProcessingService } from "./cryptoPaymentProcessing.service";
import { CryptoPaymentProcessingControllerBase } from "./base/cryptoPaymentProcessing.controller.base";

@swagger.ApiTags("cryptoPaymentProcessings")
@common.Controller("cryptoPaymentProcessings")
export class CryptoPaymentProcessingController extends CryptoPaymentProcessingControllerBase {
  constructor(
    protected readonly service: CryptoPaymentProcessingService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
