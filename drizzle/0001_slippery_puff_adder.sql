CREATE TABLE `provider_settings` (
	`id` text PRIMARY KEY NOT NULL,
	`body` text NOT NULL,
	`revision` integer DEFAULT 1 NOT NULL,
	`enabled` integer DEFAULT 0 NOT NULL,
	`checked_revision` integer DEFAULT 0 NOT NULL,
	`validation` text DEFAULT '{}' NOT NULL,
	`updated_at` text NOT NULL,
	`actor` text NOT NULL
);
