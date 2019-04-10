CREATE TABLE "Users" (
	"user_id" serial NOT NULL,
	"username" varchar NOT NULL UNIQUE,
	"password" varchar NOT NULL UNIQUE,
	"email" varchar NOT NULL,
	"location" varchar NOT NULL,
	"avatar" varchar NOT NULL,
	"bio" varchar NOT NULL,
	"ranking" FLOAT NOT NULL,
	CONSTRAINT Users_pk PRIMARY KEY ("user_id")
) WITH (
  OIDS=FALSE
);
CREATE TABLE "Posts" (
	"post_id" serial NOT NULL,
	"content" varchar NOT NULL,
	"clan_id" integer NOT NULL,
	"parent_id" integer,
	"user_id" integer NOT NULL,
	CONSTRAINT Posts_pk PRIMARY KEY ("post_id")
) WITH (
  OIDS=FALSE
);
CREATE TABLE "Clan" (
	"clan_id" serial NOT NULL,
	"name" varchar NOT NULL,
	"bio" varchar NOT NULL,
	"avatar" varchar NOT NULL,
	"competitive" BOOLEAN NOT NULL,
	"owner_id" integer NOT NULL,
	"private" BOOLEAN NOT NULL,
	"ranking" FLOAT NOT NULL,
	CONSTRAINT Clan_pk PRIMARY KEY ("clan_id")
) WITH (
  OIDS=FALSE
);
CREATE TABLE "Consoles" (
	"id" integer NOT NULL,
	"name" varchar NOT NULL,
	CONSTRAINT Consoles_pk PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);
CREATE TABLE "users_consoles" (
	"user_id" integer NOT NULL UNIQUE,
	"console_id" integer NOT NULL UNIQUE,
	"id" serial NOT NULL,
	CONSTRAINT users_consoles_pk PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);
CREATE TABLE "clans_consoles" (
	"clan_id" integer NOT NULL,
	"console_id" integer NOT NULL,
	"id" serial NOT NULL,
	CONSTRAINT clans_consoles_pk PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);
CREATE TABLE "sessions" (
	"sid" varchar NOT NULL,
	"sess" serial NOT NULL,
	"expire" TIME NOT NULL,
	CONSTRAINT sessions_pk PRIMARY KEY ("sid")
) WITH (
  OIDS=FALSE
);
ALTER TABLE "Posts" ADD CONSTRAINT "Posts_fk0" FOREIGN KEY ("clan_id") REFERENCES "Clan"("clan_id");
ALTER TABLE "Posts" ADD CONSTRAINT "Posts_fk1" FOREIGN KEY ("parent_id") REFERENCES "Posts"("post_id");
ALTER TABLE "Posts" ADD CONSTRAINT "Posts_fk2" FOREIGN KEY ("user_id") REFERENCES "Users"("user_id");
ALTER TABLE "Clan" ADD CONSTRAINT "Clan_fk0" FOREIGN KEY ("owner_id") REFERENCES "Users"("user_id");
ALTER TABLE "users_consoles" ADD CONSTRAINT "users_consoles_fk0" FOREIGN KEY ("user_id") REFERENCES "Users"("user_id");
ALTER TABLE "users_consoles" ADD CONSTRAINT "users_consoles_fk1" FOREIGN KEY ("console_id") REFERENCES "Consoles"("id");
ALTER TABLE "clans_consoles" ADD CONSTRAINT "clans_consoles_fk0" FOREIGN KEY ("clan_id") REFERENCES "Clan"("clan_id");
ALTER TABLE "clans_consoles" ADD CONSTRAINT "clans_consoles_fk1" FOREIGN KEY ("console_id") REFERENCES "Consoles"("id");
