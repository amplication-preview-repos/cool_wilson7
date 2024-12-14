import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { DataLakeIntegrationModuleBase } from "./base/dataLakeIntegration.module.base";
import { DataLakeIntegrationService } from "./dataLakeIntegration.service";
import { DataLakeIntegrationController } from "./dataLakeIntegration.controller";
import { DataLakeIntegrationResolver } from "./dataLakeIntegration.resolver";

@Module({
  imports: [DataLakeIntegrationModuleBase, forwardRef(() => AuthModule)],
  controllers: [DataLakeIntegrationController],
  providers: [DataLakeIntegrationService, DataLakeIntegrationResolver],
  exports: [DataLakeIntegrationService],
})
export class DataLakeIntegrationModule {}
