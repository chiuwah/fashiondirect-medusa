import { Migration } from "@medusajs/framework/mikro-orm/migrations";

export class Migration20260301113420 extends Migration {

  override async up(): Promise<void> {
    this.addSql(`alter table if exists "mapping" rename column "internal_id" to "internal_ids";`);
  }

  override async down(): Promise<void> {
    this.addSql(`alter table if exists "mapping" rename column "internal_ids" to "internal_id";`);
  }

}
