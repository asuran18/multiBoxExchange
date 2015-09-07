(function($) {
	/**
	 * multiBoxExchange 两个多选框间的选项变换
	 * 该函数需要4个元素：两个多选框和两个按钮，这些元素都包含在调用该方法的元素中
	 * 	 1、第一个多选框类的默认值为'.src-box'
	 *   2、第二个多选框类的默认值为'.tar-box'
	 *   3、移动第一个多选框选项到第二个多选框的按钮类的默认值为'.btn-s2t'
	 *   4、移动第二个多选框选项到第一个多选框的按钮类的默认值为'.btn-t2s'
	 * 
	 * @param  {Object} [eles] 可选参数，如果参数为空，则使用默认值（确保元素的类的值与默认值相同）
	 * @param  {String} eles.srcbox 第一个多选框的id/class值 
	 * @param  {String} eles.tarbox 第二个多选框的id/class值
	 * @param  {String} eles.s2tbtn 移动第一个多选框选项到第二个多选框的按钮的id/class值
	 * @param  {String} eles.t2sbtn 移动第二个多选框选项到第一个多选框的按钮的id/class值
	 */
	jQuery.fn.multiBoxExchange = function(eles) {
		var that = this;
		if(!eles) eles = {};
		var sourcebox = eles.srcbox? that.find(eles.srcbox): that.find('.src-box');
		var targetbox = eles.tarbox? that.find(eles.tarbox): that.find('.tar-box');
		var btnSrc2Tar = eles.s2t? that.find(eles.s2tbtn): that.find('.btn-s2t');
		var btnTar2Src = eles.t2s? that.find(eles.t2sbtn): that.find('.btn-t2s');

		btnSrc2Tar.click(function(event) {
			eleExchangeInMutiSelectBox(sourcebox, targetbox);
		});
		btnTar2Src.click(function(event) {
			eleExchangeInMutiSelectBox(targetbox, sourcebox);
		});

		/**
		 * eleExchangeInMutiSelectBox 将源多选框的元素加入目标多选框中
		 * @param  {jQuery Object}   source  需要移除元素的多选框
		 * @param  {jQuery Object}   target   需要添加元素的多选框
		 */
		function eleExchangeInMutiSelectBox(source, target) {
			var curVal = source.val(); //多选框的当前被选中值
			if (curVal) {
				source.find('option').each(function() { //遍历所有选项选中与被选中的选项
					if($.inArray($(this).val(), curVal) != -1) {
						target.append($(this));
					}
				});
			}
		}
	}
})(jQuery);