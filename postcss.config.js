const tailwind = require('tailwindcss')
const cssnano = require('cssnano')
const autoprefixer = require('autoprefixer')
const purgecss = require('@fullhuman/postcss-purgecss')


module.exports = {
    plugins: [
        tailwind,
        cssnano({ preset: 'default' }),
        purgecss({
            // Specify the paths to all of the template files in your project 
            content: [
                './src/**/*.html',
                //   './src/**/*.vue',
                //   './src/**/*.jsx',
                // etc.
            ],
            // Include any special characters you're using in this regular expression
            defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
        }),
        autoprefixer
    ]
}