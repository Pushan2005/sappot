import React from 'react';
import { createClient } from '@/utils/supabase/server';
import { redirect } from 'next/navigation';
import { TicketCard } from './ ticket-card';

export default async function TicketsPage() {
  const supabase = await createClient();

  const { data, error } = await supabase.auth.getUser();
  if (error || !data?.user) {
    redirect('/login');
  }

  const getTickets = async () => {
    const { data, error } = await supabase.from('tickets').select('*');

    if (error || !data) {
      redirect('/error');
    }

    const tickets = data.map(ticket => ({
      ticket_id: ticket.id,
      heading: ticket.heading,
      content: ticket.content,
      email: ticket.email,
      timestamp: ticket.created_at,
      status: ticket.is_closed,
      closed_at: ticket.closed_at,
    }));

    return tickets;
  };

  const tickets = await getTickets();

  return (
    <div className="h-full min-h-screen w-full bg-background relative">
      <div className="container mx-auto h-full">
        <div className="flex flex-col md:flex-row h-full min-h-screen">
          {/* Left side */}
          <div className="flex flex-col items-center justify-center p-8 md:w-1/3 bg-muted/10">
            <h1 className="text-3xl font-bold mb-2">Tickets</h1>
            <p className="text-muted-foreground text-lg">List of all tickets</p>
          </div>
          {/* Right side */}
          <div className="p-8 md:w-2/3 bg-muted/20">
            <div className="grid auto-rows-auto auto-cols-auto gap-4">
              {tickets.map((ticket, index) => (
                <TicketCard
                  key={index}
                  ticket_id={ticket.ticket_id}
                  heading={ticket.heading}
                  content={ticket.content}
                  email={ticket.email}
                  timestamp={ticket.timestamp}
                  is_closed={ticket.status}
                  closed_at={ticket.closed_at}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
