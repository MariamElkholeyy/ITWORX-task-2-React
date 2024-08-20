CREATE TABLE "user" (

    "user_id" int NOT NULL,

    "name" VARCHAR(300) NOT NULL,

    "email" VARCHAR(300) NOT NULL,

    "is_admin" boolean NOT NULL,

    "role" VARCHAR(300) NOT NULL,

    PRIMARY KEY ("user_id")

);
 
CREATE TABLE "votePeriod" (

  "period_id" int NOT NULL,

  "start_date" int NOT NULL,

  "end_date" int NOT NULL,

  PRIMARY KEY ("period_id")

);
 
CREATE TABLE "vote" (

  "vote_id" int NOT NULL,

  "nominee_id" int NOT NULL,

  "user_id" int NOT NULL,

  "period_id" int NOT NULL,

  "timespan" int NOT NULL,

  PRIMARY KEY ("vote_id")

);
 CREATE TABLE "nominee" (
  "nominee_id" int NOT NULL,
  "nominee_user_ID" int NOT NULL,
  "nominator_user_ID" int NOT NULL,
  "reason_for_nomination" VARCHAR(100000) NOT NULL,
  PRIMARY KEY ("nominee_id")
);