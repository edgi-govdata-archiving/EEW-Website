import * as React from "react"
import { Link } from 'gatsby'
import { CongressReportCardData } from '../helpers/constants'
import ReactTooltip from 'react-tooltip';

const ReportCardExplorer = () =>
  <div className='ReportCardExplorer'>
    <h3>Senate Environment and Public Works Committee</h3>
    {
      CongressReportCardData.senateData.map(congressMember => 
        <Link to={congressMember.url} target='_blank'>
          <div data-tip={`${congressMember.name} <br /> <strong>${congressMember.rank}</strong> <br /> ${congressMember.affil} <br /> Representing ${congressMember.state}-${congressMember.district}`} 
               className={`ReportCard ${congressMember.affil} tooltip`}>
            {congressMember.state}
          </div>
        </Link>
      )
    }
    <h3>House Energy and Commerce Committee</h3>
    {
      CongressReportCardData.houseData.map(congressMember => 
        <Link to={congressMember.url} target='_blank'>
          <div data-tip={`${congressMember.name} <br /> <strong>${congressMember.rank}</strong> <br /> ${congressMember.affil} <br /> Representing ${congressMember.state}-${congressMember.district}`} 
               className={`ReportCard ${congressMember.affil} tooltip`}>
            <div>{congressMember.state}</div>
            <div>{congressMember.district}</div>
            {/* <span class="tooltiptext">
              <div>{congressMember.name}</div>
              <div><strong>{congressMember.rank}</strong></div>
              <div>{congressMember.affil}</div>
              <div>{`Representing ${congressMember.state}`}</div>
            </span> */}
          </div>
        </Link>
      )
    }
    <ReactTooltip html='true' backgroundColor='white' borderColor='#55c0ad' textColor='black' border/>
  </div>

export default ReportCardExplorer
