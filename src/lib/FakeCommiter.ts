import GitHub from './GitHub'
import Git from './Git'
import { DateTime } from 'luxon'

class FakeCommiter {
  args: {
    u: string
    t: string
    from: string
    to: string
    verbose: boolean
  }
  username: string
  token: string
  from: string
  to: string
  verbose: boolean

  constructor(argv: { u: string; t: string; from: string; to: string; verbose: boolean }) {
    this.args = argv
    this.checkArgs()
    this.setArgs()
  }

  checkArgs() {
    let { u, t, from, to, verbose } = this.args
    if (!u) throw "Use the '-u' flag to specify an username"
    if (!t) throw "Use the '-t' flag to specify an access token"
  }

  setArgs() {
    const { u, t, from, to, verbose } = this.args

    this.username = u
    this.token = t
    this.from = from || DateTime.now().startOf('day').toISO()
    this.to = to || DateTime.now().endOf('day').toISO()
    this.verbose = verbose || false
  }

  async fake() {
    const github = new GitHub(this.username, this.token)
    const contributionNumber = await github.getContributionNumber(this.from, this.to)
    for (let i = 1; i <= contributionNumber; i++) {
      const message = `fake-commiter: from '${this.username} | commit ${i}`
      await Git.commit(message, { verbose: this.verbose })
    }
  }
}

export default FakeCommiter
