import React, { useState } from 'react';
import { BLOG_POSTS } from '../data';
import { BlogPost } from '../types';
import { BookOpen, Clock, ArrowRight, X, CircleDot, User, Tag } from 'lucide-react';

interface BlogSectionProps {
  onOpenDemo?: () => void;
}

export const BlogSection: React.FC<BlogSectionProps> = ({ onOpenDemo }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Hepsi');
  const [activeArticle, setActiveArticle] = useState<BlogPost | null>(null);

  const categories = ['Hepsi', 'Retention', 'Stüdyo Yönetimi', 'Finans', 'Pazarlama'];

  const filteredPosts = selectedCategory === 'Hepsi' 
    ? BLOG_POSTS 
    : BLOG_POSTS.filter(post => post.category === selectedCategory);

  const featuredPost = BLOG_POSTS.find(post => post.featured) || BLOG_POSTS[0];

  return (
    <section id="blog" className="py-20 md:py-28 bg-[#FAF7F2] border-t border-[#E7E7E2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#18F28D] text-[#252525] text-xs font-bold uppercase tracking-wider mb-3">
              <BookOpen className="w-3.5 h-3.5 text-[#252525]" />
              <span>fitbase BLOG & STÜDYO REHBERİ</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#252525] tracking-tight">
              Stüdyonuzu büyütecek içgörüler & rehberler
            </h2>
            <p className="mt-3 text-sm sm:text-base text-[#5F6368] max-w-2xl leading-relaxed">
              Fitness, yoga ve reformer pilates stüdyoları için üye retention, doluluk artırma, otomasyon ve finansal yönetim stratejileri.
            </p>
          </div>

          {/* Category Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#252525] text-white shadow-sm'
                    : 'bg-white text-[#5F6368] border border-[#E7E7E2] hover:border-[#252525] hover:text-[#252525]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Card (Show if Hepsi or matches category) */}
        {selectedCategory === 'Hepsi' && featuredPost && (
          <div className="mb-10 bg-white rounded-3xl border border-[#E7E7E2] p-6 sm:p-8 md:p-10 shadow-sm hover:shadow-md transition-all group relative overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              
              <div className="md:col-span-7 space-y-4">
                <div className="flex items-center gap-3 text-xs font-semibold">
                  <span className="px-3 py-1 rounded-md bg-[#18F28D] text-[#252525] font-bold">
                    ÖNE ÇIKAN REHBER
                  </span>
                  <span className="text-[#5F6368] flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {featuredPost.readTime}
                  </span>
                  <span className="text-[#5F6368]">• {featuredPost.date}</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#252525] leading-tight group-hover:text-emerald-700 transition-colors">
                  {featuredPost.title}
                </h3>

                <p className="text-sm sm:text-base text-[#5F6368] leading-relaxed line-clamp-3">
                  {featuredPost.excerpt}
                </p>

                <div className="pt-2 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img
                      src={featuredPost.author.avatar}
                      alt={featuredPost.author.name}
                      className="w-9 h-9 rounded-full object-cover border border-[#E7E7E2]"
                    />
                    <div>
                      <div className="text-xs font-bold text-[#252525]">{featuredPost.author.name}</div>
                      <div className="text-[11px] text-[#5F6368]">{featuredPost.author.role}</div>
                    </div>
                  </div>

                  <button
                    onClick={() => setActiveArticle(featuredPost)}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#252525] text-white text-xs font-bold hover:bg-zinc-800 transition-all cursor-pointer"
                  >
                    <span>Makaleyi Oku</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              <div className="md:col-span-5 bg-gradient-to-br from-[#18F28D]/20 via-[#FAF7F2] to-[#C9D8C5]/30 rounded-2xl p-6 sm:p-8 border border-[#E7E7E2] flex flex-col justify-between h-full min-h-[220px]">
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-[#252525] flex items-center justify-center text-[#18F28D]">
                    <CircleDot className="w-5 h-5" />
                  </div>
                  <div className="text-xs font-bold text-[#252525] uppercase tracking-wider">
                    Retention Formülü
                  </div>
                  <p className="text-xs text-[#5F6368] italic">
                    "Üyelerin ilk 14 gündeki ders alışkanlığı 6 aylık bağlılığı belirler."
                  </p>
                </div>

                <div className="pt-4 border-t border-[#E7E7E2]/60 flex items-center justify-between text-[11px] font-bold text-[#252525]">
                  <span>Sektör Ortalaması: %62</span>
                  <span className="text-emerald-700 font-bold">fitbase ile: %89+</span>
                </div>
              </div>

            </div>
          </div>
        )}

        {/* Blog Post Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPosts.map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-2xl border border-[#E7E7E2] p-6 flex flex-col justify-between hover:shadow-md transition-all group cursor-pointer"
              onClick={() => setActiveArticle(post)}
            >
              <div>
                {/* Top Badge */}
                <div className="flex items-center justify-between text-xs mb-4">
                  <span className="px-2.5 py-1 rounded-md bg-[#FAF7F2] border border-[#E7E7E2] text-[#252525] font-semibold text-[11px] flex items-center gap-1">
                    <Tag className="w-3 h-3 text-[#5F6368]" />
                    {post.category}
                  </span>
                  <span className="text-[#5F6368] text-[11px] flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {post.readTime}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-[#252525] leading-snug mb-3 group-hover:text-emerald-700 transition-colors line-clamp-2">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-xs text-[#5F6368] leading-relaxed mb-6 line-clamp-3">
                  {post.excerpt}
                </p>
              </div>

              {/* Bottom Author & CTA */}
              <div className="pt-4 border-t border-[#E7E7E2] flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <img
                    src={post.author.avatar}
                    alt={post.author.name}
                    className="w-7 h-7 rounded-full object-cover border border-[#E7E7E2]"
                  />
                  <span className="text-xs font-semibold text-[#252525]">{post.author.name}</span>
                </div>

                <span className="text-xs font-bold text-[#252525] flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  Oku
                  <ArrowRight className="w-3.5 h-3.5 text-emerald-700" />
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Article Reader Modal */}
      {activeArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fadeIn overflow-y-auto">
          <div className="bg-white rounded-3xl max-w-3xl w-full my-8 p-6 sm:p-10 border border-[#E7E7E2] shadow-2xl relative max-h-[90vh] overflow-y-auto">
            
            {/* Close Button */}
            <button
              onClick={() => setActiveArticle(null)}
              className="absolute top-6 right-6 p-2 rounded-full bg-[#FAF7F2] hover:bg-[#E7E7E2] text-[#252525] transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Article Header */}
            <div className="space-y-4 mb-8 pr-8">
              <div className="flex items-center gap-3 text-xs font-semibold text-[#5F6368]">
                <span className="px-3 py-1 rounded-md bg-[#18F28D] text-[#252525] font-bold">
                  {activeArticle.category}
                </span>
                <span>{activeArticle.readTime}</span>
                <span>• {activeArticle.date}</span>
              </div>

              <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#252525] tracking-tight leading-tight">
                {activeArticle.title}
              </h1>

              {/* Author info */}
              <div className="flex items-center gap-3 pt-2">
                <img
                  src={activeArticle.author.avatar}
                  alt={activeArticle.author.name}
                  className="w-10 h-10 rounded-full object-cover border border-[#E7E7E2]"
                />
                <div>
                  <div className="text-sm font-bold text-[#252525]">{activeArticle.author.name}</div>
                  <div className="text-xs text-[#5F6368]">{activeArticle.author.role}</div>
                </div>
              </div>
            </div>

            {/* Article Content Paragraphs */}
            <div className="space-y-5 text-sm sm:text-base text-[#252525] leading-relaxed border-t border-[#E7E7E2] pt-8">
              {activeArticle.content.map((paragraph, idx) => (
                <p key={idx} className={idx === 0 ? "font-medium text-base text-zinc-800" : "text-[#5F6368]"}>
                  {paragraph}
                </p>
              ))}
            </div>

            {/* In-Article CTA */}
            <div className="mt-10 p-6 sm:p-8 rounded-2xl bg-[#FAF7F2] border border-[#E7E7E2] flex flex-col sm:flex-row items-center justify-between gap-6">
              <div>
                <h4 className="text-base font-bold text-[#252525] mb-1">
                  Stüdyonuzda bu süreçleri otomatikleştirmek ister misiniz?
                </h4>
                <p className="text-xs text-[#5F6368]">
                  fitbase 15 dakikada kurulur, rezervasyon ve ödeme yükünü omuzlarınızdan alır.
                </p>
              </div>

              <button
                onClick={() => {
                  setActiveArticle(null);
                  if (onOpenDemo) onOpenDemo();
                }}
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#252525] text-white text-xs font-bold hover:bg-zinc-800 transition-all shadow-sm whitespace-nowrap cursor-pointer"
              >
                Ücretsiz Demo Al
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
