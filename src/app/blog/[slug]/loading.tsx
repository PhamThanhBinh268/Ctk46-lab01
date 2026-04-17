export default function BlogPostLoading() {
  return (
    <div>
      <div className="h-4 w-32 bg-gray-200 dark:bg-gray-800 rounded animate-pulse mb-6" />

      <article className="bg-white dark:bg-gray-900 p-8 rounded-2xl border dark:border-gray-800 shadow-sm">
        <div className="flex gap-3 mb-4">
          <div className="h-5 w-20 bg-gray-200 dark:bg-gray-800 rounded animate-pulse" />
          <div className="h-5 w-24 bg-gray-200 dark:bg-gray-800 rounded animate-pulse" />
        </div>

        <div className="h-10 w-3/4 bg-gray-200 dark:bg-gray-800 rounded animate-pulse mb-8" />

        <div className="space-y-4 mb-8">
          <div className="h-4 w-full bg-gray-200 dark:bg-gray-800 rounded animate-pulse" />
          <div className="h-4 w-full bg-gray-200 dark:bg-gray-800 rounded animate-pulse" />
          <div className="h-4 w-5/6 bg-gray-200 dark:bg-gray-800 rounded animate-pulse" />
          <div className="h-4 w-full bg-gray-200 dark:bg-gray-800 rounded animate-pulse" />
          <div className="h-4 w-2/3 bg-gray-200 dark:bg-gray-800 rounded animate-pulse" />
        </div>

        <div className="border-t dark:border-gray-800 pt-6">
          <div className="h-10 w-32 bg-gray-200 dark:bg-gray-800 rounded animate-pulse" />
        </div>
      </article>
    </div>
  );
}
