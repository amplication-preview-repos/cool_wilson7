import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { DocumentDatabaseModuleBase } from "./base/documentDatabase.module.base";
import { DocumentDatabaseService } from "./documentDatabase.service";
import { DocumentDatabaseController } from "./documentDatabase.controller";
import { DocumentDatabaseResolver } from "./documentDatabase.resolver";

@Module({
  imports: [DocumentDatabaseModuleBase, forwardRef(() => AuthModule)],
  controllers: [DocumentDatabaseController],
  providers: [DocumentDatabaseService, DocumentDatabaseResolver],
  exports: [DocumentDatabaseService],
})
export class DocumentDatabaseModule {}
