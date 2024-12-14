import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { DigitalTwinSupportModuleBase } from "./base/digitalTwinSupport.module.base";
import { DigitalTwinSupportService } from "./digitalTwinSupport.service";
import { DigitalTwinSupportController } from "./digitalTwinSupport.controller";
import { DigitalTwinSupportResolver } from "./digitalTwinSupport.resolver";

@Module({
  imports: [DigitalTwinSupportModuleBase, forwardRef(() => AuthModule)],
  controllers: [DigitalTwinSupportController],
  providers: [DigitalTwinSupportService, DigitalTwinSupportResolver],
  exports: [DigitalTwinSupportService],
})
export class DigitalTwinSupportModule {}
