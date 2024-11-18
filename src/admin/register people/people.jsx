import React, { useState } from 'react';
import './people.css';

function People({ name, email, model, onRemove, imageURL }) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [imageUrl, setImageUrl] = useState(''); // เพิ่ม url ของรูปภาพที่ต้องการแสดงใน modal

    const openModal = (url) => {
        setImageUrl(url); // เก็บ URL ของภาพที่ต้องการแสดง
        setIsModalOpen(true); // เปิด modal
    };

    const closeModal = () => {
        setIsModalOpen(false); // ปิด modal
        setImageUrl(''); // รีเซ็ต URL ของรูปภาพ
    };

    return (
        <div className='block-people'>
            <div className='data'>
                <span className='p-name'>{name}</span>
                <span className='p-email'> ({email})</span>
                <br />
                <span className='p-model'>Model : {model}</span>
                <br />
                <span 
                    className='p-image' 
                    onClick={() => openModal({imageURL})} // ใส่ URL ของภาพที่ต้องการ
                >
                    ดูรูปแนบ
                </span>
            </div>
            <div className='choice'>
                <button onClick={onRemove}>✔️</button>
                <button onClick={onRemove}>❌</button>
            </div>

            {/* Modal สำหรับแสดงรูปภาพ */}
            {isModalOpen && (
                <div className="modal-overlay" onClick={closeModal}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <img src={imageUrl} alt="Image" className="modal-image" />
                        <button className="close-btn" onClick={closeModal}>❌</button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default People;