# ForceBench project website

Static research website at https://forcebench-platform.github.io/.
Content follows the September 2026 submitted manuscript,
**ForceBench: Benchmarking Force Integration for Robotic Manipulation**,
submitted to ICRA 2027. Submission is not acceptance.

## Pages and assets

- `index.html`: project overview, exact submitted abstract, paper figures,
  methods, findings, resource availability, and citation.
- `tasks.html`: eight simulation tasks and completion criteria.
- `doc/index.html`: training, observations, control, and evaluation protocol.
- `leaderboard.html`: complete simulation and real-world results, readable
  without JavaScript. `assets/paper-results.js` adds within-group sorting.
- `results/leaderboard.json`: local machine-readable copy of Tables I and II.
  It is maintained in this website repository and is not fetched from a code
  repository. Update the static HTML and JSON together when results change.
- `about.html`: project identity, author list, and submission-stage citation.
- `assets/figures/`: cropped WebP renders of the submitted manuscript's
  original figure assets. The confidential review PDF is not distributed.
- `sample_leaderboard.json`: retirement notice for the old prototype schema;
  no page loads illustrative or fabricated sample results.

## Updating and checking

No build step, external JavaScript dependency, or package installation is
needed. Serve this directory with any static HTTP server, for example
`python -m http.server 8879 --bind 127.0.0.1`.

Check relative links and assets, desktop and mobile layout, table sorting,
and the browser console. Verify each result against the corresponding
manuscript table. Means weight tasks equally; distinguish the shared-backbone
comparison from additional reference systems. Do not infer confidence
intervals or significance without episode-level data.

## Publishing

GitHub Pages serves the repository root on `main`. After pushing a reviewed
change, confirm the Pages build succeeds and verify the public website.
Only add public paper, code, dataset, or checkpoint links once those resources
are actually available and authorized for release.
