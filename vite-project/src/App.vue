<template>
	<div id="myChart" style="width: 500px; height: 300px; margin: auto"></div>
</template>

<script>
import * as echarts from 'echarts';
import { onMounted } from 'vue';

export default {
	setup() {
		onMounted(() => {
			let myChart = echarts.init(document.getElementById('myChart'),"");
			// 设置图表配置项,可以直接从Echarts的示例中，将配置项复制下来后放入下列的myChart.setOption()中实现图表的样式更换
			myChart.setOption({
				title: {
					text: 'ECharts'
				},
				tooltip: {},
				xAxis: {
                    type:"category",
					data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
				},
				yAxis: {},
				series: [
					{
						name: '销量',
						type: 'line',
                        smooth:true,
						data: [5, 20, 36, 10, 10, 20]
					},
					
				]
			});
			window.onresize = function () {
				// 自适应大小
				myChart.resize();
			};
		});
	}
};
</script>
