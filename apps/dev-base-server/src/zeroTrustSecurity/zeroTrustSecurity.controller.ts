import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ZeroTrustSecurityService } from "./zeroTrustSecurity.service";
import { ZeroTrustSecurityControllerBase } from "./base/zeroTrustSecurity.controller.base";

@swagger.ApiTags("zeroTrustSecurities")
@common.Controller("zeroTrustSecurities")
export class ZeroTrustSecurityController extends ZeroTrustSecurityControllerBase {
  constructor(
    protected readonly service: ZeroTrustSecurityService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
