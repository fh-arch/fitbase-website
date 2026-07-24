import React from 'react';
import { blogArticles } from '../blogArticles';
import { ArrowRight, BookOpen, Clock, Tag } from 'lucide-react';

interface BlogSectionProps {
  onOpenDemo?: () => void;
}

export const BlogSection: React.FC<BlogSectionProps> = () => {
  const posts = blogArticles.slice(0, 3);

  return (
    <section id="blog" className="py-20 md:py-28 bg-[#FAF7F2] border-t border-[#E7E7E2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#18F28D] text-[#252525] text-xs font-bold uppercase tracking-wider mb-3">
              <BookOpen className="w-3.5 h-3.5" />
              <span>Fitbase Blog</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#252525] tracking-tight">
              Stüdyo yönetimi için uygulanabilir rehberler
            </h2>
            <p className="mt-3 text-sm sm:text-base text-[#5F6368] max-w-2xl leading-relaxed">
              Üye bağlılığı, kapasite planlama ve fiyatlandırma hakkında sade, kaynak gösterilebilir ve işletmenize uyarlanabilir içerikler.
            </p>
          </div>
          <a
            href="/blog"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#252525] px-5 py-3 text-xs font-bold text-white hover:-translate-y-1 hover:bg-black"
          >
            Tüm rehberleri gör <ArrowRight className="h-4 w-4 text-[#18F28D]" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map((post, index) => (
            <article
              key={post.slug}
              className="group flex min-h-[330px] flex-col justify-between overflow-hidden rounded-3xl border border-[#E7E7E2] bg-white p-6 hover:-translate-y-1 hover:shadow-xl"
            >
              <div>
                <div className="mb-5 flex items-center justify-between text-[11px] text-[#5F6368]">
                  <span className="inline-flex items-center gap-1 rounded-lg bg-[#FAF7F2] px-2.5 py-1 font-semibold">
                    <Tag className="h-3 w-3" /> {post.category}
                  </span>
                  <span className="inline-flex items-center gap-1"><Clock className="h-3 w-3" /> {post.readTime}</span>
                </div>
                <span className="mb-3 block text-5xl font-black text-[#18F28D]/35">0{index + 1}</span>
                <h3 className="mb-3 text-xl font-extrabold leading-snug text-[#252525] group-hover:text-emerald-700">
                  {post.title}
                </h3>
                <p className="text-sm leading-relaxed text-[#5F6368] line-clamp-3">{post.description}</p>
              </div>
              <a
                href={`/blog/${post.slug}`}
                className="mt-6 inline-flex items-center gap-2 border-t border-[#E7E7E2] pt-4 text-sm font-bold text-[#252525]"
                aria-label={`${post.title} rehberini blog sayfasında oku`}
              >
                Daha fazla oku <ArrowRight className="h-4 w-4 text-emerald-700 transition-transform group-hover:translate-x-1" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
