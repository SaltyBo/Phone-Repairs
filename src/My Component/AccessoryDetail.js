import React, { useState } from 'react';

function AccessoryDetail() {
  const [vote, setVote] = useState(null); // null, 'like', or 'dislike'
  const [likes, setLikes] = useState(5);
  const [dislikes, setDislikes] = useState(1);
  const [comments, setComments] = useState([
    { id: 1, text: "I like it!" },
    { id: 2, text: "Yea it works pretty well" },
  ]);
  const [newComment, setNewComment] = useState('');

  const handleLike = () => {
    if (vote === 'like') return;
    setVote('like');
    setLikes(likes + 1);
    if (vote === 'dislike') setDislikes(dislikes - 1);
  };

  const handleDislike = () => {
    if (vote === 'dislike') return;
    setVote('dislike');
    setDislikes(dislikes + 1);
    if (vote === 'like') setLikes(likes - 1);
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (newComment.trim()) {
      setComments([...comments, { id: comments.length + 1, text: newComment }]);
      setNewComment('');
    }
  };

  return (
    <div className="container" style={{ maxWidth: '600px', marginTop: '20px' }}>
      <h2>Smartphone Accessory Details</h2>

      <div className="card mb-3">
        <div className="card-body">
          <h5 className="card-title">Wireless Charger</h5>
          <p className="card-text">A high-speed wireless charger compatible with most smartphones.</p>
          <p className="card-text">Price: $29.99</p>
        </div>
      </div>

      <div className="mb-3">
        <button className="btn me-2" onClick={handleLike} style={{ color: vote === 'like' ? 'green' : 'black', fontSize: vote === 'like' ? '1.5em' : '1em' }}>
          👍 Like ({likes})
        </button>
        <button className="btn" onClick={handleDislike} style={{ color: vote === 'dislike' ? 'red' : 'black', fontSize: vote === 'dislike' ? '1.5em' : '1em' }}>
          👎 Dislike ({dislikes})
        </button>
      </div>

      <h4>Comments</h4>
      <ul className="list-group mb-3">
        {comments.map((comment) => (
          <li key={comment.id} className="list-group-item">{comment.text}</li>
        ))}
      </ul>

      <form onSubmit={handleCommentSubmit}>
        <div className="mb-3">
          <label htmlFor="newComment" className="form-label">Add a comment</label>
          <textarea id="newComment" className="form-control" rows="3" value={newComment} onChange={(e) => setNewComment(e.target.value)} />
        </div>
        <button type="submit" className="btn btn-primary">Post Comment</button>
      </form>
    </div>
  );
}

export default AccessoryDetail;
