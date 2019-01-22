module.exports = (process.env.METAPREFIX || '')
    .split(',')
    .map(metaprefix => metaprefix.trim())
