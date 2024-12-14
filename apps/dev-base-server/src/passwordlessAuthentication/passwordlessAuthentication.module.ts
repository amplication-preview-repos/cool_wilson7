import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { PasswordlessAuthenticationModuleBase } from "./base/passwordlessAuthentication.module.base";
import { PasswordlessAuthenticationService } from "./passwordlessAuthentication.service";
import { PasswordlessAuthenticationController } from "./passwordlessAuthentication.controller";
import { PasswordlessAuthenticationResolver } from "./passwordlessAuthentication.resolver";

@Module({
  imports: [PasswordlessAuthenticationModuleBase, forwardRef(() => AuthModule)],
  controllers: [PasswordlessAuthenticationController],
  providers: [
    PasswordlessAuthenticationService,
    PasswordlessAuthenticationResolver,
  ],
  exports: [PasswordlessAuthenticationService],
})
export class PasswordlessAuthenticationModule {}
