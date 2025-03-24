"use client";

import { useState, useEffect } from "react";
import { CalendarIcon } from "lucide-react";
import { jwtDecode, JwtPayload } from "jwt-decode";

import { Badge } from "@/components/ui/badge";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import {
    ContextMenu,
    ContextMenuContent,
    ContextMenuItem,
    ContextMenuTrigger,
} from "@/components/ui/context-menu";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { createClient } from "@/utils/supabase/client";
import { useRouter } from "next/navigation";

interface CustomJwtPayload extends JwtPayload {
    user_role: string;
}

export function TicketCard({
    heading,
    content,
    email,
    is_closed,
    timestamp,
    ticket_id,
    closed_at,
}: {
    is_closed: boolean;
    email: string;
    heading: string;
    content: string;
    timestamp: string;
    ticket_id: number;
    closed_at?: string | null;
}) {
    const [alertOpen, setAlertOpen] = useState(false);
    const [userRole, setUserRole] = useState<string | null>(null);
    const router = useRouter();

    useEffect(() => {
        const fetchUserRole = async () => {
            try {
                const role = await getUserRole();
                setUserRole(role);
            } catch (error) {
                console.error("Error fetching user role:", error);
            }
        };

        fetchUserRole();
    }, []);

    const dateTimeGenerator = (timestamp: string) => {
        const date = new Date(timestamp);
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

    const getUserRole = async () => {
        const supabase = await createClient();
        const { data, error } = await supabase.auth.getSession();
        if (error || !data?.session) {
            router.push("/login");
            return null;
        }
        const jwt = data.session!.access_token;
        const decoded = jwtDecode<CustomJwtPayload>(jwt);
        const user_role: string = decoded.user_role;
        return user_role;
    };

    const changeTicketStatus = async () => {
        const supabase = await createClient();
        const { data, error } = await supabase.auth.getUser();
        if (error || !data?.user) {
            router.push("/login");
        }
        const user_id = data.user?.id;
        const closed_at = new Date().toISOString();

        const updatePayload = is_closed
            ? { is_closed: false, closed_by: null, closed_at: null }
            : { is_closed: true, closed_by: user_id, closed_at: closed_at };

        const ticketUpdateResponse = await supabase
            .from("tickets")
            .update(updatePayload)
            .eq("id", ticket_id);
        if (ticketUpdateResponse.error) {
            router.push("/error");
        }
        router.refresh();
    };

    return (
        <>
            <ContextMenu>
                <ContextMenuTrigger>
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
                        <CardFooter className="flex flex-col items-start space-y-1 text-xs text-muted-foreground">
                            <div className="flex items-center">
                                <CalendarIcon className="mr-1 h-3 w-3" />
                                <span className="mr-1">Created:</span>
                                <time dateTime={timestamp}>{dateTime}</time>
                            </div>
                            {closed_at && (
                                <div className="flex items-center">
                                    <CalendarIcon className="mr-1 h-3 w-3" />
                                    <span className="mr-1">Closed:</span>
                                    <time dateTime={closed_at}>
                                        {dateTimeGenerator(closed_at)}
                                    </time>
                                </div>
                            )}
                        </CardFooter>
                    </Card>
                </ContextMenuTrigger>
                {userRole !== "end_user" && (
                    <ContextMenuContent>
                        <ContextMenuItem onClick={() => setAlertOpen(true)}>
                            Change Ticket Status
                        </ContextMenuItem>
                    </ContextMenuContent>
                )}
            </ContextMenu>

            <AlertDialog open={alertOpen} onOpenChange={setAlertOpen}>
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle>
                            Change Ticket Status
                        </AlertDialogTitle>
                        <AlertDialogDescription>
                            Are you sure you want to change the status of this
                            ticket from {is_closed ? "Closed" : "Pending"} to{" "}
                            {is_closed ? "Pending" : "Closed"}?
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction onClick={changeTicketStatus}>
                            Confirm
                        </AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </>
    );
}
