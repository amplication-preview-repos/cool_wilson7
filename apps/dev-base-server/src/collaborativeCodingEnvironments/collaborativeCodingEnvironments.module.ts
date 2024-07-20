import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { CollaborativeCodingEnvironmentsModuleBase } from "./base/collaborativeCodingEnvironments.module.base";
import { CollaborativeCodingEnvironmentsService } from "./collaborativeCodingEnvironments.service";
import { CollaborativeCodingEnvironmentsController } from "./collaborativeCodingEnvironments.controller";
import { CollaborativeCodingEnvironmentsResolver } from "./collaborativeCodingEnvironments.resolver";

@Module({
  imports: [
    CollaborativeCodingEnvironmentsModuleBase,
    forwardRef(() => AuthModule),
  ],
  controllers: [CollaborativeCodingEnvironmentsController],
  providers: [
    CollaborativeCodingEnvironmentsService,
    CollaborativeCodingEnvironmentsResolver,
  ],
  exports: [CollaborativeCodingEnvironmentsService],
})
export class CollaborativeCodingEnvironmentsModule {}
