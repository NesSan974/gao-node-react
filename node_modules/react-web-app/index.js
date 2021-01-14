#!/usr/bin/env node

const fs = require('fs')
const download = require('download')

const url = 'https://github.com/react-web-app/react-web-app/archive/master.zip'
const args = process.argv.slice(2)
const target = args[1]

if (!target) {
  console.error('Please specify an app name. For example:')
  console.log('  react-web-app create my-app')
  process.exit(1)
}

download(url, process.cwd(), { extract: true }).then(data => {
  fs.renameSync(data[0].path, target)
  console.log(`  cd ${target}`)
  console.log('  npm install')
})
