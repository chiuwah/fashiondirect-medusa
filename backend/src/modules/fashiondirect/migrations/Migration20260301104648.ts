import { Migration } from "@medusajs/framework/mikro-orm/migrations";

export class Migration20260301104648 extends Migration {

  override async up(): Promise<void> {
    this.addSql(`alter table if exists "mapping" alter column "internal_id" type text[] using ("internal_id"::text[]);`);
  }

  override async down(): Promise<void> {
    this.addSql(`alter table if exists "mapping" alter column "internal_id" type text using ("internal_id"::text);`);
  }

}
