import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { IoTDeviceManagementModuleBase } from "./base/ioTDeviceManagement.module.base";
import { IoTDeviceManagementService } from "./ioTDeviceManagement.service";
import { IoTDeviceManagementController } from "./ioTDeviceManagement.controller";
import { IoTDeviceManagementResolver } from "./ioTDeviceManagement.resolver";

@Module({
  imports: [IoTDeviceManagementModuleBase, forwardRef(() => AuthModule)],
  controllers: [IoTDeviceManagementController],
  providers: [IoTDeviceManagementService, IoTDeviceManagementResolver],
  exports: [IoTDeviceManagementService],
})
export class IoTDeviceManagementModule {}
