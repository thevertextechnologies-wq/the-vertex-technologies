import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { ArrowRight, Calendar, Clock, Search, X } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import PageBanner from "@/components/PageBanner";
import { Reveal } from "@/components/Reveal";
import CTASection from "@/components/CTASection";
import bannerResources from "@/assets/banner-resources.jpg";
import { blogPosts, formatBlogDate } from "@/data/blog";
import { buildSeoHead } from "@/seo/metadata";

export const Route = createFileRoute("/blog")({
  head: () =>
    buildSeoHead({
      title: "Blog | AI, Automation & Growth Insights | The Vertex Technologies",
      description:
        "Practical articles on AI agents, automation, marketing systems and business growth from The Vertex Technologies — actionable insights you can apply today.",
      url: "https://www.thevertextechnologies.com/blog",
    }),
  component: BlogPage,
});

function BlogPage() {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return blogPosts;
    return blogPosts.filter((post) =>
      [post.title, post.excerpt, post.category, post.author]
        .join(" ")
        .toLowerCase()
        .includes(q),
    );
  }, [query]);

  const [featured, ...rest] = filtered;

  return (
    <PageLayout>
      <PageBanner
        eyebrow="Blog"
        title="Insights on AI, automation and growth."
        intro="Actionable articles and playbooks to help you put AI agents, automation and modern marketing systems to work in your business."
        image={bannerResources}
        dark={true}
      />

      {/* SEARCH */}
      <section className="pt-12 md:pt-16">
        <div className="container-x">
          <Reveal>
            <div className="mx-auto max-w-2xl">
              <label htmlFor="blog-search" className="sr-only">
                Search articles
              </label>
              <div className="relative">
                <Search className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
                <input
                  id="blog-search"
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search articles by topic, keyword or category…"
                  className="w-full rounded-full border border-border bg-card py-3.5 pl-12 pr-12 text-base text-foreground outline-none transition focus:border-[var(--brand-red)] focus:ring-2 focus:ring-[var(--brand-red)]/20"
                />
                {query && (
                  <button
                    type="button"
                    onClick={() => setQuery("")}
                    aria-label="Clear search"
                    className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full p-1.5 text-muted-foreground transition hover:bg-muted hover:text-foreground"
                  >
                    <X className="h-4 w-4" />
                  </button>
                )}
              </div>
              <p className="mt-3 text-center text-sm text-muted-foreground">
                {query
                  ? `${filtered.length} ${filtered.length === 1 ? "article" : "articles"} found`
                  : `${blogPosts.length} articles`}
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* RESULTS */}
      <section className="py-12 md:py-16 pb-20">
        <div className="container-x">
          {filtered.length === 0 ? (
            <div className="mx-auto max-w-md rounded-3xl border border-border bg-card p-12 text-center">
              <p className="font-display text-xl font-bold">No articles found</p>
              <p className="mt-2 text-muted-foreground">
                Try a different keyword or clear your search.
              </p>
              <button
                type="button"
                onClick={() => setQuery("")}
                className="mt-6 inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 font-semibold transition hover:bg-muted"
              >
                Clear search
              </button>
            </div>
          ) : (
            <>
              {/* Featured (first result) */}
              {featured && (
                <Reveal>
                  <Link
                    to="/blog/$slug"
                    params={{ slug: featured.slug }}
                    className="group mb-12 block card-tile overflow-hidden bg-card"
                  >
                    <div className="grid lg:grid-cols-2">
                      <div className="relative flex items-center justify-center overflow-hidden bg-[var(--ink)]">
                        <img
                          src={featured.image}
                          alt={featured.title}
                          className="h-auto w-full object-contain"
                          loading="eager"
                        />
                        <span
                          className="absolute left-4 top-4 rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-white"
                          style={{ background: "var(--brand-red)" }}
                        >
                          {featured.category}
                        </span>
                      </div>
                      <div className="flex flex-col justify-center p-7 sm:p-9 lg:p-12">
                        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-muted-foreground">
                          <span className="inline-flex items-center gap-1.5">
                            <Calendar className="h-3.5 w-3.5" />
                            {formatBlogDate(featured.date)}
                          </span>
                          <span className="inline-flex items-center gap-1.5">
                            <Clock className="h-3.5 w-3.5" />
                            {featured.readTime}
                          </span>
                        </div>
                        <h2 className="mt-4 font-display text-2xl font-bold leading-tight text-balance md:text-3xl">
                          {featured.title}
                        </h2>
                        <p className="mt-4 leading-relaxed text-muted-foreground">
                          {featured.excerpt}
                        </p>
                        <div className="mt-8 pt-2">
                          <span
                            className="inline-flex items-center gap-2 rounded-full px-6 py-3 font-bold text-white transition-all group-hover:-translate-y-0.5"
                            style={{
                              background: "var(--brand-red)",
                              boxShadow: "0 14px 32px -12px rgba(218,72,56,0.55)",
                            }}
                          >
                            Read more
                            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </Reveal>
              )}

              {/* Grid of the rest */}
              {rest.length > 0 && (
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {rest.map((post) => (
                    <Reveal key={post.slug}>
                      <Link
                        to="/blog/$slug"
                        params={{ slug: post.slug }}
                        className="group flex h-full flex-col overflow-hidden card-tile bg-card"
                      >
                        <div className="relative aspect-[16/10] overflow-hidden">
                          <img
                            src={post.image}
                            alt={post.title}
                            className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                            loading="lazy"
                          />
                          <span className="absolute left-3 top-3 rounded-full bg-black/70 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white backdrop-blur-sm">
                            {post.category}
                          </span>
                        </div>
                        <div className="flex flex-1 flex-col p-6">
                          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-muted-foreground">
                            <span className="inline-flex items-center gap-1.5">
                              <Calendar className="h-3.5 w-3.5" />
                              {formatBlogDate(post.date)}
                            </span>
                            <span className="inline-flex items-center gap-1.5">
                              <Clock className="h-3.5 w-3.5" />
                              {post.readTime}
                            </span>
                          </div>
                          <h3 className="mt-3 font-display text-xl font-bold leading-snug">
                            {post.title}
                          </h3>
                          <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-muted-foreground">
                            {post.excerpt}
                          </p>
                          <span className="mt-5 inline-flex items-center gap-2 pt-1 font-semibold text-[var(--brand-red)]">
                            Read more
                            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                          </span>
                        </div>
                      </Link>
                    </Reveal>
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      </section>

      <CTASection
        eyebrow="Want results like these?"
        title="Turn these ideas into working systems."
      />
    </PageLayout>
  );
}
