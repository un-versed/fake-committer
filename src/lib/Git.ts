import util from 'util'
import child_process from 'child_process'

class Git {
  static async commit(message, options: { verbose: boolean }) {
    const env = process.env
    const exec = util.promisify(child_process.exec)

    try {
      const { stdout, stderr } = await exec(`git commit --allow-empty -m "${message}"`)

      if (options.verbose) console.log(stdout)
      if (stderr) throw new Error(stderr)
    } catch (error) {
      console.error(error)
    }
  }
}

export default Git
