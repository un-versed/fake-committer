# FakeCommitter
[![npm version](https://img.shields.io/npm/v/fake-committer)](https://www.npmjs.com/package/fake-committer)

![logo](https://github.com/un-versed/fake-committer/raw/master/docs/FakeCommitter.png "FakeCommitter")


FakeCommitter is a tool for those who want to be a GITHUB POPSTAR WITH A LOT OF CONTRIBUTIONS DAILY!
Or maybe you just want to sync your contribution number across accounts (like me). For example: You *NEED* to use a different account 
to acess your work repositories with a work email, in this case, every commit you make count in another account.

## Table of Contents

- [FakeCommitter](#fakecommitter)
  - [Table of Contents](#table-of-contents)
  - [Tips before running](#tips-before-running)
  - [Installation and Usage](#installation-and-usage)
  - [Options](#options)
  - [Examples](#examples)
  - [Todo](#todo)

## Tips before running
- FakeCommitter make **real** commits into your repository, so *please* make sure you're in the right repo.
- If you want commits to be private, just create an empty repo for FakeCommits.

## Installation and Usage
Prerequisites: [Node.js](https://nodejs.org/) (`^12.22.0`, `^14.17.0`, or `>=16.0.0`).

You can install FakeCommitter globally using npm:
```sh
$ npm i fake-committer -g
```

After that, you can navigate into your repo

```sh
$ cd fake-commits-repo
```

Create a GitHub Access Token (https://docs.github.com/pt/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token)

And run FakeCommitter on any file or directory like this:
```sh
$ fake-committer -u <GITHUB_USERNAME> -t <ACCESS_TOKEN>
```

You should see this output:
```sh
$ Faked!
Now, run 'git push' to push your faked commits
```

Just run `git push` and the magic is done.

## Options

<table>
<tr>
    <td> Name </td>
    <td> Description </td>
    <td> Required </td>
</tr>
<tr>
  <td valign="top"><code>-u</code></td>
  <td>
    <p>GitHub username to get the contribution data.</p>
  </td>
  <td> <code> true </code> </td>
</tr>
<tr>
  <td valign="top"><code>-t</code></td>
  <td>
    <p>GitHub Access token to make requests.</p>
  </td>
  <td> <code> true </code> </td>
</tr>
<tr>
  <td valign="top"><code>-n</code></td>
  <td>
    <p>Specify the number of commits to make.</p>
    <p>If this option is provided, <code>--from</code> and <code>--to</code> are ignored.</p>
  </td>
  <td> <code> false </code> </td>
</tr>
<tr>
  <td valign="top"><code>--from</code></td>
  <td>
    <p>A ISO DateTime to fetch contribution data by specific Date range.</p>
    <p>If not provided, default is <code>Date.now()</code> (start of the day)</p>
    <p>Example: <code>--from "2022-01-09T00:00:00Z" </code>
  </td>
  <td> <code> false </code> </td>
</tr>
<tr>
  <td valign="top"><code>--to</code></td>
  <td>
    <p>A ISO DateTime to fetch contribution data by specific Date range</p>
    <p>If not provided, default is <code>Date.now()</code> (end of the day)</p>
    <p>Example: <code>--to "2022-01-10T00:00:00Z" </code>
  </td>
  <td> <code> false </code> </td>
</tr>
<tr>
  <td valign="top"><code>--verbose</code></td>
  <td>
    <p>Logs every created commit.</p>
  </td>
  <td> <code> false </code> </td>
</tr>
</table>

## Examples

- Fake today commits
```sh
$ fake-committer -u <GITHUB_USERNAME> -t <ACCESS_TOKEN>
```

- Fake specific date commits 
```sh
$ fake-committer -u <GITHUB_USERNAME> -t <ACCESS_TOKEN> --from "2022-01-09T00:00:00Z" --to "2022-01-10T00:00:00Z"
```

## Todo
- [ ] Write tests  
- [x] Add option to create a custom number of commits
