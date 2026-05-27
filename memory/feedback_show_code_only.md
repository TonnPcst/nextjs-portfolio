---
name: feedback-show-code-only
description: User wants code shown in chat, not written to files by Claude
metadata:
  type: feedback
---

Do not write/edit files directly. Always show the code in the chat for the user to copy-paste themselves.

**Why:** User explicitly said "just show me the code to write don't write with yourself" and rejected a file-write tool call.

**How to apply:** For all code changes in this portfolio project, present code blocks in the response instead of using Write/Edit tools.
