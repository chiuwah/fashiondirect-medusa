import FashiondirectModuleService from "./service";
import { Module } from "@medusajs/framework/utils";

export const FASHIONDIRECT_MODULE = "fashiondirect";

export default Module(FASHIONDIRECT_MODULE, {
  service: FashiondirectModuleService,
});
