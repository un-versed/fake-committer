#!/usr/bin/env node

import FakeCommiter from './lib/FakeCommiter'
import chalk from 'chalk'
import minimist from 'minimist'
const argv = minimist(process.argv.slice(2))

const fakeCommiter = new FakeCommiter({
  u: argv.u,
  t: argv.t,
  n: argv.n,
  from: argv.from,
  to: argv.to,
  verbose: argv.verbose
})

fakeCommiter
  .fake()
  .then(() => console.log(chalk.green(`Faked!\nNow, run 'git push' to push your faked commits`)))
