# Autosnap Git

Autosnap Git creates automatic Git snapshots so you can keep working without stopping to write commits by hand.

The latest update makes commit messages much easier to read. Instead of using a timestamp-heavy subject line, Autosnap now generates a short human-readable message based on the files changed and the size of the edit.

## Features

- Creates snapshots only when real changes exist
- Generates readable commit messages from what changed
- Infers tags automatically when no `--prefix` is provided
- Supports watch mode for automatic background snapshots
- Still lets you force a tag with `--prefix`
- Shows snapshot time in CLI output without using it as the main commit subject

## Commit Message Rules

Autosnap now builds commit subjects to feel more like normal Git history.

When no prefix is passed, Autosnap infers the tag automatically from the change:

- Small documentation or single-area updates may become `[CHORE]: update docs`
- Broader file updates may become `[UPDATE]: update cli and docs`
- Larger multi-area edits may become `[OVERHAUL]: update cli, git workflow, and docs`

The message is based on:

- Which files changed
- How broad the change is
- The size of the edit

If you pass `--prefix`, that tag is still used directly.

Example:

```bash
autosnap-git --prefix fix
```

This still produces commit subjects like:

```text
[FIX]: fix cli error handling
```

## Commit Message Examples

```text
[CHORE]: update docs
[UPDATE]: update cli and docs
[OVERHAUL]: update cli, git workflow, and docs
```

The timestamp has not been removed completely. It is still shown in CLI output so you can see when a snapshot happened. It is just no longer used as the main commit subject.

## Watch Mode

Watch mode now supports automatic tag inference too.

If you run watch mode without `--prefix`, Autosnap can infer the tag from the detected change before it commits.

```bash
autosnap-git --watch
```

That means watch mode can produce messages like:

```text
[CHORE]: update docs
[UPDATE]: update cli and docs
```

If you want to force a specific tag while watching, pass `--prefix`:

```bash
autosnap-git --watch --prefix fix
```

That keeps the tag fixed, for example:

```text
[FIX]: fix cli validation
```

## Examples

```text
[CHORE]: update docs
[UPDATE]: update cli and docs
[OVERHAUL]: update cli, git workflow, and docs
```

### CLI output with timestamp

```text
Watching for changes...
Snapshot created at 2026-03-29 22:10
Commit: [UPDATE]: update cli and docs
```

## FAQ

### Why did the commit tag change on its own?

If you did not pass `--prefix`, Autosnap inferred the tag automatically from the files changed and the size of the edit.

### How do I keep using a fixed tag like `[FIX]`?

Pass `--prefix fix`. Autosnap will keep using your chosen tag instead of inferring one.

### Did Autosnap remove timestamps completely?

No. Timestamps still appear in CLI output. They are just no longer the main commit subject.

## Run Locally

**Prerequisites:** Node.js

1. Install dependencies:
   `npm install`
2. Run the app:
   `npm run dev`
