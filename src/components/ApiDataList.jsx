import React, { useEffect, useState } from 'react';

/**
 * ApiDataList component
 * - Fetches data from JSONPlaceholder
 * - Displays data in a responsive grid
 * - Supports loading, error, pagination, and search
 */
function ApiDataList() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState('');
  const [total, setTotal] = useState(0);
  const limit = 8; // items per page

  useEffect(() => {
    setLoading(true);
    setError(null);
    fetch(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=${limit}`)
      .then(res => {
        setTotal(Number(res.headers.get('x-total-count')) || 100); // fallback to 100
        return res.json();
      })
      .then(json => setData(json))
      .catch(e => setError('Failed to fetch data'))
      .finally(() => setLoading(false));
  }, [page]);

  // Filter data by search
  const filtered = data.filter(item =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="max-w-3xl mx-auto p-4 mt-8">
      <h2 className="text-lg font-bold mb-4 text-gray-800 dark:text-gray-100">API Data List</h2>
      <input
        className="w-full mb-4 px-2 py-1 border rounded bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-gray-100"
        placeholder="Search posts..."
        value={search}
        onChange={e => setSearch(e.target.value)}
      />
      {loading && <div className="text-center text-xs text-gray-400">Loading...</div>}
      {error && <div className="text-center text-xs text-red-500">{error}</div>}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {filtered.map(post => (
          <div key={post.id} className="p-4 bg-white dark:bg-gray-900 rounded shadow transition hover:scale-[1.01]">
            <h3 className="font-semibold text-primary-600 dark:text-primary-400 mb-1 text-sm">{post.title}</h3>
            <p className="text-xs text-gray-600 dark:text-gray-300">{post.body}</p>
          </div>
        ))}
      </div>
      <div className="flex justify-between items-center mt-4">
        <button
          onClick={() => setPage(p => Math.max(1, p - 1))}
          disabled={page === 1}
          className="px-3 py-1 rounded bg-gray-200 dark:bg-gray-700 text-xs disabled:opacity-50"
        >
          Prev
        </button>
        <span className="text-xs text-gray-500 dark:text-gray-400">Page {page}</span>
        <button
          onClick={() => setPage(p => (p * limit < total ? p + 1 : p))}
          disabled={page * limit >= total}
          className="px-3 py-1 rounded bg-gray-200 dark:bg-gray-700 text-xs disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default ApiDataList;
