var CLASS$=Laya.class;
var STATICATTR$=Laya.static;
var View=laya.ui.View;
var Dialog=laya.ui.Dialog;
var HomeUI=(function(_super){
		function HomeUI(){
			
		    this.btn_start=null;
		    this.btn_rules=null;
		    this.text_info=null;
		    this.btn_new=null;
		    this.new_number=null;
		    this.btn_middle=null;
		    this.mindde_number=null;
		    this.btn_heigh=null;
		    this.heigh_number=null;

			HomeUI.__super.call(this);
		}

		CLASS$(HomeUI,'ui.HomeUI',_super);
		var __proto__=HomeUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(HomeUI.uiView);

		}

		HomeUI.uiView={"type":"View","props":{"y":0,"x":7,"width":1334,"height":750},"child":[{"type":"Image","props":{"y":0,"x":0,"skin":"comp/bg.png","layoutEnabled":true}},{"type":"Image","props":{"y":590,"x":511,"var":"btn_start","skin":"comp/btn_start.png"}},{"type":"Image","props":{"y":640,"x":1069,"width":191,"var":"btn_rules","skin":"comp/btn_rules.png","height":64,"sizeGrid":"5,5,5,5"}},{"type":"Image","props":{"y":45,"x":425,"width":491,"skin":"comp/img_dialog.png","height":180,"sizeGrid":"6,6,6,6"}},{"type":"Label","props":{"y":69,"x":427,"width":487,"var":"text_info","text":"趣味大话骰","name":"text_info","height":69,"fontSize":40,"font":"Helvetica","color":"#ffffff","bold":true,"align":"center"}},{"type":"Label","props":{"y":141,"x":427,"width":487,"text":"你敢来和我PK吗？","name":"text_info","height":69,"fontSize":28,"font":"Helvetica","color":"#ffffff","align":"center"}},{"type":"Box","props":{"y":367,"var":"btn_new","left":52},"child":[{"type":"Image","props":{"skin":"comp/btn_1.png"}},{"type":"Box","props":{"y":140,"x":112},"child":[{"type":"Label","props":{"width":52,"valign":"middle","text":"房费：","height":38,"fontSize":20,"font":"SimSun","color":"#d4d4d4","align":"center"}},{"type":"Label","props":{"x":51,"width":40,"var":"new_number","valign":"middle","text":"1","height":38,"fontSize":20,"font":"SimSun","color":"#d4d4d4","align":"center"}},{"type":"Label","props":{"x":89,"width":52,"valign":"middle","text":"龙币","name":"coin","height":38,"fontSize":20,"font":"SimSun","color":"#d4d4d4","align":"center"}}]}]},{"type":"Box","props":{"y":320,"x":481,"var":"btn_middle"},"child":[{"type":"Image","props":{"skin":"comp/btn_2.png"}},{"type":"Box","props":{"y":142,"x":110},"child":[{"type":"Label","props":{"width":52,"valign":"middle","text":"房费：","height":38,"fontSize":20,"font":"SimSun","color":"#d4d4d4","align":"center"}},{"type":"Label","props":{"x":51,"width":40,"var":"mindde_number","valign":"middle","text":"5","height":38,"fontSize":20,"font":"SimSun","color":"#d4d4d4","align":"center"}},{"type":"Label","props":{"x":89,"width":52,"valign":"middle","text":"龙币","name":"coin","height":38,"fontSize":20,"font":"SimSun","color":"#d4d4d4","align":"center"}}]}]},{"type":"Box","props":{"y":367,"x":903,"var":"btn_heigh"},"child":[{"type":"Image","props":{"skin":"comp/btn_3.png"}},{"type":"Box","props":{"y":141,"x":116},"child":[{"type":"Label","props":{"width":52,"valign":"middle","text":"房费：","height":38,"fontSize":20,"font":"SimSun","color":"#d4d4d4","align":"center"}},{"type":"Label","props":{"x":51,"width":40,"var":"heigh_number","valign":"middle","text":"10","height":38,"fontSize":20,"font":"SimSun","color":"#d4d4d4","align":"center"}},{"type":"Label","props":{"x":89,"width":52,"valign":"middle","text":"龙币","name":"coin","height":38,"fontSize":20,"font":"SimSun","color":"#d4d4d4","align":"center"}}]}]}]};
		return HomeUI;
	})(View);
var NormalDialogUI=(function(_super){
		function NormalDialogUI(){
			
		    this.txContext=null;
		    this.btnClose=null;
		    this.btnOk=null;

			NormalDialogUI.__super.call(this);
		}

		CLASS$(NormalDialogUI,'ui.NormalDialogUI',_super);
		var __proto__=NormalDialogUI.prototype;
		__proto__.createChildren=function(){
		    			View.regComponent("Text",laya.display.Text);

			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(NormalDialogUI.uiView);

		}

		NormalDialogUI.uiView={"type":"Dialog","props":{"width":800,"height":450},"child":[{"type":"Image","props":{"y":0,"x":-4,"width":800,"skin":"comp/img_dialog_bg.png","height":450,"sizeGrid":"12,12,12,12"}},{"type":"Text","props":{"y":95,"x":51,"wordWrap":true,"width":706,"var":"txContext","valign":"middle","text":"龙币不足1000，无法进入PK场，赶快去充值","height":187,"fontSize":32,"font":"Arial","color":"#828282","align":"center"}},{"type":"Image","props":{"y":7,"x":725,"width":60,"var":"btnClose","skin":"comp/btn_close.png","height":60}},{"type":"Box","props":{"y":323,"x":280,"var":"btnOk"},"child":[{"type":"Image","props":{"width":240,"skin":"comp/btn_sure.png","height":85}},{"type":"Text","props":{"y":2,"x":37,"width":171,"valign":"middle","text":"确定","height":83,"fontSize":34,"font":"SimSun","color":"#ffffff","align":"center"}}]}]};
		return NormalDialogUI;
	})(Dialog);