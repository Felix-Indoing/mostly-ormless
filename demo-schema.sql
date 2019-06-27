CREATE TABLE authors 
( "id" SERIAL PRIMARY KEY
, "name" TEXT NOT NULL
, "isLiving" BOOLEAN
);

CREATE TABLE books 
( "id" SERIAL PRIMARY KEY
, "authorId" INTEGER NOT NULL REFERENCES "authors"("id")
, "title" TEXT
, "createdAt" TIMESTAMPTZ NOT NULL DEFAULT now()
, "updatedAt" TIMESTAMPTZ NOT NULL DEFAULT now()
);


CREATE TABLE email_authentication 
( email TEXT NOT NULL
, consecutiveFailedLogins INTEGER NOT NULL DEFAULT 0
, lastFailedLogin TIMESTAMPTZ
);


CREATE TYPE "appleEnvironment" AS ENUM 
( 'PROD'
, 'Sandbox'
);

CREATE TABLE "appleTransactions" 
( "environment" "appleEnvironment" NOT NULL
, "originalTransactionId" TEXT NOT NULL
, "accountId" INTEGER NOT NULL
, "latestReceiptData" TEXT
-- ... lots more fields ...
);

ALTER TABLE "appleTransactions" 
  ADD CONSTRAINT "appleTransPKey" 
  PRIMARY KEY ("environment", "originalTransactionId");

