// src/app/blog/[slug]/page.tsx
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug } from "@/utils/markdown";
import markdownToHtml from "@/utils/markdownToHtml";
import { format } from "date-fns";
import { fr } from "date-fns/locale";
import { Icon } from "@iconify/react";

type Props = {
   params: Promise<{ slug: string }>; 
};

// Generate static paths for all blog posts
export async function generateStaticParams() {
  const posts = getAllPosts(["slug"]);
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

// Generate metadata for SEO
export async function generateMetadata({ params }: Props): Promise<Metadata> {
   const { slug } = await params;
  const post = getPostBySlug(slug, ["title", "excerpt", "coverImage", "date"]);
  
  if (!post) {
    return {
      title: "Article non trouvé | Taguini Marketing",
      description: "L'article que vous recherchez n'existe pas.",
    };
  }

  return {
    title: `${post.title} | Taguini Marketing Blog`,
    description: post.excerpt || `Découvrez notre article sur ${post.title}`,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      images: post.coverImage ? [{ url: post.coverImage }] : [],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: post.coverImage ? [post.coverImage] : [],
    },
  };
}

export default async function Post({ params }: Props) {
    const { slug } = await params;
  const post = getPostBySlug(slug, [
    "title",
    "author",
    "authorImage",
    "content",
    "coverImage",
    "date",
    "excerpt",
    "category",
  ]);

  if (!post) {
    notFound();
  }

  const content = await markdownToHtml(post.content || "");

  // Get related posts (excluding current post)
  const allPosts = getAllPosts(["title", "slug", "coverImage", "date", "excerpt"]);
  
  const relatedPosts = allPosts
    .filter(p => p.slug !== slug)
    .slice(0, 3);

  return (
    <>
     <div className="pt-16 lg:pt-20" />
      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-32 h-32 border-t-2 border-l-2 border-red-500/30 dark:border-red-400/30" />
          <div className="absolute bottom-0 right-0 w-32 h-32 border-b-2 border-r-2 border-red-500/30 dark:border-red-400/30" />
        </div>
        
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            {post.category && (
              <span className="inline-block px-4 py-2 rounded-full bg-red-50 dark:bg-red-900/30 text-red-600 dark:text-red-400 text-sm font-semibold mb-6">
                {post.category}
              </span>
            )}
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              {post.title}
            </h1>
            
            <div className="flex flex-wrap items-center justify-center gap-6 text-gray-600 dark:text-gray-400">
              <div className="flex items-center gap-2">
                <Icon icon="mdi:calendar" className="text-red-500" />
                <span>{format(new Date(post.date), "dd MMMM yyyy", { locale: fr })}</span>
              </div>
              {post.author && (
                <div className="flex items-center gap-2">
                  <Icon icon="mdi:account" className="text-red-500" />
                  <span>Par {post.author}</span>
                </div>
              )}
              <div className="flex items-center gap-2">
                <Icon icon="mdi:clock-time-four" className="text-red-500" />
                <span>Lecture {Math.ceil(content.split(' ').length / 200)} min</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-16 lg:py-24 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Cover Image */}
            {post.coverImage && (
              <div className="relative w-full h-[400px] lg:h-[500px] rounded-2xl overflow-hidden mb-12 shadow-xl">
                <Image
                  src={post.coverImage}
                  alt={post.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            )}

            {/* Article Content */}
            <article className="prose prose-lg dark:prose-invert max-w-none prose-headings:text-gray-900 dark:prose-headings:text-white prose-a:text-red-500 hover:prose-a:text-red-600 prose-img:rounded-xl prose-img:shadow-lg">
              <div dangerouslySetInnerHTML={{ __html: content }} />
            </article>

            {/* Author Bio */}
            {post.author && (
              <div className="mt-12 p-6 bg-gray-50 dark:bg-gray-800 rounded-2xl flex items-center gap-4">
                {post.authorImage ? (
                  <div className="relative w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                    <Image
                      src={post.authorImage}
                      alt={post.author}
                      fill
                      className="object-cover"
                    />
                  </div>
                ) : (
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-red-500 to-red-600 flex items-center justify-center flex-shrink-0">
                    <Icon icon="mdi:account" className="text-2xl text-white" />
                  </div>
                )}
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                    {post.author}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Expert en marketing digital chez Taguini Marketing
                  </p>
                </div>
              </div>
            )}

            {/* Share Section */}
            <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Partager cet article
              </h3>
              <div className="flex gap-3">
                <a
                  href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(`https://taguinimarketing.com/blog/${slug}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-[#1877f2] flex items-center justify-center hover:scale-110 transition-transform"
                >
                  <Icon icon="mdi:facebook" className="text-white text-xl" />
                </a>
                <a
                  href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(`https://taguinimarketing.com/blog/${slug}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-[#1da1f2] flex items-center justify-center hover:scale-110 transition-transform"
                >
                  <Icon icon="mdi:twitter" className="text-white text-xl" />
                </a>
                <a
                  href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(`https://taguinimarketing.com/blog/${slug}`)}&title=${encodeURIComponent(post.title)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-[#0a66c2] flex items-center justify-center hover:scale-110 transition-transform"
                >
                  <Icon icon="mdi:linkedin" className="text-white text-xl" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-16 bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
              Articles similaires
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost, index) => (
                <article
                  key={index}
                  className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
                >
                  <Link href={`/blog/${relatedPost.slug}`} className="block">
                    {relatedPost.coverImage && (
                      <div className="relative h-48 overflow-hidden">
                        <Image
                          src={relatedPost.coverImage}
                          alt={relatedPost.title}
                          fill
                          className="object-cover hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                    )}
                    <div className="p-6">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 line-clamp-2">
                        {relatedPost.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">
                        {relatedPost.excerpt}
                      </p>
                      <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-500">
                        <Icon icon="mdi:calendar" className="text-red-500 text-sm" />
                        <span>{format(new Date(relatedPost.date), "dd MMM yyyy", { locale: fr })}</span>
                      </div>
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Newsletter Section */}
      <section className="py-16 bg-gradient-to-r from-red-500/10 to-blue-500/10">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <Icon icon="mdi:email-newsletter" className="text-5xl text-red-500 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Restez informé
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Recevez nos derniers articles et conseils marketing directement dans votre boîte mail.
            </p>
            <form className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Votre adresse email"
                className="flex-1 px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-red-500 focus:border-transparent"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-gradient-to-r from-red-500 to-red-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all"
              >
                S'abonner
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}