import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { GreenHostingOptionsModuleBase } from "./base/greenHostingOptions.module.base";
import { GreenHostingOptionsService } from "./greenHostingOptions.service";
import { GreenHostingOptionsController } from "./greenHostingOptions.controller";
import { GreenHostingOptionsResolver } from "./greenHostingOptions.resolver";

@Module({
  imports: [GreenHostingOptionsModuleBase, forwardRef(() => AuthModule)],
  controllers: [GreenHostingOptionsController],
  providers: [GreenHostingOptionsService, GreenHostingOptionsResolver],
  exports: [GreenHostingOptionsService],
})
export class GreenHostingOptionsModule {}
