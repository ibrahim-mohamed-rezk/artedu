"use client";
import { getData } from "@/libs/axios/backendServer";
import { BlogTypes } from "@/libs/types/tpes";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const BlogShow = () => {
  const { blogId } = useParams();
  const [blogs, setblogs] = useState<BlogTypes | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchblogs = async () => {
      try {
        setIsLoading(true);
        const response = await getData(`blog/show/${blogId}`);
        setblogs(response.data);
        setError(null);
      } catch (err) {
        console.log(err);
        setError("فشل تحميل المقال. يرجى المحاولة مرة أخرى لاحقًا.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchblogs();
  }, [blogId]);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  if (isLoading) {
    return (
      <div className="max-w-4xl mx-auto p-6">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded w-3/4 mb-4"></div>
          <div className="h-4 bg-gray-200 rounded w-1/4 mb-6"></div>
          <div className="h-[400px] bg-gray-200 rounded mb-8"></div>
          <div className="h-4 bg-gray-200 rounded w-full mb-4"></div>
          <div className="h-4 bg-gray-200 rounded w-2/3"></div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-4xl mx-auto p-6">
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-red-600 text-right">
          {error}
        </div>
      </div>
    );
  }

  if (!blogs) {
    return (
      <div className="max-w-4xl mx-auto p-6">
        <div className="text-gray-600 text-right">
          لم يتم العثور على المقال.
        </div>
      </div>
    );
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: blogs.title,
            image: blogs.image,
            author: {
              "@type": "Person",
              name: "ArtEdu",
            },
            publisher: {
              "@type": "Organization",
              name: "ArtEdu",
              logo: {
                "@type": "ImageObject",
                url: "/logo.png",
              },
            },
            datePublished: blogs.created_at,
            description: blogs.description || blogs.title,
          }),
        }}
      />
      <article className="max-w-4xl mx-auto p-6">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4 text-right">{blogs.title}</h1>
          <div className="flex items-center gap-4 text-gray-600 mb-6 justify-end">
            <div className="flex items-center gap-2">
              <time dateTime={blogs.created_at}>
                {formatDate(blogs.created_at)}
              </time>
              <span>تم النشر في</span>
            </div>
          </div>
          {blogs.image && (
            <div className="relative w-full h-[400px] mb-8">
              <img
                src={blogs.image}
                alt={blogs.title}
                className="object-cover rounded-lg w-full h-full"
              />
            </div>
          )}
          <div
            className="text-lg text-gray-700 mb-8 prose max-w-none text-right"
            dangerouslySetInnerHTML={{ __html: blogs.content }}
          />
          {/* {blogs.description && (
            <div className="mt-8 p-4 bg-gray-50 rounded-lg text-right">
              <h2 className="text-lg font-semibold mb-2">ملخص</h2>
              <p
                className="text-gray-600"
                dangerouslySetInnerHTML={{ __html: blogs.description }}
              />
            </div>
          )} */}
        </div>
      </article>
    </>
  );
};

export default BlogShow;
