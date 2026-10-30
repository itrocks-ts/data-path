import { appDir }  from '@itrocks/app-dir'
import { resolve } from 'node:path'

let directory = resolve(appDir, '../data')

export function dataPath(...parts: string[]): string
{
	return resolve(directory, ...parts)
}

export function setDataPath(path = '../data', base = appDir): void
{
	directory = resolve(base, path)
}
