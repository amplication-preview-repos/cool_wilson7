import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ApiDesignModuleBase } from "./base/apiDesign.module.base";
import { ApiDesignService } from "./apiDesign.service";
import { ApiDesignController } from "./apiDesign.controller";
import { ApiDesignResolver } from "./apiDesign.resolver";

@Module({
  imports: [ApiDesignModuleBase, forwardRef(() => AuthModule)],
  controllers: [ApiDesignController],
  providers: [ApiDesignService, ApiDesignResolver],
  exports: [ApiDesignService],
})
export class ApiDesignModule {}
