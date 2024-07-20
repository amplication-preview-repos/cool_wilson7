import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { VisualProgrammingInterfacesModuleBase } from "./base/visualProgrammingInterfaces.module.base";
import { VisualProgrammingInterfacesService } from "./visualProgrammingInterfaces.service";
import { VisualProgrammingInterfacesController } from "./visualProgrammingInterfaces.controller";
import { VisualProgrammingInterfacesResolver } from "./visualProgrammingInterfaces.resolver";

@Module({
  imports: [
    VisualProgrammingInterfacesModuleBase,
    forwardRef(() => AuthModule),
  ],
  controllers: [VisualProgrammingInterfacesController],
  providers: [
    VisualProgrammingInterfacesService,
    VisualProgrammingInterfacesResolver,
  ],
  exports: [VisualProgrammingInterfacesService],
})
export class VisualProgrammingInterfacesModule {}
