module.exports = {
	extends: 'stylelint-config-standard-scss',
	plugins: ['stylelint-prettier'],
	customSyntax: 'postcss-html',
	overrides: [
		{
			files: ['**/*.vue']
		}
	],
	rules: {
		'prettier/prettier': true,
		'color-hex-length': 'long',
		'color-function-notation': 'modern',
		'font-family-name-quotes': 'always-unless-keyword'
	}
}
