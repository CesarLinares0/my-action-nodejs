import * as core from '@actions/core';
import * as github from '@actions/github';

const octokit = new github.GitHub( core.getInput('GITHUB_TOKEN') );

console.log('Action: nodejs');