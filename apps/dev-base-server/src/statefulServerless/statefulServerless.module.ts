import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { StatefulServerlessModuleBase } from "./base/statefulServerless.module.base";
import { StatefulServerlessService } from "./statefulServerless.service";
import { StatefulServerlessController } from "./statefulServerless.controller";
import { StatefulServerlessResolver } from "./statefulServerless.resolver";

@Module({
  imports: [StatefulServerlessModuleBase, forwardRef(() => AuthModule)],
  controllers: [StatefulServerlessController],
  providers: [StatefulServerlessService, StatefulServerlessResolver],
  exports: [StatefulServerlessService],
})
export class StatefulServerlessModule {}
