import React, { useState } from 'react';

function Discussion() {
    const [threads, setThreads] = useState([]);
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const addThread = () => {
        if (title && content) {
            const newThread = { title, content, id: Date.now(), replies: [] };
            setThreads([newThread, ...threads]);
            setTitle('');
            setContent('');
        } else {
            alert("Please fill in both title and content.");
        }
    };

    const addReply = (threadId, replyContent) => {
        setThreads(threads.map(thread => {
            if (thread.id === threadId) {
                const updatedReplies = [...thread.replies, { content: replyContent, id: Date.now() }];
                return { ...thread, replies: updatedReplies };
            }
            return thread;
        }));
    };

    return (
        <div className="container">
            <h2>Discussion Board</h2>

            <div className="row mb-3">
                <div className="col-12 col-lg-4 mb-2">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Thread Title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <button onClick={addThread} className="btn btn-primary mb-3">Create Thread</button>
                </div>
                <div className="col-12 col-lg-8 mb-2">
                    <textarea
                        className="form-control"
                        placeholder="Thread Content"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        rows="4"
                    />
                </div>
            </div>

            <div>
                <h3>Threads</h3>
                {threads.map(thread => (
                    <div key={thread.id} className="border p-3 mb-3">
                        <h4>{thread.title}</h4>
                        <p>{thread.content}</p>

                        <div>
                            <h5>Replies</h5>
                            {thread.replies.map(reply => (
                                <div key={reply.id} className="border p-2 mb-2">
                                    <p>{reply.content}</p>
                                </div>
                            ))}
                            <ReplyForm onReply={(replyContent) => addReply(thread.id, replyContent)} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

function ReplyForm({ onReply }) {
    const [replyContent, setReplyContent] = useState('');

    const handleReply = () => {
        if (replyContent) {
            onReply(replyContent);
            setReplyContent('');
        } else {
            alert("Please enter a reply.");
        }
    };

    return (
        <div className="mt-2">
            <textarea
                className="form-control mb-2"
                placeholder="Write a reply..."
                value={replyContent}
                onChange={(e) => setReplyContent(e.target.value)}
                rows="2"
            />
            <button onClick={handleReply} className="btn btn-secondary">Reply</button>
        </div>
    );
}

export default Discussion;
