import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ContinuousAuthenticationModuleBase } from "./base/continuousAuthentication.module.base";
import { ContinuousAuthenticationService } from "./continuousAuthentication.service";
import { ContinuousAuthenticationController } from "./continuousAuthentication.controller";
import { ContinuousAuthenticationResolver } from "./continuousAuthentication.resolver";

@Module({
  imports: [ContinuousAuthenticationModuleBase, forwardRef(() => AuthModule)],
  controllers: [ContinuousAuthenticationController],
  providers: [
    ContinuousAuthenticationService,
    ContinuousAuthenticationResolver,
  ],
  exports: [ContinuousAuthenticationService],
})
export class ContinuousAuthenticationModule {}
