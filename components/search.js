import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

export default function Search() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);
  const [allPosts, setAllPosts] = useState([]);
  const inputRef = useRef(null);
  const searchRef = useRef(null);
  const router = useRouter();

  // Load all posts on mount
  useEffect(() => {
    fetch('/api/posts')
      .then(response => response.json())
      .then(data => {
        setAllPosts(data);
      })
      .catch(error => console.error('Error fetching posts:', error));
  }, []);

  // Handle keyboard shortcut (Cmd+K or Ctrl+K)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsOpen(true);
      }
      
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Focus input when modal opens
  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  // Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Search logic
  useEffect(() => {
    if (!searchTerm.trim() || !allPosts.length) {
      setResults([]);
      return;
    }

    const searchTermLower = searchTerm.toLowerCase();
    const filtered = allPosts.filter(post => 
      post.title.toLowerCase().includes(searchTermLower) ||
      (post.description && post.description.toLowerCase().includes(searchTermLower))
    );
    
    setResults(filtered);
  }, [searchTerm, allPosts]);

  // Navigate to post and close search
  const handleSelectResult = (slug) => {
    router.push(`/posts/${slug}`);
    setIsOpen(false);
    setSearchTerm('');
  };

  if (!isOpen) {
    return (
      <button 
        className="search-button" 
        onClick={() => setIsOpen(true)}
        aria-label="Search"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
        <span className="search-shortcut">⌘K</span>
      </button>
    );
  }

  return (
    <div className="search-overlay">
      <div className="search-modal" ref={searchRef}>
        <div className="search-header">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
          <input
            ref={inputRef}
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search posts..."
            className="search-input"
          />
          <button 
            className="search-close" 
            onClick={() => setIsOpen(false)}
            aria-label="Close search"
          >
            Esc
          </button>
        </div>

        {results.length > 0 ? (
          <ul className="search-results">
            {results.map((post) => (
              <li key={post.slug} onClick={() => handleSelectResult(post.slug)}>
                <span className="search-result-title">{post.title}</span>
                <span className="search-result-date">
                  {post.date ? new Date(post.date).toLocaleDateString('zh-TW') : ''}
                </span>
              </li>
            ))}
          </ul>
        ) : searchTerm && (
          <div className="search-no-results">No posts found</div>
        )}
      </div>
    </div>
  );
}