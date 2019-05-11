import lineChartOption from '../Options/lineChartOption';
import barChartOption from '../Options/barChartOption';
import pieChartOption from '../Options/pieChartOption';

const chartOptionMap = new Map();
chartOptionMap
    .set('趋势图', lineChartOption)
    .set('汇总图', barChartOption)
    .set('占比图', pieChartOption);

export default chartOptionMap;
