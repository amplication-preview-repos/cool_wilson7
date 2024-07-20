import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { StreamProcessingModuleBase } from "./base/streamProcessing.module.base";
import { StreamProcessingService } from "./streamProcessing.service";
import { StreamProcessingController } from "./streamProcessing.controller";
import { StreamProcessingResolver } from "./streamProcessing.resolver";

@Module({
  imports: [StreamProcessingModuleBase, forwardRef(() => AuthModule)],
  controllers: [StreamProcessingController],
  providers: [StreamProcessingService, StreamProcessingResolver],
  exports: [StreamProcessingService],
})
export class StreamProcessingModule {}
