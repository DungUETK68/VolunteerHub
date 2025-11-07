import React, { useState } from 'react';

export default function CommentForm({ onSubmit, avatar }) {
  const [value, setValue] = useState('');

  const submit = (e) => {
    e.preventDefault();
    if (!value.trim()) return;
    onSubmit(value.trim());
    setValue('');
  };

  return (
    <form className="comment-form" onSubmit={submit}>
      <div className="c-body" style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <img className="c-avatar" src={avatar} alt="avatar" />
        <input
          placeholder="Viết bình luận..."
          autoComplete="off"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          style={{ flex: 1, border: 'none', background: 'transparent', outline: 'none', padding: '6px 0'}}
        />
        <button type="submit">Gửi</button>
      </div>
    </form>
  );
}