import GitHub from './GitHub'
import Git from './Git'
import { DateTime } from 'luxon'
import Args from '../interfaces/Args'

class FakeCommiter {
  args: Args
  username: string
  token: string
  desiredNumber: number | null
  from: string
  to: string
  verbose: boolean

  constructor(argv: Args) {
    this.args = argv
    this.checkArgs()
    this.setArgs()
  }

  checkArgs() {
    let { u, t, n } = this.args
    if (!u && !n) throw "Use the '-u' flag to specify an username"
    if (!t && !n) throw "Use the '-t' flag to specify an access token"
  }

  setArgs() {
    const { u, t, n, from, to, verbose } = this.args

    this.username = u
    this.token = t
    this.desiredNumber = n || null
    this.from = from || DateTime.now().startOf('day').toISO()
    this.to = to || DateTime.now().endOf('day').toISO()
    this.verbose = verbose || false
  }

  async fake() {
    let contributionNumber = this.desiredNumber

    if (!contributionNumber) {
      const github = new GitHub(this.username, this.token)
      contributionNumber = await github.getContributionNumber(this.from, this.to)
    }

    for (let i = 1; i <= contributionNumber; i++) {
      const message = `fake-commiter: from '${this.username} | commit ${i}`
      await Git.commit(message, { verbose: this.verbose })
    }
  }
}

export default FakeCommiter
