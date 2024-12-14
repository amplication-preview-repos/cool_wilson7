import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ApiDocumentationModuleBase } from "./base/apiDocumentation.module.base";
import { ApiDocumentationService } from "./apiDocumentation.service";
import { ApiDocumentationController } from "./apiDocumentation.controller";
import { ApiDocumentationResolver } from "./apiDocumentation.resolver";

@Module({
  imports: [ApiDocumentationModuleBase, forwardRef(() => AuthModule)],
  controllers: [ApiDocumentationController],
  providers: [ApiDocumentationService, ApiDocumentationResolver],
  exports: [ApiDocumentationService],
})
export class ApiDocumentationModule {}
