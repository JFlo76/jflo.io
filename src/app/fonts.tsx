import { Roboto_Condensed, Noto_Sans } from 'next/font/google'

export const robotoCondensed = Roboto_Condensed({
    subsets: ['latin'],
    weight: ['700'],
    display: 'swap',
})

export const notoSans = Noto_Sans({
    subsets: ['latin'],
    weight: ['400', '700'],
    display: 'swap',
})