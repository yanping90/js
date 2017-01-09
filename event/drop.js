/**
 * Created by Chiao on 2017/1/9.
 */
$(function(){
	$(".select_item").on("click",function(){
		var _self = $(this);

		/*确定下拉内容*/
		/*根据data数组来判断是否有内容*/
		var d1 = data;
		_self.prevAll().each(
			function(i,el){
				d1 = d1[i].name;
			}
		);
		console.log(d1);
		/*渲染下拉html*/
	});

})