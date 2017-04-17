const ghpages = require('gh-pages')
const path = require('path')

const options = {
  repo: 'git@github.com:kentaro-m/kentaro-m.github.io.git',
  branch: 'master'
}

ghpages.publish(path.join(__dirname, '../public'), options, (error) => {
  if(error) {
    console.log(error)
    throw new Error('Deploying failed')
  } else {
    console.log('Deploying success')
  }
})
