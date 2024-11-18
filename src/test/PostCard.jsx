// PostCard.jsx
import React from 'react';
import './PostCard.css';

function PostCard() {
  return (
    <div className="post-card">
        <div className='first'>
            <div className="post-card-header">
                <img src="https://media.istockphoto.com/id/1415463201/vector/risk-management-or-search-for-vulnerabilities-icon.jpg?s=612x612&w=0&k=20&c=zwM5zjszGZS_OAl1bzspcwn18tqL4PwWAjl_fuflGC0=" // เปลี่ยนเป็น URL ของรูปภาพจริง 
                alt="Post" className="post-image"/>
            </div>
            <div className="post-card-footer">
                <p>Wanpen Duensibsong</p>
                <div className="post-stats">
                    <span>❤️ 22</span>
                    <span>💬 8</span>
                </div>
            </div>
      </div>
      <div className="post-card-body">
        <div className="post-info">
          <p><strong>ผู้แจ้ง</strong> Pomwa Mankordee</p>
          <p><strong>วันที่แจ้ง</strong> 2023-07-14</p>
          <p><strong>เหตุผล</strong> เด็กไม่ได้รับความเหมาะสม อาจเกิดปัญหาหรืออุบัติเหตุตามมา</p>
        </div>
        <div className="post-actions">
          <button className="report-button">แจ้งไปยังผู้โพสต์</button>
          <button className="delete-button">ลบโพสต์</button>
        </div>
      </div>
    </div>
  );
}

export default PostCard;