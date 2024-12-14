import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ZeroTrustSecurityModuleBase } from "./base/zeroTrustSecurity.module.base";
import { ZeroTrustSecurityService } from "./zeroTrustSecurity.service";
import { ZeroTrustSecurityController } from "./zeroTrustSecurity.controller";
import { ZeroTrustSecurityResolver } from "./zeroTrustSecurity.resolver";

@Module({
  imports: [ZeroTrustSecurityModuleBase, forwardRef(() => AuthModule)],
  controllers: [ZeroTrustSecurityController],
  providers: [ZeroTrustSecurityService, ZeroTrustSecurityResolver],
  exports: [ZeroTrustSecurityService],
})
export class ZeroTrustSecurityModule {}
