var HomeViews = (function(_super){

    function HomeViews(){
        HomeViews.super(this)
        this.NormmalDlg
    }
    Laya.class(HomeViews,"HomeViews", _super)

    HomeViews.prototype.init =function(){
        this.btn_new.on(Laya.Event.CLICK,this,this.onButtonNew)
        this.btn_middle.on(Laya.Event.CLICK,this,this.onButtonMiddle)
        this.btn_heigh.on(Laya.Event.CLICK,this,this.onButtonHeigh)
        this.btn_start.on(Laya.Event.CLICK,this,this.onButtonStart)
        this.btn_rules.on(Laya.Event.CLICK,this,this.onButtonRules)

        this.NormmalDlg =new NormalDialog()
        this.NormmalDlg.init()
    }
    HomeViews.prototype.onButtonNew = function(){
        this.NormmalDlg.setContent('你点进了新手场')
    }
    HomeViews.prototype.onButtonMiddle = function(){
        this.NormmalDlg.setContent('你点进了中级场')
    }
    HomeViews.prototype.onButtonHeigh = function(){
        this.NormmalDlg.setContent('你点进了高级场')
    }
    HomeViews.prototype.onButtonStart = function(){
       this.NormmalDlg.setContent('龙币不足，请充值后开始')
    }
    HomeViews.prototype.onButtonRules = function(){
        this.NormmalDlg.setContent('这是游戏规则的文字.')
    }
    return HomeViews
    
})(HomeUI);