import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { CrossPlatformDevelopmentModuleBase } from "./base/crossPlatformDevelopment.module.base";
import { CrossPlatformDevelopmentService } from "./crossPlatformDevelopment.service";
import { CrossPlatformDevelopmentController } from "./crossPlatformDevelopment.controller";
import { CrossPlatformDevelopmentResolver } from "./crossPlatformDevelopment.resolver";

@Module({
  imports: [CrossPlatformDevelopmentModuleBase, forwardRef(() => AuthModule)],
  controllers: [CrossPlatformDevelopmentController],
  providers: [
    CrossPlatformDevelopmentService,
    CrossPlatformDevelopmentResolver,
  ],
  exports: [CrossPlatformDevelopmentService],
})
export class CrossPlatformDevelopmentModule {}
