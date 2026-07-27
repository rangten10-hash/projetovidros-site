import { useEffect } from "react";
import { Link, useParams, Navigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { getPostBySlug } from "@/data/blogPosts";
import { ArrowLeft, MessageCircle } from "lucide-react";
import { gtagReportConversion } from "@/lib/gtag";
import { useSeo, SITE_URL } from "@/lib/seo";
import { autoLinkText } from "@/lib/autoLink";
import YouTubeFacade from "@/components/YouTubeFacade";


const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getPostBySlug(slug) : undefined;
  const linkedTerms = new Set<string>();


  const cleanTitle = post
    ? post.title.replace(/[^\p{L}\p{N}\s:–\-+]/gu, "").trim()
    : "";

  const articleJsonLd = post
    ? {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: cleanTitle,
        datePublished: post.date,
        author: { "@type": "Person", name: post.author },
        image: `${SITE_URL}${post.image}`,
        mainEntityOfPage: `${SITE_URL}/blog/${post.slug}`,
        publisher: {
          "@type": "Organization",
          name: "Projeto Vidros",
          logo: {
            "@type": "ImageObject",
            url: `${SITE_URL}/icon-512.png`,
          },
        },
      }
    : undefined;

  const faqJsonLd =
    post?.faq && post.faq.length
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: post.faq.map((f) => ({
            "@type": "Question",
            name: f.question,
            acceptedAnswer: { "@type": "Answer", text: f.answer },
          })),
        }
      : undefined;

  useSeo({
    title: post ? `${cleanTitle} | Projeto Vidros` : "Blog | Projeto Vidros",
    description: post?.metaDescription ?? "",
    path: post ? `/blog/${post.slug}` : "/blog",
    image: post ? `${SITE_URL}${post.image}` : undefined,
    jsonLd: articleJsonLd
      ? faqJsonLd
        ? [articleJsonLd, faqJsonLd]
        : articleJsonLd
      : undefined,
  });


  useEffect(() => {
    if (post) window.scrollTo(0, 0);
  }, [post]);

  if (!post) return <Navigate to="/blog" replace />;

  const handleCta = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    gtagReportConversion(href);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-28 pb-20">
        <article className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-copper font-semibold text-sm mb-6 hover:underline"
            >
              <ArrowLeft className="w-4 h-4" />
              Voltar ao blog
            </Link>

            <time className="text-xs text-foreground/50 tracking-wider uppercase">
              {new Date(post.date).toLocaleDateString("pt-BR", {
                day: "2-digit",
                month: "long",
                year: "numeric",
              })}
              {" · "}
              {post.author}
            </time>

            <h1 className="font-display text-3xl md:text-5xl text-petrol mt-3 mb-6 leading-tight">
              {post.title}
            </h1>

            <figure className="mb-10">
              <div className="rounded-xl overflow-hidden bg-muted">
                <img
                  src={post.image}
                  alt={post.imageAlt}
                  fetchPriority="high"
                  decoding="async"
                  className="w-full h-auto object-cover"
                />
              </div>
              {post.autoLink && (
                <figcaption className="mt-2 text-sm text-foreground/60 text-center italic">
                  {post.imageAlt}
                </figcaption>
              )}
            </figure>



            <div className="space-y-6 text-foreground/85 text-lg leading-relaxed">
              {post.content.map((block, i) => {
                const fmt = (t: string) =>
                  post.autoLink ? autoLinkText(t, linkedTerms) : t;
                if (block.type === "paragraph")
                  return <p key={i}>{fmt(block.text)}</p>;
                if (block.type === "heading")
                  return (
                    <h2
                      key={i}
                      className="font-display text-2xl md:text-3xl text-petrol mt-10 mb-2"
                    >
                      {block.text}
                    </h2>
                  );
                if (block.type === "list")
                  return (
                    <ul key={i} className="space-y-3 pl-1">
                      {block.items.map((item, j) => (
                        <li key={j} className="flex gap-3">
                          <span className="text-copper mt-2 h-1.5 w-1.5 rounded-full bg-copper flex-shrink-0" />
                          <span>
                            {item.strong && (
                              <strong className="text-petrol font-semibold">
                                {item.strong}{" "}
                              </strong>
                            )}
                            {fmt(item.text)}
                          </span>
                        </li>
                      ))}
                    </ul>
                  );
                if (block.type === "image")
                  return (
                    <figure key={i} className="my-6">
                      <img
                        src={block.src}
                        alt={block.alt}
                        loading="lazy"
                        decoding="async"
                        className="rounded-xl w-full h-auto"
                      />
                      {block.caption && (
                        <figcaption className="mt-2 text-sm text-foreground/60 text-center italic">
                          {block.caption}
                        </figcaption>
                      )}
                    </figure>
                  );

                if (block.type === "internalLink")
                  return (
                    <div key={i} className="my-8 rounded-xl border border-copper/30 bg-copper/5 p-6 text-center">
                      {block.description && (
                        <p className="text-foreground/80 mb-4 text-base">{block.description}</p>
                      )}
                      <Link
                        to={block.href}
                        className="inline-flex items-center justify-center gap-2 bg-petrol hover:bg-petrol/90 text-primary-foreground font-semibold px-6 py-3 rounded-lg transition-colors"
                      >
                        {block.label}
                      </Link>
                    </div>
                  );
                if (block.type === "youtube")
                  return (
                    <div key={i} className="my-8">
                      <YouTubeFacade videoId={block.videoId} title={block.title} />
                    </div>

                  );
                return null;
              })}
            </div>

            {post.faq && post.faq.length > 0 && (
              <section className="mt-14">
                <h2 className="font-display text-2xl md:text-3xl text-petrol mb-6">
                  {post.faqTitle ?? "Perguntas Frequentes"}
                </h2>
                <div className="space-y-4">
                  {post.faq.map((item, i) => (
                    <div
                      key={i}
                      className="rounded-xl border border-petrol/15 bg-muted/40 p-5"
                    >
                      <h3 className="font-semibold text-petrol text-lg mb-2">
                        {item.question}
                      </h3>
                      <p className="text-foreground/80 text-base leading-relaxed">
                        {item.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {post.cta && (
              <div className="mt-12 rounded-2xl bg-petrol p-8 md:p-10 text-center">
                <p className="text-primary-foreground/80 text-sm tracking-widest uppercase mb-4">
                  Pronto para o próximo passo?
                </p>
                <a
                  href={post.cta.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => handleCta(e, post.cta!.href)}
                  className="inline-flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#1ebe5a] text-white font-bold text-sm md:text-base px-6 md:px-10 py-4 rounded-lg shadow-lg transition-colors"
                >
                  <MessageCircle className="w-5 h-5" />
                  {post.cta.label}
                </a>
              </div>
            )}
          </div>
        </article>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default BlogPost;
