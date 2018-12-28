var NormalDialog = (function(_super){

    function NormalDialog(){
        NormalDialog.super(this)
    }
    Laya.class(NormalDialog,"NormalDialog",_super)

    NormalDialog.prototype.init = function(){
        this.btnClose.on(Laya.Event.CLICK,this,this.Close)
        this.btnOk.on(Laya.Event.CLICK,this,this.Close)
    }
    NormalDialog.prototype.Close=function(){
        this.close()
    }
    NormalDialog.prototype.setContent = function(context){
        this.txContext.text  = context
        this.popup()
    }
    return NormalDialog
})(NormalDialogUI)