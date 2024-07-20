import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { DecentralizedStorageModuleBase } from "./base/decentralizedStorage.module.base";
import { DecentralizedStorageService } from "./decentralizedStorage.service";
import { DecentralizedStorageController } from "./decentralizedStorage.controller";
import { DecentralizedStorageResolver } from "./decentralizedStorage.resolver";

@Module({
  imports: [DecentralizedStorageModuleBase, forwardRef(() => AuthModule)],
  controllers: [DecentralizedStorageController],
  providers: [DecentralizedStorageService, DecentralizedStorageResolver],
  exports: [DecentralizedStorageService],
})
export class DecentralizedStorageModule {}
