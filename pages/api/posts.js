import { getSortedPostsData } from '../../lib/posts';

export default function handler(req, res) {
  const allPosts = getSortedPostsData();
  res.status(200).json(allPosts);
}