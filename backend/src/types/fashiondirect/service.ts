import { Context, IModuleService } from "@medusajs/framework/types";
import { ModuleMapping, ModuleCreateMapping } from "./module";

/**
 * The main service interface for the Fashiondirect Module.
 */

export interface IFashiondirectModuleService extends IModuleService {
  /* Entity: Mapping */
  createMappings(
    data: ModuleCreateMapping,
    sharedContext?: Context,
  ): Promise<ModuleMapping>;
}
