import "./report.css"
import ReportblockPost from './reportblockPost'
import ReportblockComment from "./reportblockComment"
import ReportblockUser from "./reportblockUser"

function Report() {
    return (
        <div>
            <h1 className='title-report'>Report</h1>
            <ReportblockPost />
            <ReportblockComment />
            <ReportblockUser />
        </div>
    )
}

export default Report