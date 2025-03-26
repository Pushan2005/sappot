import Link from "next/link";

export default function Home() {
    return (
        <div className="grid grid-rows-[20px_1fr_auto] items-center justify-items-center min-h-screen p-8 pb-0 gap-16 sm:p-20 sm:pb-0 font-[family-name:var(--font-geist-sans)]">
            <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start max-w-4xl w-full">
                {/* Hero Section */}
                <section className="flex flex-col gap-6 items-center text-center sm:text-left sm:items-start w-full">
                    <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
                        Tech support made simple
                    </h1>
                    <p className="text-lg text-muted-foreground max-w-[600px]">
                        Get fast, reliable support for all your technical
                        issues. Our platform connects you with experts who can
                        solve your problems quickly.
                    </p>
                    <div className="flex gap-4 items-center flex-col sm:flex-row">
                        <Link
                            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
                            href="/tickets/new"
                            rel="noopener noreferrer"
                        >
                            Open a ticket
                        </Link>
                        <Link
                            className="rounded-full border border-solid border-foreground transition-colors flex items-center justify-center bg-transparent text-foreground gap-2 hover:bg-foreground hover:text-background font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
                            href="/tickets"
                            rel="noopener noreferrer"
                        >
                            View tickets
                        </Link>
                    </div>
                </section>

                {/* Features Section */}
                <section className="mt-16 w-full">
                    <h2 className="text-2xl font-semibold mb-8 text-center sm:text-left">
                        Why choose Sappot?
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                        <div className="p-6 rounded-lg border border-border">
                            <h3 className="text-xl font-medium mb-2">
                                Fast Resolution
                            </h3>
                            <p className="text-muted-foreground">
                                Get your issues resolved quickly by our expert
                                team
                            </p>
                        </div>
                        <div className="p-6 rounded-lg border border-border">
                            <h3 className="text-xl font-medium mb-2">
                                Simple Process
                            </h3>
                            <p className="text-muted-foreground">
                                Create a ticket and track progress in real-time
                            </p>
                        </div>
                        <div className="p-6 rounded-lg border border-border">
                            <h3 className="text-xl font-medium mb-2">
                                Secure Platform
                            </h3>
                            <p className="text-muted-foreground">
                                Your data is always protected with
                                enterprise-grade security
                            </p>
                        </div>
                    </div>
                </section>

                {/* How It Works Section */}
                <section className="mt-16 w-full">
                    <h2 className="text-2xl font-semibold mb-8 text-center sm:text-left">
                        How it works
                    </h2>
                    <div className="flex flex-col gap-6">
                        <div className="flex items-start gap-4">
                            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-foreground text-background flex items-center justify-center font-medium">
                                1
                            </div>
                            <div>
                                <h3 className="text-lg font-medium">
                                    Create a ticket
                                </h3>
                                <p className="text-muted-foreground">
                                    Describe your issue in detail to help us
                                    understand the problem
                                </p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-foreground text-background flex items-center justify-center font-medium">
                                2
                            </div>
                            <div>
                                <h3 className="text-lg font-medium">
                                    Get matched with an expert
                                </h3>
                                <p className="text-muted-foreground">
                                    Our system assigns the best technical expert
                                    for your specific issue
                                </p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-foreground text-background flex items-center justify-center font-medium">
                                3
                            </div>
                            <div>
                                <h3 className="text-lg font-medium">
                                    Problem solved
                                </h3>
                                <p className="text-muted-foreground">
                                    Receive a solution and get back to what
                                    matters most
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="mt-16 w-full p-8 bg-foreground text-background rounded-lg text-center">
                    <h2 className="text-2xl font-semibold mb-4">
                        Ready to get started?
                    </h2>
                    <p className="mb-6 max-w-[500px] mx-auto">
                        Join thousands of users who have resolved their
                        technical issues with Sappot
                    </p>
                    <Link
                        className="rounded-full border border-solid border-background transition-colors flex items-center justify-center bg-transparent text-background gap-2 hover:bg-background hover:text-foreground font-medium text-sm sm:text-base h-10 sm:h-12 px-6 sm:px-8 mx-auto w-fit"
                        href="/tickets/new"
                        rel="noopener noreferrer"
                    >
                        Open your first ticket
                    </Link>
                </section>
            </main>

            {/* Footer */}
            <footer className="w-full mt-20 border-t border-border py-10 row-start-3">
                <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
                        <div className="space-y-4">
                            <h3 className="text-lg font-semibold">
                                Tech Sappot
                            </h3>
                            <p className="text-sm text-muted-foreground">
                                The fastest way to resolve your technical
                                issues. Expert support when you need it most.
                            </p>
                            <div className="flex space-x-4">
                                <a
                                    href="#"
                                    className="text-muted-foreground hover:text-foreground transition-colors"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="20"
                                        height="20"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                                    </svg>
                                </a>
                                <a
                                    href="#"
                                    className="text-muted-foreground hover:text-foreground transition-colors"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="20"
                                        height="20"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                                    </svg>
                                </a>
                                <a
                                    href="#"
                                    className="text-muted-foreground hover:text-foreground transition-colors"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="20"
                                        height="20"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <rect
                                            x="2"
                                            y="2"
                                            width="20"
                                            height="20"
                                            rx="5"
                                            ry="5"
                                        ></rect>
                                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                        <line
                                            x1="17.5"
                                            y1="6.5"
                                            x2="17.51"
                                            y2="6.5"
                                        ></line>
                                    </svg>
                                </a>
                                <a
                                    href="#"
                                    className="text-muted-foreground hover:text-foreground transition-colors"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="20"
                                        height="20"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                                        <rect
                                            x="2"
                                            y="9"
                                            width="4"
                                            height="12"
                                        ></rect>
                                        <circle cx="4" cy="4" r="2"></circle>
                                    </svg>
                                </a>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <h3 className="text-lg font-semibold">Services</h3>
                            <ul className="space-y-2 text-sm text-muted-foreground">
                                <li>
                                    <Link
                                        href="#"
                                        className="hover:text-foreground transition-colors"
                                    >
                                        Hardware Support
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="#"
                                        className="hover:text-foreground transition-colors"
                                    >
                                        Software Issues
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="#"
                                        className="hover:text-foreground transition-colors"
                                    >
                                        Network Setup
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="#"
                                        className="hover:text-foreground transition-colors"
                                    >
                                        Security Solutions
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        <div className="space-y-4">
                            <h3 className="text-lg font-semibold">Company</h3>
                            <ul className="space-y-2 text-sm text-muted-foreground">
                                <li>
                                    <Link
                                        href="#"
                                        className="hover:text-foreground transition-colors"
                                    >
                                        About Us
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="#"
                                        className="hover:text-foreground transition-colors"
                                    >
                                        Careers
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="#"
                                        className="hover:text-foreground transition-colors"
                                    >
                                        Blog
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="#"
                                        className="hover:text-foreground transition-colors"
                                    >
                                        Contact Us
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        <div className="space-y-4">
                            <h3 className="text-lg font-semibold">Legal</h3>
                            <ul className="space-y-2 text-sm text-muted-foreground">
                                <li>
                                    <Link
                                        href="#"
                                        className="hover:text-foreground transition-colors"
                                    >
                                        Terms of Service
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="#"
                                        className="hover:text-foreground transition-colors"
                                    >
                                        Privacy Policy
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="#"
                                        className="hover:text-foreground transition-colors"
                                    >
                                        Cookie Policy
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="#"
                                        className="hover:text-foreground transition-colors"
                                    >
                                        Compliance
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="border-t border-border mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
                        <p className="text-sm text-muted-foreground">
                            © {new Date().getFullYear()} Tech Sappot. All rights
                            reserved.
                        </p>
                        <div className="mt-4 md:mt-0">
                            <p className="text-sm text-muted-foreground">
                                <span className="mr-2">Need help?</span>
                                <a
                                    href="mailto:support@techsappot.com"
                                    className="hover:text-foreground transition-colors"
                                >
                                    support@techsappot.com
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}
