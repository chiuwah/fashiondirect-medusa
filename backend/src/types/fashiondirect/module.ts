export type ModuleMapping = {
  id: string;
  type: string;
  external_id: string;
  external_data: string;
  internal_ids: string[];
  metadata: Record<string, unknown>;
  created_at: Date;
  updated_at: Date;
};

export type ModuleCreateMapping = {
  type: string;
  external_id: string;
  external_data: string;
  internal_ids?: string[];
  metadata?: Record<string, unknown>;
};
