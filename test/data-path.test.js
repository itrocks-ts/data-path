const assert = require('node:assert/strict')
const { resolve } = require('node:path')
const { test } = require('node:test')
const { appDir } = require('@itrocks/app-dir')
const { dataPath, setDataPath } = require('../cjs/data-path.js')

test('defaults to the sibling data directory and supports relative and absolute configuration', () => {
	assert.equal(dataPath(), resolve(appDir, '../data'))
	setDataPath('./storage', '/tmp/example')
	assert.equal(dataPath('custom-lists', 'app/movie'), '/tmp/example/storage/custom-lists/app/movie')
	setDataPath('/tmp/absolute-data', '/tmp/example')
	assert.equal(dataPath(), '/tmp/absolute-data')
	setDataPath()
})
