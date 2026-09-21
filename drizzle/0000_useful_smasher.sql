CREATE TABLE `documents` (
	`id` text PRIMARY KEY NOT NULL,
	`body` text NOT NULL,
	`revision` integer DEFAULT 1 NOT NULL,
	`updated_at` text NOT NULL,
	`actor` text NOT NULL
);
--> statement-breakpoint
CREATE TABLE `events` (
	`id` text PRIMARY KEY NOT NULL,
	`at` text NOT NULL,
	`actor` text NOT NULL,
	`action` text NOT NULL,
	`target` text NOT NULL
);
--> statement-breakpoint
CREATE TABLE `jobs` (
	`id` text PRIMARY KEY NOT NULL,
	`version_id` text NOT NULL,
	`idempotency_key` text NOT NULL,
	`status` text NOT NULL,
	`stage` text NOT NULL,
	`provider_id` text,
	`body` text NOT NULL,
	`created_at` text NOT NULL,
	`updated_at` text NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX `jobs_idempotency` ON `jobs` (`idempotency_key`);--> statement-breakpoint
CREATE TABLE `members` (
	`email` text PRIMARY KEY NOT NULL,
	`user_id` text,
	`role` text NOT NULL
);
--> statement-breakpoint
CREATE TABLE `versions` (
	`id` text PRIMARY KEY NOT NULL,
	`lesson_id` text NOT NULL,
	`body` text NOT NULL,
	`parent_id` text,
	`created_at` text NOT NULL,
	`actor` text NOT NULL,
	`status` text DEFAULT 'Draft' NOT NULL,
	`approval` text
);
