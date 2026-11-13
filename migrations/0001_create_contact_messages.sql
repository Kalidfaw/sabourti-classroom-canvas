-- Migration 0001: table for messages sent from the /contact page.
--
-- Apply on the PRODUCTION D1 database only after the owner approves it, e.g.:
--   wrangler d1 execute <DATABASE_NAME> --file=migrations/0001_create_contact_messages.sql
-- or paste the statements into the Cloudflare dashboard (D1 > Console).
-- This file never drops or alters existing tables; it only creates new ones.
-- Note: Cloudflare D1 has no real BOOLEAN/TIMESTAMP types — dates are ISO-8601 TEXT (UTC).

CREATE TABLE IF NOT EXISTS contact_messages (
  id           TEXT PRIMARY KEY,
  name         TEXT,               -- optional; NULL when the visitor did not enter a name
  subject      TEXT NOT NULL,
  message      TEXT NOT NULL,
  lang         TEXT NOT NULL CHECK (lang IN ('ar', 'fr')),
  created_at   TEXT NOT NULL,      -- ISO-8601 UTC timestamp
  email_status TEXT NOT NULL DEFAULT 'pending' CHECK (email_status IN ('pending', 'sent', 'failed'))
);

CREATE INDEX IF NOT EXISTS idx_contact_messages_created_at ON contact_messages (created_at);
CREATE INDEX IF NOT EXISTS idx_contact_messages_email_status ON contact_messages (email_status);
