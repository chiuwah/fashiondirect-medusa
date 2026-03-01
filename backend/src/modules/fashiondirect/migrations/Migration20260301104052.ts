import { Migration } from "@medusajs/framework/mikro-orm/migrations";

export class Migration20260301104052 extends Migration {

  override async up(): Promise<void> {
    this.addSql(`create table if not exists "mapping" ("id" text not null, "type" text not null, "external_id" text not null, "external_data" text not null, "internal_id" text not null, "metadata" jsonb not null, "created_at" timestamptz not null default now(), "updated_at" timestamptz not null default now(), "deleted_at" timestamptz null, constraint "mapping_pkey" primary key ("id"));`);
    this.addSql(`CREATE INDEX IF NOT EXISTS "IDX_mapping_deleted_at" ON "mapping" ("deleted_at") WHERE deleted_at IS NULL;`);
  }

  override async down(): Promise<void> {
    this.addSql(`drop table if exists "mapping" cascade;`);
  }

}
