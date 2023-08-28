AFRAME.registerComponent("buttonHandler",{
    init:function(){
        var buyBoat=document.getElementById("#buyBoat")
        var buyTrain=document.getElementById("#buyTrain")
        var buyCar=document.getElementById("#buyCar")
        var buyRobot=document.getElementById("#buyRobot")
        var buyCrane=document.getElementById("#buyCrane")
        var buyPlane=document.getElementById("#buyPlane")
        var info=document.getElementById("#info")

        buyBoat.addEventListener("click",function(){
            swal({
                icon:"warning",
                title:"Out of Stock",
                text:"Please try again soon"
            })
        })
        buyTrain.addEventListener("click",function(){
            swal({
                icon:"warning",
                title:"Out of Stock",
                text:"Please try again soon"
            })
        })
        buyCar.addEventListener("click",function(){
            swal({
                icon:"warning",
                title:"Out of Stock",
                text:"Please try again soon"
            })
        })
        buyRobot.addEventListener("click",function(){
            swal({
                icon:"warning",
                title:"Out of Stock",
                text:"Please try again soon"
            })
        })
        buyCrane.addEventListener("click",function(){
            swal({
                icon:"warning",
                title:"Out of Stock",
                text:"Please try again soon"
            })
        })
        buyPlane.addEventListener("click",function(){
            swal({
                icon:"warning",
                title:"Out of Stock",
                text:"Please try again soon"
            })
        })

        info.addEventListener("click",function(){
            swal({
                icon:"info",
                title:"Shipping Informations",
                text:"Free worldwide shipping /n Products deliver within 2 weeks, moneyback guarantee"
            })
        })
    }
}

)