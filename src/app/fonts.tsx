import localFont from 'next/font/local'

export const robotoCondensed = localFont({
    src: './font-files/RobotoCondensed-latin-700.woff2',
    weight: '700',
    display: 'swap',
})

// Variable font file; covers both the 400 and 700 weights used on the site
export const notoSans = localFont({
    src: './font-files/NotoSans-latin-variable.woff2',
    weight: '100 900',
    display: 'swap',
})
