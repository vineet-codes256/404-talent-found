import { ReactNode } from 'react';

interface CardProps {
    children: ReactNode;
    className?: string;
}

export function Card({ children, className }: CardProps) {
    return (
        <div className={`bg-white p-4 rounded-2xl ${className}`} style="height: 100%;">{children}</div>
    );
}

interface CardContentProps {
    children: ReactNode;
}

export function CardContent({ children }: CardContentProps) {
    return <div className="p-4">{children}</div>;
}
