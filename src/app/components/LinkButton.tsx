'use client'

import { robotoCondensed } from '../fonts';

interface LinkButtonProps {
    href: string;
    label: string;
    className?: string;
    target?: '_self' | '_blank' | '_parent' | '_top';
    icon?: React.ReactNode;
}

export default function LinkButton({ href, target, label, className = '', icon }: LinkButtonProps) {
    return (
        <a
            href={href}
            target={target ? target : undefined}
            className={`${robotoCondensed.className} block lg:inline-block py-4 px-8 uppercase text-center text-white bg-[var(--complementary-orange-400)] rounded-lg text-foreground text-lg transition-all duration-300 ease-in-out hover:translate-x-2 hover:-translate-y-[6px] hover:shadow-[calc(-2px)_2px_0_var(--complementary-orange-600),calc(-4px)_4px_0_var(--complementary-orange-600),calc(-6px)_6px_0_var(--complementary-orange-600)] ${className}`}
        >
            {icon && <span className="me-4">{icon}</span>}
            {label}
        </a>
    );
}
