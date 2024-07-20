import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { GraphQlSupportModuleBase } from "./base/graphQlSupport.module.base";
import { GraphQlSupportService } from "./graphQlSupport.service";
import { GraphQlSupportController } from "./graphQlSupport.controller";
import { GraphQlSupportResolver } from "./graphQlSupport.resolver";

@Module({
  imports: [GraphQlSupportModuleBase, forwardRef(() => AuthModule)],
  controllers: [GraphQlSupportController],
  providers: [GraphQlSupportService, GraphQlSupportResolver],
  exports: [GraphQlSupportService],
})
export class GraphQlSupportModule {}
