// 不包含，也不上下排列
function isInclude(a,b){
    for(var i=0;i<a.length;i++){        
        if(a[i].x == b.x && a[i].y == b.y || a[i].x == b.x && a[i].y == b.y + 50 || a[i].x == b.x && a[i].y == b.y - 50){
            return true
        }
    }
    return false			
}

// 不包含
function isIn(a,b){
    for(var i=0;i<a.length;i++){
        
        if(a[i].x == b.x && a[i].y == b.y){
            return true
        }
    }
    return false			
}

// 画图
function draw(ctx,arr,img,alpha=1){
    arr.forEach(function(item){    
        ctx.globalAlpha=alpha
        ctx.drawImage(img,item.x,item.y,48,48)              
    })
}
// 清除画布
function clear(ctx,arr){            							
    arr.forEach(function(item,index){
        ctx.clearRect(item.x,item.y,48,48)
    })
}
// 获取图片
function getImg(url){
    var img = new Image()
    img.src = url
    img.width = 48
    img.height = 48                
    return img
}

function aa(){
    alert('dfdfdf')
}

// 路径判断
function hasLeft(obj){
    for(var i=0;i<roadlist.length;i++){
        if(obj.x-50 == roadlist[i].x && obj.y == roadlist[i].y){
            return true
        }
    }
    return false
}
function hasRight(obj){
    for(var i=0;i<roadlist.length;i++){
        if(obj.x+50 == roadlist[i].x && obj.y == roadlist[i].y){
            return true
        }
    }
    return false
}
function hasDown(obj){
    for(var i=0;i<roadlist.length;i++){
        if(obj.x == roadlist[i].x && obj.y +50 == roadlist[i].y){
            return true
        }
    }
    return false
}
function hasUp(obj){
    for(var i=0;i<roadlist.length;i++){
        if(obj.x == roadlist[i].x && obj.y -50 == roadlist[i].y){
            return true
        }
    }
    return false
}

// Cross
function isCross(obj){
    if(hasUp(obj)&&hasDown(obj)&&hasRight(obj)&&hasLeft(obj)){
        return true
    }
    // if(hasDown(obj)&&hasRight(obj)&&hasLeft(obj)){
    //     return true
    // }
    // if(hasUp(obj)&&hasRight(obj)&&hasLeft(obj)){
    //     return true
    // }
    // if(hasUp(obj)&&hasDown(obj)&&hasLeft(obj)){
    //     return true
    // }
    // if(hasUp(obj)&&hasDown(obj)&&hasRight(obj)){
    //     return true
    // }
    return false
}