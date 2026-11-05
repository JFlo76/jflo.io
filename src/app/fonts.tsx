import localFont from 'next/font/local'

// Self-hosted (latin subset). Kept terse: Storybook derives a filename from these arguments.
export const robotoCondensed = localFont({
    src: './font-files/roboto-700.woff2',
    weight: '700',
})

// Variable font file; covers both the 400 and 700 weights used on the site
export const notoSans = localFont({
    src: './font-files/noto.woff2',
    weight: '100 900',
})
