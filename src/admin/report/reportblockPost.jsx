import './reportblockPost.css'

function ReportblockPost() {
    return (
        <div className='report-block-post'>
            <div className='report-left'>
                <div className='post-image'>
                    <img src="https://media.istockphoto.com/id/1415463201/vector/risk-management-or-search-for-vulnerabilities-icon.jpg?s=612x612&w=0&k=20&c=zwM5zjszGZS_OAl1bzspcwn18tqL4PwWAjl_fuflGC0=" // เปลี่ยนเป็น URL ของรูปภาพจริง 
                    alt="Post" className="post-image"/>
                </div>
                <div className='post-caption'>
                    <div className='name-caption'>
                        <div>Wanpen Duensibsong</div>
                        <div>สอนลูกชายขับมอไซต์วันแรก</div>
                    </div>
                    <div className='num'>
                        <span>❤️ 22</span>
                        <span>💬 8</span>
                    </div>
                </div>
            </div>
            <div className='report-right'>
                <div className="report-details">
                    <div className="report-item">
                        <span>ผู้แจ้ง:</span>
                        <span>Pomwa Mankordee</span>
                        </div>
                    <div className="report-item">
                        <span>วันที่แจ้ง:</span>
                        <span>2023-07-14</span>
                    </div>
                    <div className="report-item">
                        <span>เหตุผล:</span>
                        <span>เด็กไม่ได้รับความเหมาะสม อาจเกิดปัญหาหรืออุบัติเหตุตามมา</span>
                    </div>
                </div>
                <div>
                    <button className='report-button'>แจ้งไปยังผู้โพสต์</button>
                    <button className='delete-button'>ลบโพสต์</button>
                </div>
            </div>
        </div>
    )
}

export default ReportblockPost