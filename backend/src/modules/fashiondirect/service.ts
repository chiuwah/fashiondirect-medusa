import { MedusaService } from "@medusajs/framework/utils";
import Mapping from "./models/mapping";

class FashiondirectModuleService extends MedusaService({
  Mapping,
}) {}

export default FashiondirectModuleService;
