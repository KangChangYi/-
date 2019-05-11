import Mock from 'mockjs';

// 获取图表默认数据
import { getChartData, updateEvent, addEvent } from './chart';

// 获取分析的各类指标
import { getUserGroup, getAttribute } from './analysisIndex';

// 获取整体分析页面  指标列表
import { getIndexGroupOption } from './wholeAnalysis';

// 配置Ajax请求延时，可用来测试网络延迟大时项目中一些效果
Mock.setup({
    timeout: 500,
});

// ?data=visitorInfo
// ?event=eventInfo
// ?event=eventInfo

// 接口
Mock.mock('http://localhost:8001/getData', getChartData);
Mock.mock('http://localhost:8001/getUserGroup', getUserGroup);
Mock.mock('http://localhost:8001/getIndexGroupOption', getIndexGroupOption);
Mock.mock('http://localhost:8001/getAttribute', getAttribute);

Mock.mock('http://localhost:8001/event/update', updateEvent);
Mock.mock('http://localhost:8001/event/add', addEvent);
export default Mock;
