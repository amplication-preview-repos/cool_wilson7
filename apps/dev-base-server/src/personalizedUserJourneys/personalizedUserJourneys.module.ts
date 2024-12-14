import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { PersonalizedUserJourneysModuleBase } from "./base/personalizedUserJourneys.module.base";
import { PersonalizedUserJourneysService } from "./personalizedUserJourneys.service";
import { PersonalizedUserJourneysController } from "./personalizedUserJourneys.controller";
import { PersonalizedUserJourneysResolver } from "./personalizedUserJourneys.resolver";

@Module({
  imports: [PersonalizedUserJourneysModuleBase, forwardRef(() => AuthModule)],
  controllers: [PersonalizedUserJourneysController],
  providers: [
    PersonalizedUserJourneysService,
    PersonalizedUserJourneysResolver,
  ],
  exports: [PersonalizedUserJourneysService],
})
export class PersonalizedUserJourneysModule {}
