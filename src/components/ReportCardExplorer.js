import * as React from "react"
import { Link } from 'gatsby'
import ReactTooltip from 'react-tooltip';

let spanishStrings = {
  'Senate Environment and Public Works Committee' : 'Comité de Obras Públicas y Medio Ambiente del Senado',
  'House Energy and Commerce Committee' : 'Comité de Energía y Comercio de la Cámara de Representantes',
  'Chair' : 'Presidente',
  'Ranking Member' : 'Miembro de Mayor Rango',
  'Member' : 'Miembro',
  'Not a member of an EPA oversight committee' : 'No es un miembro de un comitéque supervisa la EPA',

  'Republican' : 'Republicano',
  'Democrat' : 'Demócrata',
  'Independent' : 'Independiente',
  'Representing' : 'Representando',
}

let translatedString = (string, language) => language === 'spanish' ? spanishStrings[string] : string;
let translatedURL = (url, language) => language === 'spanish' ? url + '_es' : url;
let tooltipText = (congressMember, language) => `<strong>${congressMember.name}</strong> ${congressMember.rank ? `<br /> <strong>${translatedString(congressMember.rank, language)}</strong>` : ''} <br /> ${translatedString(congressMember.affil, language)} <br /> ${translatedString('Representing', language)} ${congressMember.state}${congressMember.district ? `-${congressMember.district}` : ''}`;
let sortByStateName = (reportData) => reportData.sort((a, b) => a.state.localeCompare(b.state));
let sortByDistrictNumber = (reportData) => reportData.sort((a, b) => a.district ? a.district.localeCompare(b.district) : a);

const ReportCardExplorer = ({language, reportData, reportTitle}) =>
  <div className='ReportCardExplorer'>
    <h2>{translatedString(reportTitle, language)}</h2>
    {
      sortByStateName(sortByDistrictNumber(reportData)).map(congressMember =>
        <Link to={translatedURL(congressMember.url, language)} target='_blank'>
          <div data-tip={tooltipText(congressMember, language)}
               className={`ReportCard ${congressMember.affil} tooltip`}>
            <span>{congressMember.state}</span>
            <span>{congressMember.district}</span>
          </div>
        </Link>
      )
    }
    <ReactTooltip html='true' backgroundColor='white' borderColor='#55c0ad' textColor='black' border/>
  </div>

export default ReportCardExplorer
