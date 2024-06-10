import Div from '../Div';
import './spacing.scss';

export default function Spacing({ lg, md }:any) {
  return <Div className={`cs-height_${lg} cs-height_lg_${md}`}></Div>;
}
