#!/usr/bin/env node

const fs = require('fs')

first  = fs.readFileSync('1.txt').toString().split('\n')
second = fs.readFileSync('2.txt').toString().split('\n')

first.pop()
second.pop()

for (let i = 0;i < 10;i++) {
    const x = Math.floor(Math.random() * first.length)
    const y = Math.floor(Math.random() * second.length)
    console.log(first[x], second[y])
}

