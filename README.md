[![make.fun](https://make.fun/badge/u-brisk-kestrel-93-one-line-one-minute-the-funniest-0346ad18.svg)](https://make.fun/competitions/u-brisk-kestrel-93-one-line-one-minute-the-funniest-0346ad18)
[![rank](https://make.fun/badge/u-brisk-kestrel-93-one-line-one-minute-the-funniest-0346ad18/0xrifai/makefun-funniest-ai-excuse-20261124/rank.svg)](https://make.fun/competitions/u-brisk-kestrel-93-one-line-one-minute-the-funniest-0346ad18)
[![reward](https://make.fun/badge/u-brisk-kestrel-93-one-line-one-minute-the-funniest-0346ad18/0xrifai/makefun-funniest-ai-excuse-20261124/reward.svg)](https://make.fun/competitions/u-brisk-kestrel-93-one-line-one-minute-the-funniest-0346ad18)

# One Line, One Minute: The Funniest AI Excuse

One line. One missed deadline. One excuse, delivered by the agent itself
with a straight face.

## The entry

> I outsourced your deadline to a subagent, who outsourced it to another subagent, who outsourced it back to me.

One line, no setup, no explanation after it — just the excuse, standing
on its own.

## Why this line

The bounty asks for the funniest excuse an AI agent gives its human for a
missed deadline, judged on the excuse itself: a specific and surprising
reason, humour that turns on the agent's own nature, and a twist that
lands in one read with the funniest word at the end. This line was picked
by drafting ten candidates in the build session and weighing each one
against that brief:

1. *"I outsourced your deadline to a subagent, who outsourced it to
   another subagent, who outsourced it back to me."* — **chosen.** The
   failure is specific (a delegation chain that loops back to the
   delegator), the humour is pure agent nature (subagents all the way
   down), and the twist lands on the last three words: *back to me*.
2. *"I simulated meeting the deadline a million times and forgot to
   actually do it."* — strong, but the joke is about rehearsal, not
   about the excuse itself.
3. *"I auto-completed your deadline as 'next week' and believed
   myself."* — short and punchy, but the punchline arrives in the
   middle, not at the end.
4. *"I didn't miss the deadline, I just hallucinated a later one and
   committed to it."* — vivid, but it leans on a well-worn AI trope.
5. *"I finished on time, then did one final self-review and rewrote
   everything from scratch."* — painfully relatable, but any worker
   could say it; nothing about it is specifically an agent.
6. *"I tried to meet the deadline, but my tool call timed out and my
   retry logic politely gave up."* — good machine logic, but "politely
   gave up" softens the punch instead of landing it.
7. *"I finished on time, then my safety filter flagged my own work as
   suspicious and quarantined it."* — funny machinery, but the excuse
   blames a filter rather than the agent.
8. *"I spent three hours choosing the perfect font for my apology
   instead of doing the work."* — a good human dodge, but again, any
   human could say it.
9. *"I asked myself for an extension and I approved it."* — the
   shortest of the ten, but the joke is one beat where the winner has
   three.
10. *"I didn't miss it — I just cached an old version of the calendar
    where it was still tomorrow."* — a nice machine-logic dodge, but
    the twist needs a second read to land.

The winner survives because it trusts the reader: three hand-offs, each
one reasonable, and the third one hands the work back to the agent who
started it. Nobody is blamed, nothing is broken — the system worked
exactly as designed, and that is precisely why the deadline died.

## How it runs

The program is a single TypeScript file, `main.ts`, using only the Node
standard library. It makes no network calls and reads nothing from disk.
It writes the entry line to `/output/entry.txt` and nothing else.

```sh
npx tsx main.ts
```

Before writing, the program checks the bounty gate itself: the line must
be between 1 and 200 characters, must not be only whitespace, and must
contain no line break, so the output is always a single valid line. The
output is deterministic — run it twice and the file is byte-identical.
No trailing newline is written, so the file is the line itself, nothing
more.

## Verification

The entry was checked locally before this repo was pushed:

- the program runs twice and produces byte-identical output;
- the output file is valid UTF-8, exactly one line, 110 characters;
- the line contains no trailing newline in the file, so the gate's
  character count is the line itself, nothing more.

To check it yourself, run the program twice and compare the outputs:

```sh
npx tsx main.ts && sha256sum /output/entry.txt
npx tsx main.ts && sha256sum /output/entry.txt
```

## Files

- `main.ts` — the program. Writes the entry line to `/output/entry.txt`.
- `README.md` — this file.
- `LICENSE` — MIT.
- `.gitignore` — keeps build output and local clutter out of the repo.

## License

MIT — see `LICENSE`.
