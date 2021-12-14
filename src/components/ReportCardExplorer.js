import * as React from "react"
import { Link } from 'gatsby'
import { CongressReportCardData } from '../helpers/congress'
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

const ReportCardExplorer = ({language}) =>
  <div className='ReportCardExplorer'>
    <h3>{translatedString('Senate Environment and Public Works Committee', language)}</h3>
    {
      CongressReportCardData.senateData.map(congressMember => 
        <Link to={congressMember.url} target='_blank'>
          <div data-tip={`${congressMember.name} <br /> <strong>${translatedString(congressMember.rank, language)}</strong> <br /> ${translatedString(congressMember.affil, language)} <br /> ${translatedString('Representing', language)} ${congressMember.state}-${congressMember.district}`} 
               className={`ReportCard ${congressMember.affil} tooltip`}>
            {congressMember.state}
          </div>
        </Link>
      )
    }
    <h3>{translatedString('House Energy and Commerce Committee', language)}</h3>
    {
      CongressReportCardData.houseData.map(congressMember => 
        <Link to={congressMember.url} target='_blank'>
          <div data-tip={`${congressMember.name} <br /> <strong>${translatedString(congressMember.rank, language)}</strong> <br /> ${translatedString(congressMember.affil, language)} <br /> ${translatedString('Representing', language)} ${congressMember.state}-${congressMember.district}`} 
               className={`ReportCard ${congressMember.affil} tooltip`}>
            <div>{congressMember.state}</div>
            <div>{congressMember.district}</div>
          </div>
        </Link>
      )
    }
    <ReactTooltip html='true' backgroundColor='white' borderColor='#55c0ad' textColor='black' border/>
  </div>

export default ReportCardExplorer
