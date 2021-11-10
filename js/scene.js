// 场景
function Scene(){
    var alreadyIn = []

    // 根据难度放置建筑物
    this.setBuild = function(build,level){
        var that = this
        if(level == 'easy'){
            if(build === building.birth){
                this.buildXY(build)
            }else{
                this.buildXY(build)
            }                    
        } 
        if(level == 'normal'){
            if(build === building.birth){
                this.buildXY(build)
                this.buildXY(build)
            }else{
                this.buildXY(build)
            }                    
        } 
        if(level === 'hard'){
            if(build === building.birth){
                this.buildXY(build)
                this.buildXY(build)
                this.buildXY(build)
            }else{
                this.buildXY(build)
                this.buildXY(build)
            }                    
        }                 
        
        build.img = getImg(build.img)                
        build.img.onload = function(){
            draw(build.position,build.img,1)  

        }
        
    }

    // 随机获取建筑物的坐标
    this.buildXY = function(build){
        for(var i=0;i<500;i++){
            var ex = Math.floor(Math.random()*20)*50
            var ey = Math.floor(Math.random()*9)*50 
            // 不包括,也不上下靠近
            if(!isInclude(alreadyIn,{x:ex,y:ey})){                        
                build.position.push({x:ex,y:ey}) 
                alreadyIn = alreadyIn.concat(build.position) 
                break                      
            }                    
        }                 
    }

    // 画网格
    this.setCell = function(){
        for(var i=0;i<10;i++){
            ctx.strokeStyle = '#ddd'
            ctx.moveTo(0,i*50);
            ctx.lineTo(1000,i*50);
            ctx.stroke()
        }    
        for(var i=0;i<20;i++){
            ctx.moveTo(i*50,0);
            ctx.lineTo(i*50,500);
            ctx.stroke()
        }              
    }
}     
