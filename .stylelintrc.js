module.exports = {
    extends: [
        'stylelint-config-standard',
        'stylelint-config-recess-order'
    ],
    syntax: 'scss',
    fix: true,
    rules: {
        'at-rule-no-unknown': null,
        indentation: 4
    }
}
