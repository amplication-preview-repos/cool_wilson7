import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { AutoMlModuleBase } from "./base/autoMl.module.base";
import { AutoMlService } from "./autoMl.service";
import { AutoMlController } from "./autoMl.controller";
import { AutoMlResolver } from "./autoMl.resolver";

@Module({
  imports: [AutoMlModuleBase, forwardRef(() => AuthModule)],
  controllers: [AutoMlController],
  providers: [AutoMlService, AutoMlResolver],
  exports: [AutoMlService],
})
export class AutoMlModule {}
