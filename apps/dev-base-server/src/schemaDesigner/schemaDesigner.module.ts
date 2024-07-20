import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { SchemaDesignerModuleBase } from "./base/schemaDesigner.module.base";
import { SchemaDesignerService } from "./schemaDesigner.service";
import { SchemaDesignerController } from "./schemaDesigner.controller";
import { SchemaDesignerResolver } from "./schemaDesigner.resolver";

@Module({
  imports: [SchemaDesignerModuleBase, forwardRef(() => AuthModule)],
  controllers: [SchemaDesignerController],
  providers: [SchemaDesignerService, SchemaDesignerResolver],
  exports: [SchemaDesignerService],
})
export class SchemaDesignerModule {}
