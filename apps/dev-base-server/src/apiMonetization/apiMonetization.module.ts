import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ApiMonetizationModuleBase } from "./base/apiMonetization.module.base";
import { ApiMonetizationService } from "./apiMonetization.service";
import { ApiMonetizationController } from "./apiMonetization.controller";
import { ApiMonetizationResolver } from "./apiMonetization.resolver";

@Module({
  imports: [ApiMonetizationModuleBase, forwardRef(() => AuthModule)],
  controllers: [ApiMonetizationController],
  providers: [ApiMonetizationService, ApiMonetizationResolver],
  exports: [ApiMonetizationService],
})
export class ApiMonetizationModule {}
