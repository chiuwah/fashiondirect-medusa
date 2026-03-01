import { ExecArgs } from "@medusajs/framework/types";

export default async function seedMappings({ container }: ExecArgs) {
  const fashiondirectModuleService: IFashiondirectModuleService =
    container.resolve(FASHIONDIRECT_MODULE);
}
