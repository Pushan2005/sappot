"use client";
import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="bg-background border-b border-border">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex-shrink-0 flex items-center">
                        <Link
                            href="/"
                            className="text-xl font-bold text-primary"
                        >
                            Sappot
                        </Link>
                    </div>
                    <div className="hidden md:flex items-center space-x-4">
                        <Link
                            href="/tickets"
                            className="px-3 py-2 rounded-md text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                        >
                            Tickets
                        </Link>
                        <Link
                            href="/about"
                            className="px-3 py-2 rounded-md text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                        >
                            About
                        </Link>
                        <Link
                            href="/account"
                            className="px-3 py-2 rounded-md text-sm font-medium text-muted-foreground hover:text-primary transition-colors cursor-pointer bg-transparent border-none"
                        >
                            Account
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}
