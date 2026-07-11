import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Calendar, Clock } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import { Reveal } from "@/components/Reveal";
import CTASection from "@/components/CTASection";
import { blogPosts, getBlogPost, formatBlogDate } from "@/data/blog";
import { buildSeoHead, SITE_URL, DEFAULT_OG_IMAGE } from "@/seo/metadata";

export const Route = createFileRoute("/blog_/$slug")({
  head: ({ params }) => {
    const post = getBlogPost(params.slug);
    if (!post) {
      return { title: "Article not found | The Vertex Technologies" };
    }
    const url = `${SITE_URL}/blog/${post.slug}`;
    const metaTitle = post.metaTitle ?? post.title;
    const metaDescription = post.metaDescription ?? post.excerpt;
    return buildSeoHead({
      title: `${metaTitle} | The Vertex Technologies`,
      description: metaDescription,
      url,
      image: post.image ? `${SITE_URL}${post.image}` : DEFAULT_OG_IMAGE,
      type: "article",
      publishedTime: post.date,
      author: post.author,
    });
  },
  component: BlogPostPage,
});

function BlogPostPage() {
  const { slug } = Route.useParams();
  const post = getBlogPost(slug);

  if (!post) {
    return (
      <PageLayout>
        <section className="container-x py-28 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--brand-red)]">
            404
          </p>
          <h1 className="mt-4 font-display text-3xl font-bold">Article not found</h1>
          <p className="mt-3 text-muted-foreground">
            The article you are looking for doesn't exist or may have been moved.
          </p>
          <Link
            to="/blog"
            className="mt-8 inline-flex items-center gap-2 rounded-full px-6 py-3 font-bold text-white"
            style={{ background: "var(--brand-red)" }}
          >
            <ArrowLeft className="h-4 w-4" /> Back to blog
          </Link>
        </section>
      </PageLayout>
    );
  }

  const related = blogPosts
    .filter((p) => p.slug !== post.slug && p.category === post.category)
    .slice(0, 2);
  const fallbackRelated = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 2);
  const relatedPosts = related.length > 0 ? related : fallbackRelated;

  return (
    <PageLayout>
      <article>
        {/* HERO */}
        <section className="relative overflow-hidden bg-[var(--ink)] text-white">
          <img
            src={post.image}
            alt=""
            className="absolute inset-0 h-full w-full object-cover opacity-30"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-[var(--ink)]" />
          <div className="container-x relative py-14 md:py-20">
            <nav aria-label="Breadcrumb">
              <ol className="flex flex-wrap items-center gap-1.5 text-sm text-white/70">
                <li>
                  <Link to="/" className="transition-colors hover:text-white">
                    Home
                  </Link>
                </li>
                <li aria-hidden="true" className="text-white/40">
                  /
                </li>
                <li>
                  <Link to="/blog" className="transition-colors hover:text-white">
                    Blog
                  </Link>
                </li>
                <li aria-hidden="true" className="text-white/40">
                  /
                </li>
                <li aria-current="page" className="line-clamp-1 max-w-[60vw] text-white/90">
                  {post.title}
                </li>
              </ol>
            </nav>

            <Link
              to="/blog"
              className="mt-5 flex w-fit items-center gap-2 text-sm text-white/80 transition-colors hover:text-white"
            >
              <ArrowLeft className="h-4 w-4" /> Back to blog
            </Link>

            <div className="mt-6">
              <span
                className="inline-block rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-white"
                style={{ background: "var(--brand-red)" }}
              >
                {post.category}
              </span>
            </div>

            <h1 className="mt-5 max-w-4xl font-display text-3xl font-extrabold leading-[1.08] tracking-tight text-white md:text-5xl">
              {post.title}
            </h1>

            <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-white/80">
              <span className="inline-flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                {formatBlogDate(post.date)}
              </span>
              <span className="inline-flex items-center gap-2">
                <Clock className="h-4 w-4" />
                {post.readTime}
              </span>
              <span>By {post.author}</span>
            </div>
          </div>
        </section>

        {/* COVER IMAGE */}
        <section className="container-x -mt-8 md:-mt-12">
          <Reveal>
            <div className="mx-auto max-w-4xl overflow-hidden rounded-3xl border border-border bg-[var(--ink)] shadow-xl">
              <img
                src={post.image}
                alt={post.imageAlt ?? post.title}
                className="aspect-[16/9] w-full object-contain"
                loading="eager"
              />
            </div>
          </Reveal>
        </section>

        {/* BODY */}
        <section className="py-12 md:py-16">
          <div className="container-x">
            <div className="mx-auto max-w-3xl">
              <p className="text-lg leading-relaxed text-muted-foreground">{post.excerpt}</p>
              <hr className="my-8 border-border" />

              <div className="space-y-10">
                {post.content.map((block, i) => (
                  <Reveal key={i}>
                    <div>
                      {block.heading &&
                        (block.level === 4 ? (
                          <h4
                            className="font-display text-lg font-bold tracking-tight md:text-xl"
                            style={{ color: "var(--brand-orange)" }}
                          >
                            {block.heading}
                          </h4>
                        ) : block.level === 3 ? (
                          <h3
                            className="font-display text-xl font-bold tracking-tight md:text-2xl"
                            style={{ color: "var(--brand-blue)" }}
                          >
                            {block.heading}
                          </h3>
                        ) : (
                          <h2
                            className="font-display text-2xl font-bold tracking-tight md:text-3xl"
                            style={{ color: "var(--brand-green)" }}
                          >
                            {block.heading}
                          </h2>
                        ))}
                      {block.paras?.map((para, j) => (
                        <p
                          key={j}
                          className={`${block.heading ? "mt-4" : ""} text-base leading-relaxed text-foreground/80 md:text-lg [&:not(:first-child)]:mt-4`}
                        >
                          {para}
                        </p>
                      ))}
                      {block.bullets && (
                        <ul className="mt-5 space-y-3">
                          {block.bullets.map((item) => (
                            <li key={item} className="flex items-start gap-3">
                              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--brand-red)]" />
                              <span className="leading-relaxed text-foreground/80">{item}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                      {block.image && (
                        <figure className="mt-7">
                          <div className="overflow-hidden rounded-2xl border border-border shadow-lg">
                            <img
                              src={block.image.src}
                              alt={block.image.alt}
                              className="w-full object-cover"
                              loading="lazy"
                            />
                          </div>
                          {block.image.caption && (
                            <figcaption className="mt-3 text-center text-sm text-muted-foreground">
                              {block.image.caption}
                            </figcaption>
                          )}
                        </figure>
                      )}
                    </div>
                  </Reveal>
                ))}
              </div>

              <div className="mt-12 rounded-3xl border border-border bg-[var(--surface)] p-7 md:p-9">
                <p className="font-display text-xl font-bold">Want this built for your business?</p>
                <p className="mt-2 text-muted-foreground">
                  We design and deploy AI agents, automation and marketing systems tailored to your
                  goals — usually within days.
                </p>
                <Link
                  to="/contact"
                  className="mt-6 inline-flex items-center gap-2 rounded-full px-6 py-3 font-bold text-white transition-all hover:-translate-y-0.5"
                  style={{
                    background: "var(--brand-red)",
                    boxShadow: "0 14px 32px -12px rgba(218,72,56,0.55)",
                  }}
                >
                  Talk to us <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* RELATED */}
        <section className="border-t border-border py-14 md:py-20">
          <div className="container-x">
            <h2
              className="font-display text-2xl font-bold tracking-tight md:text-3xl"
              style={{ color: "var(--brand-green)" }}
            >
              Related posts
            </h2>

            {relatedPosts.length > 0 ? (
              <div className="mt-8 grid gap-6 sm:grid-cols-2">
                {relatedPosts.map((p) => (
                  <Link
                    key={p.slug}
                    to="/blog/$slug"
                    params={{ slug: p.slug }}
                    className="group flex overflow-hidden card-tile bg-card"
                  >
                    <div className="relative w-32 shrink-0 overflow-hidden sm:w-40">
                      <img
                        src={p.image}
                        alt={p.title}
                        className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                    </div>
                    <div className="flex flex-1 flex-col justify-center p-5">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[var(--brand-red)]">
                        {p.category}
                      </span>
                      <h3 className="mt-1.5 font-display text-base font-bold leading-snug">
                        {p.title}
                      </h3>
                      <span className="mt-2 inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--brand-red)]">
                        Read more
                        <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="mt-6 flex flex-col items-start gap-4 rounded-3xl border border-border bg-card p-7 sm:flex-row sm:items-center sm:justify-between md:p-9">
                <p className="text-muted-foreground">
                  More articles are on the way — new posts will appear here so you always have
                  something related to read next.
                </p>
                <Link
                  to="/blog"
                  className="inline-flex shrink-0 items-center gap-2 rounded-full border border-border px-5 py-2.5 font-semibold transition hover:bg-muted"
                >
                  Browse all articles
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            )}
          </div>
        </section>
      </article>

      <CTASection />
    </PageLayout>
  );
}
