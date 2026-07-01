import { Outlet, Link, createRootRoute, HeadContent } from "@tanstack/react-router";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    title: "AI Automation & Growth Agency | The Vertex Technologies",
    meta: [
      {
        name: "description",
        content:
          "The Vertex Technologies engineers AI agents, automation and marketing systems that remove bottlenecks and turn companies into scalable revenue engines.",
      },
      {
        property: "og:title",
        content: "AI Automation & Growth Agency | The Vertex Technologies",
      },
      {
        property: "og:description",
        content:
          "The Vertex Technologies engineers AI agents, automation and marketing systems that remove bottlenecks and turn companies into scalable revenue engines.",
      },
      { property: "og:url", content: "https://www.thevertextechnologies.com/" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "https://www.thevertextechnologies.com/" }],
  }),
  component: () => (
    <>
      <HeadContent />
      <Outlet />
    </>
  ),
  notFoundComponent: NotFoundComponent,
});