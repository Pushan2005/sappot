import { CalendarIcon } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

export function TicketCard({
    heading,
    content,
    email,
    is_closed,
    timestamp,
}: {
    is_closed: boolean;
    email: string;
    heading: string;
    content: string;
    timestamp: string;
}) {
    const dateTimeGenerator = (timestamp: string) => {
        const date = new Date(timestamp);
        // Format date as Month Day, Year
        const dateStr = date.toLocaleDateString("en-US", {
            month: "long",
            day: "numeric",
            year: "numeric",
        });
        const timeStr = date.toLocaleTimeString("en-US", {
            hour: "numeric",
            minute: "2-digit",
            hour12: true,
        });
        return `${dateStr} • ${timeStr}`;
    };

    const dateTime = dateTimeGenerator(timestamp);

    return (
        <Card className="w-[350px]">
            <CardHeader>
                <div className="flex items-center justify-between">
                    <CardTitle>{heading}</CardTitle>
                    <Badge
                        variant="outline"
                        className={
                            is_closed
                                ? "bg-gray-100 text-gray-800 hover:bg-gray-100"
                                : "bg-yellow-100 text-yellow-800 hover:bg-yellow-100"
                        }
                    >
                        {is_closed ? "Closed" : "Pending"}
                    </Badge>
                </div>
                <CardDescription>{email}</CardDescription>
            </CardHeader>
            <CardContent>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                    {content}
                </p>
            </CardContent>
            <CardFooter className="flex items-center text-xs text-muted-foreground">
                <CalendarIcon className="mr-1 h-3 w-3" />
                <time dateTime={timestamp}>{dateTime}</time>
            </CardFooter>
        </Card>
    );
}
