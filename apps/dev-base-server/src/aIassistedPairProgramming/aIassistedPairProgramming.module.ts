import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { AIassistedPairProgrammingModuleBase } from "./base/aIassistedPairProgramming.module.base";
import { AIassistedPairProgrammingService } from "./aIassistedPairProgramming.service";
import { AIassistedPairProgrammingController } from "./aIassistedPairProgramming.controller";
import { AIassistedPairProgrammingResolver } from "./aIassistedPairProgramming.resolver";

@Module({
  imports: [AIassistedPairProgrammingModuleBase, forwardRef(() => AuthModule)],
  controllers: [AIassistedPairProgrammingController],
  providers: [
    AIassistedPairProgrammingService,
    AIassistedPairProgrammingResolver,
  ],
  exports: [AIassistedPairProgrammingService],
})
export class AIassistedPairProgrammingModule {}
