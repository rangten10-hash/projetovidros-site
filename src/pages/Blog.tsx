import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { blogPosts } from "@/data/blogPosts";
import { ArrowRight } from "lucide-react";
import { useSeo } from "@/lib/seo";

const Blog = () => {
  useSeo({
    title: "Blog | Projeto Vidros — Box, Espelhos e Vidraçaria em SP",
    description:
      "Conteúdo sobre box de banheiro, portas de vidro, espelhos e a tecnologia BOX +Seguro. Dicas e novidades da Projeto Vidros em São Paulo.",
    path: "/blog",
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <header className="max-w-3xl mx-auto text-center mb-14">
            <p className="text-copper font-semibold text-xs tracking-[0.25em] uppercase mb-3">
              Projeto Vidros
            </p>
            <h1 className="font-display text-4xl md:text-5xl text-petrol mb-4">
              Blog
            </h1>
            <p className="text-foreground/70 text-lg leading-relaxed">
              Dicas, novidades e conteúdos sobre box de banheiro, portas de
              vidro, espelhos e a tecnologia BOX + SEGURO.
            </p>
          </header>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {blogPosts.map((post) => (
              <article
                key={post.slug}
                className="group bg-card rounded-xl overflow-hidden border border-border shadow-sm hover:shadow-lg transition-all"
              >
                <Link to={`/blog/${post.slug}`} className="block">
                  <div className="overflow-hidden bg-muted flex items-center justify-center">
                    <img
                      src={post.image}
                      alt={post.imageAlt}
                      loading="lazy"
                      className="w-full h-auto object-contain group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <time className="text-xs text-foreground/50 tracking-wider uppercase">
                      {new Date(post.date).toLocaleDateString("pt-BR", {
                        day: "2-digit",
                        month: "long",
                        year: "numeric",
                      })}
                    </time>
                    <h2 className="font-display text-xl text-petrol mt-2 mb-3 leading-tight group-hover:text-copper transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-foreground/70 text-sm leading-relaxed mb-4">
                      {post.excerpt}
                    </p>
                    <span className="inline-flex items-center gap-2 text-copper font-semibold text-sm">
                      Ler artigo
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Blog;
