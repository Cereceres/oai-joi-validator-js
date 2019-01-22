const joi = require('joi')

const metadataPrefixValids = Object.keys(require('../valids-metaprefix'))

const validVerbs = [
    'Identify',
    'ListMetadataFormats',
    'ListSets',
    'ListIdentifiers',
    'ListRecords',
    'GetRecord'
]

const resumptionTokensWhere = [
    'ListSets',
    'ListIdentifiers',
    'ListRecords'
]

const verbsWhereMetaPrefixRequired = ['GetRecord', 'ListRecords', 'ListIdentifiers']

module.exports = joi
    .object()
    .keys({
        verb: joi.string().valid(validVerbs).required(),
        metadataPrefix: joi.any()
            .when('verb', {
                is: joi.valid(verbsWhereMetaPrefixRequired),
                then: joi.when('resumptionToken', {
                    is: joi.exist(),
                    then: joi.forbidden(),
                    otherwise: joi.valid(metadataPrefixValids).required()
                })
            }),
        resumptionToken: joi.any().when('verb', {
            is: joi.string().valid(resumptionTokensWhere),
            then: joi.optional(),
            otherwise: joi.forbidden()
        }),
        identifier: joi.string()
            .when('verb', {
                is: 'GetRecord',
                then: joi.required()
            }),
        set: joi.any()
            .when('verb', {
                is: joi.string().valid(['ListIdentifiers', 'ListRecords']),
                then: joi.optional(),
                otherwise: joi.forbidden()
            }),
        from: joi.any()
            .when('verb', {
                is: joi.string().valid(['ListIdentifiers', 'ListSets', 'ListRecords']),
                then: joi.optional(),
                otherwise: joi.forbidden()
            }),
        until: joi.any()
            .when('verb', {
                is: joi.string().valid(['ListIdentifiers', 'ListSets', 'ListRecords']),
                then: joi.optional(),
                otherwise: joi.forbidden()
            })

    })
