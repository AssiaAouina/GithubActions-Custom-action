const core = require ('@actions/core')
const core = require ('@actions/github')
const core= require ('@actions/exec')
async function run(){
core.notice('hello from my custom JS')
}
run();