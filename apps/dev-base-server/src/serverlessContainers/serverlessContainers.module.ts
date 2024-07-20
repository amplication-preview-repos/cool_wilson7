import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ServerlessContainersModuleBase } from "./base/serverlessContainers.module.base";
import { ServerlessContainersService } from "./serverlessContainers.service";
import { ServerlessContainersController } from "./serverlessContainers.controller";
import { ServerlessContainersResolver } from "./serverlessContainers.resolver";

@Module({
  imports: [ServerlessContainersModuleBase, forwardRef(() => AuthModule)],
  controllers: [ServerlessContainersController],
  providers: [ServerlessContainersService, ServerlessContainersResolver],
  exports: [ServerlessContainersService],
})
export class ServerlessContainersModule {}
