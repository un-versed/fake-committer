import util from 'util'
const env = process.env

class Git {
  static async commit(message, options: { verbose: boolean }) {
    const exec = util.promisify(require('child_process').exec)
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
