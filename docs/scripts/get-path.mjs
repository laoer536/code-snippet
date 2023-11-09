#!/usr/bin/env node
import {readdirSync} from 'node:fs'

const dirs  = readdirSync('../xxxx');
const res = dirs.map(item=>({text:item.replace('.md',''),link:'/fontend-specification/'+item.replace('.md','')}))
console.log(res)