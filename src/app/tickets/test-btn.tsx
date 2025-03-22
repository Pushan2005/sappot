"use client";
import { Button } from "@/components/ui/button";
import { createClient } from "@/utils/supabase/client";
import { Ticket } from "./types";
import { jwtDecode } from "jwt-decode";

interface TestBtnProps {
    uuid: string;
    email: string;
    heading: string;
    content: string;
}

export default function TestBtn({
    uuid,
    email,
    heading,
    content,
}: TestBtnProps) {
    const supabase = createClient();

    const createTicket = async () => {
        const ticket: Ticket = {
            created_by: uuid,
            email: email,
            heading: heading,
            content: content,
        };
        const { data, error } = await supabase
            .from("tickets")
            .insert([ticket])
            .select();

        console.log("Ticket created");
    };

    const getJWT = async () => {
        const { data, error } = await supabase.auth.getSession();
        if (!data) {
            console.log("No Session found");
            return;
        }
        const jwt = data!.session!.access_token;
        const decoded = jwtDecode(jwt);
        console.log(decoded);
    };

    return <Button onClick={getJWT}>Get JWT</Button>;
}
