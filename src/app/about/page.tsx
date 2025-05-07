export default function AboutPage() {
    return (
        <div className="h-full min-h-screen w-full bg-background relative">
            <div className="container mx-auto py-12 px-4">
                {/* Hero Section */}
                <section className="text-center mb-16">
                    <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">
                        About Tech Sappot
                    </h1>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        We&apos;re on a mission to make technical support
                        accessible, efficient, and hassle-free for everyone.
                    </p>
                </section>

                {/* Values Section */}
                <section className="mb-16">
                    <h2 className="text-2xl font-semibold mb-8 text-center">
                        Our Values
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="p-6 rounded-lg border border-border">
                            <h3 className="text-xl font-medium mb-3">
                                Accessibility
                            </h3>
                            <p className="text-muted-foreground">
                                Making technical support available to everyone,
                                regardless of their technical expertise.
                            </p>
                        </div>
                        <div className="p-6 rounded-lg border border-border">
                            <h3 className="text-xl font-medium mb-3">
                                Efficiency
                            </h3>
                            <p className="text-muted-foreground">
                                Delivering quick and effective solutions to
                                minimize downtime and frustration.
                            </p>
                        </div>
                        <div className="p-6 rounded-lg border border-border">
                            <h3 className="text-xl font-medium mb-3">
                                Security
                            </h3>
                            <p className="text-muted-foreground">
                                Ensuring your data and communications are
                                protected with enterprise-grade security.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Story Section */}
                <section className="mb-16">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-2xl font-semibold mb-6">
                            Our Story
                        </h2>
                        <div className="prose prose-lg dark:prose-invert">
                            <p className="text-muted-foreground mb-4">
                                Founded in 2025, Tech Sappot emerged from a
                                simple observation: getting technical help
                                shouldn&apos;t be complicated. We built a
                                platform that connects users with expert support
                                staff quickly and efficiently.
                            </p>
                            <p className="text-muted-foreground mb-4">
                                Our team consists of passionate tech experts who
                                understand both the technical and human aspects
                                of problem-solving. We believe in making
                                technology work for people, not the other way
                                around.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Stats Section */}
                <section className="bg-foreground text-background rounded-lg p-8 mb-16">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                        <div>
                            <h3 className="text-3xl font-bold mb-2">10k+</h3>
                            <p className="text-background/80">
                                Issues Resolved
                            </p>
                        </div>
                        <div>
                            <h3 className="text-3xl font-bold mb-2">50+</h3>
                            <p className="text-background/80">Expert Staff</p>
                        </div>
                        <div>
                            <h3 className="text-3xl font-bold mb-2">99%</h3>
                            <p className="text-background/80">
                                Satisfaction Rate
                            </p>
                        </div>
                    </div>
                </section>

                {/* Team Section */}
                <section>
                    <h2 className="text-2xl font-semibold mb-8 text-center">
                        Our Team
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            {
                                name: "Pushan Thimmegowda",
                                role: "Lead Developer",
                            },
                            {
                                name: "Aryan Singh",
                                role: "Scrum Master",
                            },
                            {
                                name: "Samarth Pyati",
                                role: "Junior Developer",
                            },
                            {
                                name: "Rishab Aryan",
                                role: "Product Owner",
                            },
                        ].map((member) => (
                            <div
                                key={member.name}
                                className="p-6 rounded-lg border border-border text-center"
                            >
                                <div className="w-24 h-24 rounded-full bg-muted mx-auto mb-4"></div>
                                <h3 className="text-xl font-medium mb-2">
                                    {member.name}
                                </h3>
                                <p className="text-muted-foreground mb-2">
                                    {member.role}
                                </p>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
}
