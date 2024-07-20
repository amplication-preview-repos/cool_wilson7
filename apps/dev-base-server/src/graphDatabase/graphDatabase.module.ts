import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { GraphDatabaseModuleBase } from "./base/graphDatabase.module.base";
import { GraphDatabaseService } from "./graphDatabase.service";
import { GraphDatabaseController } from "./graphDatabase.controller";
import { GraphDatabaseResolver } from "./graphDatabase.resolver";

@Module({
  imports: [GraphDatabaseModuleBase, forwardRef(() => AuthModule)],
  controllers: [GraphDatabaseController],
  providers: [GraphDatabaseService, GraphDatabaseResolver],
  exports: [GraphDatabaseService],
})
export class GraphDatabaseModule {}
