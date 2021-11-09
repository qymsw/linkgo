// 场景
function Scene(){
    this.canvas = document.getElementById('canvas')
    this.ctx = this.canvas.getContext('2d')    
    var alreadyIn = []                

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
            if(build ===building. birth){
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
            draw(that.ctx,build.position,build.img,1)                   
        }
        
    }

    this.buildXY = function(build){
        for(var i=0;i<500;i++){
            var ex = Math.floor(Math.random()*20)*50
            var ey = Math.floor(Math.random()*9)*50 
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
            this.ctx.lineWidth = 1
            this.ctx.strokeStyle = '#ddd'
            this.ctx.moveTo(0,i*50);
            this. ctx.lineTo(1000,i*50);
            this.ctx.stroke()
        }    
        for(var i=0;i<20;i++){
            this.ctx.lineWidth = 0.5
            this.ctx.moveTo(i*50,0);
            this. ctx.lineTo(i*50,500);
            this.ctx.stroke()
        }              
    }
}     
