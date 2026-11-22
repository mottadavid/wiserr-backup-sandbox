# wiserr-backup-sandbox

Private, isolated sandbox that proves a Claude review can be dispatched from GitHub with no Mac online.
Synthetic fixture only: no Wiserr source, no repo writes, no merges. `pilot-api.mjs` is a verbatim copy of
the Mac launcher's guard module. One attempt ever (tag `pilot-attempted`). Key lives only in the repo
secret `ANTHROPIC_API_KEY` (pilot workspace, short expiry); disable it after the run.
