import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/dashboard/messages')({
  component: () => <div>Hello /dashboard/messages!</div>,
});
