(function(){
    (()=>{
        Laya.init(1334,750,Laya.WebGL)
        Laya.stage.scaleMode = Laya.Stage.SCALE_FIXED_AUTO
        Laya.stage.alignH = Laya.Stage.ALIGN_CENTER
        Laya.stage.alignV = Laya.Stage.ALIGN_MIDDLE
        Laya.stage.screenMode = Laya.Stage.SCREEN_HORIZONTAL
        Laya.stage.bgColor = "#42413f";
        Laya.Stat.show(0,0)
        LoadHome()
    })()

    function LoadHome(){
        var imgUrl=
            [
                {url:'res/atlas/comp.atlas',type:Laya.Loader.ATLAS}
            ]
        Laya.loader.load(imgUrl,Laya.Handler.create(null,LoadComplete))
    }

    function LoadComplete(){
        var HomeView = new HomeViews();
        HomeView.init()
        Laya.stage.addChild(HomeView)
    }
})()