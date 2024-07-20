import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { DecentralizedIdentityModuleBase } from "./base/decentralizedIdentity.module.base";
import { DecentralizedIdentityService } from "./decentralizedIdentity.service";
import { DecentralizedIdentityController } from "./decentralizedIdentity.controller";
import { DecentralizedIdentityResolver } from "./decentralizedIdentity.resolver";

@Module({
  imports: [DecentralizedIdentityModuleBase, forwardRef(() => AuthModule)],
  controllers: [DecentralizedIdentityController],
  providers: [DecentralizedIdentityService, DecentralizedIdentityResolver],
  exports: [DecentralizedIdentityService],
})
export class DecentralizedIdentityModule {}
