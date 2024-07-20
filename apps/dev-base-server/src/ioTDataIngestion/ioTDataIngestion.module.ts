import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { IoTDataIngestionModuleBase } from "./base/ioTDataIngestion.module.base";
import { IoTDataIngestionService } from "./ioTDataIngestion.service";
import { IoTDataIngestionController } from "./ioTDataIngestion.controller";
import { IoTDataIngestionResolver } from "./ioTDataIngestion.resolver";

@Module({
  imports: [IoTDataIngestionModuleBase, forwardRef(() => AuthModule)],
  controllers: [IoTDataIngestionController],
  providers: [IoTDataIngestionService, IoTDataIngestionResolver],
  exports: [IoTDataIngestionService],
})
export class IoTDataIngestionModule {}
