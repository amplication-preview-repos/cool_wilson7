import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { UserBehaviorModelingModuleBase } from "./base/userBehaviorModeling.module.base";
import { UserBehaviorModelingService } from "./userBehaviorModeling.service";
import { UserBehaviorModelingController } from "./userBehaviorModeling.controller";
import { UserBehaviorModelingResolver } from "./userBehaviorModeling.resolver";

@Module({
  imports: [UserBehaviorModelingModuleBase, forwardRef(() => AuthModule)],
  controllers: [UserBehaviorModelingController],
  providers: [UserBehaviorModelingService, UserBehaviorModelingResolver],
  exports: [UserBehaviorModelingService],
})
export class UserBehaviorModelingModule {}
