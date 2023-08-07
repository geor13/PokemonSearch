import MiniSearch from 'minisearch'

const miniSearch = new MiniSearch ({
    fields: ['name', 'attribute', 'types'],
    storeFields: [
        'url',
        'name',
        'back_default',
        'front_default',
        'types',
        'hp',
        'attack',
        'defense',
        'special_attack',
        'special_defense',
        'speed'
    ],
    searchOptions: {
        boost: { name: 2 },
        fuzzy: 0.2,
        prefix: true,
    },
    extractField: (document, fieldName) => {
        if (fieldName === 'attribute') {
            return 'pokemon'
        }
        return document[fieldName]
    }
})

export default miniSearch