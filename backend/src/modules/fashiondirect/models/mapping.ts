import { model } from "@medusajs/framework/utils";

const Mapping = model.define("mapping", {
  id: model.id({ prefix: "map" }).primaryKey(),
  type: model.text(),
  external_id: model.text(),
  external_data: model.text(),
  internal_ids: model.array().nullable(), //  array of strings only
  metadata: model.json().nullable(),
});

export default Mapping;
