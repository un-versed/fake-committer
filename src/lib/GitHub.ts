import axios from 'axios'

class GitHub {
  username: string
  token: string

  constructor(username: string, token: string) {
    this.username = username
    this.token = token
  }

  async getContributionNumber(startDate: string, endDate: string): Promise<number> {
    try {
      const query = `{
        user(login: "${this.username}") {
          name
          contributionsCollection(from: "${startDate}", to: "${endDate}") {
            contributionCalendar {
              totalContributions
            }
          }
        }
      }`

      const contributionData = await axios.post(
        'https://api.github.com/graphql',
        JSON.stringify({ query }),
        {
          headers: {
            'Authorization': `Bearer ${this.token}`,
            'Content-Type': 'application/json'
          }
        }
      )

      const contributionNumber =
        contributionData.data.data.user.contributionsCollection.contributionCalendar
          .totalContributions

      return contributionNumber
    } catch (error) {
      throw new Error('Error getting user GitHub data.')
    }
  }
}

export default GitHub
