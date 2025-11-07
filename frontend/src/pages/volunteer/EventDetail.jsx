import React, { useState } from 'react';
import Sidebar from '../../components/common/Sidebar';
import Post from '../../components/post/Post';
import CommentForm from '../../components/post/Comment';
import NewPostForm from '../../components/post/NewPostForm';
import '../../assets/styles/event-detail.css';
import bannerImg from '../../assets/images/mua_thu_ha_noi.jpg'
import avatarImg from '../../assets/images/cat1.jpg';

export default function EventDetail() {
  const eventInfo = {
    id: 'mua-thu-ha-noi',
    title: 'Mùa Thu Hà Nội',
    organizer: 'Green Volunteers',
    date: 'Oct 19, 2025 · 10:00 AM - 5:59 PM',
    location: 'Số 18, Ngõ 36, Hồ Tùng Mậu, Hà Nội',
    image: bannerImg,
    body:
      'Tham gia chiến dịch làm sạch khu phố và trồng cây xanh dịp mùa thu. Mục tiêu: nâng cao ý thức cộng đồng, trồng 300 cây con, dọn sạch rác thải công cộng.',
  };

  // posts do người dùng đăng
  const [posts, setPosts] = useState([]);

  const addPost = ({ title, body, image, relatedTo }) => {
    const newPost = {
      id: Date.now(),
      title,
      organizer: 'Bạn',
      date: new Date().toLocaleString(),
      image: image || null,
      body,
      likes: 0,
      liked: false,
      comments: [],
      relatedTo: relatedTo || eventInfo.id,
    };
    setPosts((p) => [newPost, ...p]);
  };

  const toggleLike = (postId) => {
    setPosts((p) =>
      p.map((post) =>
        post.id === postId ? { ...post, liked: !post.liked, likes: post.liked ? Math.max(0, post.likes - 1) : post.likes + 1 } : post
      )
    );
  };

  const addComment = (postId, text) => {
    if (!text || !text.trim()) return;
    const comment = {
      id: Date.now(),
      name: 'Bạn',
      avatar: avatarImg,
      time: 'Vừa xong',
      text: text.trim(),
    };
    setPosts((p) => p.map((post) => (post.id === postId ? { ...post, comments: [comment, ...post.comments] } : post)));
  };

  return (
    <div className="page-wrapper">
      <Sidebar />
      <main className="content" role="main">
        {/* Banner tĩnh */}
        <section className="event-banner">
          <div className="banner-header">
            <div className="banner-meta">
              <h1 className="banner-title">{eventInfo.title}</h1>
              <div className="meta-row">
                <span className="meta-organizer">Tổ chức: {eventInfo.organizer}</span>
                <span className="meta-dot"> • </span>
                <span className="meta-date">{eventInfo.date}</span>
              </div>
              <div className="meta-location">Địa điểm: {eventInfo.location}</div>
            </div>
            <div className="banner-actions">
              <button
                className="share-btn"
                type="button"
                onClick={() => navigator.clipboard?.writeText(window.location.href)}
              >
                Chia sẻ
              </button>
            </div>
          </div>

          {eventInfo.image && (
            <div className="post-cover">
              <img src={eventInfo.image} alt="Event cover" />
            </div>
          )}

          <div className="post-body">
            <p className="post-text">{eventInfo.body}</p>
          </div>
        </section>

        <section style={{ width: '100%', maxWidth: 980 }}>
          <NewPostForm onCreate={addPost} relatedTo={eventInfo.title} />
        </section>

        {/* Danh sách các thảo luận liên quan tới banner */}
        <section className="posts-list" aria-live="polite">
          <h2 style={{ margin: '0 0 12px 0' }}>Thảo luận liên quan: "{eventInfo.title}"</h2>
          {posts.filter(p => p.relatedTo === eventInfo.id || p.relatedTo === eventInfo.title).length === 0 && <p>Chưa có thảo luận nào.</p>}

          {posts
            .filter((p) => p.relatedTo === eventInfo.id || p.relatedTo === eventInfo.title)
            .map((post) => (
              <div key={post.id} style={{ marginBottom: 12 }}>
                <Post
                  title={post.title}
                  organizer={post.organizer}
                  date={post.date}
                  location={post.location}
                  image={post.image}
                  body={post.body}
                  likeCount={post.likes}
                  liked={post.liked}
                  onToggleLike={() => toggleLike(post.id)}
                  commentsCount={post.comments.length}
                  relatedTo={eventInfo.title}
                />

                {/* dùng CommentForm (component Comment.jsx) làm form nhập bình luận */}
                <div className="comments" style={{ marginTop: 8 }}>
                  <ul className="comments-list">
                    {post.comments.map((c) => (
                      <li key={c.id} className="comment">
                        <img className="c-avatar" src={c.avatar} alt={c.name} />
                        <div className="c-body">
                          <div className="c-head"><strong>{c.name}</strong> • <span className="c-time">{c.time}</span></div>
                          <div className="c-text">{c.text}</div>
                        </div>
                      </li>
                    ))}
                  </ul>

                  <CommentForm onSubmit={(txt) => addComment(post.id, txt)} avatar={avatarImg} />
                </div>
              </div>
            ))}
        </section>
      </main>
    </div>
  );
}