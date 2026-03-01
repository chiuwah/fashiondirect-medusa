import { ExecArgs } from "@medusajs/framework/types";
import { Modules } from "@medusajs/framework/utils";
import { FASHIONDIRECT_MODULE } from "../modules/fashiondirect";
import { IFashiondirectModuleService } from "../types/fashiondirect/service";

export default async function insertProduct({ container }: ExecArgs) {
  const productModuleService = container.resolve(Modules.PRODUCT);
  const fashiondirectModuleService: IFashiondirectModuleService =
    container.resolve(FASHIONDIRECT_MODULE);

  // TODO: Create mapping of categories
  const categoryMapping = await fashiondirectModuleService.createMappings({
    type: "category",
    external_id: "123",
    external_data: "test-category",
    internal_ids: [],
  });

  const result = await productModuleService.createProducts([
    { title: "Test Product 1" },
    { title: "Test Product 2" },
    { title: "Test Product 3" },
    { title: "Test Product 4" },
    { title: "Test Product 5" },
  ]);
}
