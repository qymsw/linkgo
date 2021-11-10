        // 市民
        function Person(){
               
            this.img = getImg('images/nav.png')
            this.target = ''           
            this.position = {}
            this.road = []
            this.direct = 'down'
            this.timer = null

            // 随机目标
            this.getTarget = function(){
                var ran = Math.floor(Math.random()*3)
                var arr = ['sun','moon','star'];
                this.target = arr[ran]
            }

            // 获取路径
            this.getRoad = function(){ 
                if(isCross(this.position)){
                    var ran = Math.floor(Math.random()*4)
                    var arr = ['down','up','left','right'];
                    this.direct = arr[ran]
                    if(hasDown(this.position) && this.direct == 'down'){
                        this.position.y = this.position.y + 50  
                        var newobj = JSON.parse(JSON.stringify(this.position)) 
                        this.road.push(newobj)

                        if(!hasDown(this.position) && hasLeft(this.position)){
                            this.direct = 'left'
                        }else if(!hasDown(this.position) && hasRight(this.position)){
                            this.direct = 'right'
                        }else if(!hasDown(this.position)){
                            this.direct = 'up'
                        }

                         
                        // console.log('down')
                    }else if(hasUp(this.position)  && this.direct == 'up'){
                        this.position.y = this.position.y - 50 
                        var newobj = JSON.parse(JSON.stringify(this.position))                
                        this.road.push(newobj)

                        if(!hasUp(this.position) && hasLeft(this.position)){
                            this.direct = 'left'
                        }else if(!hasUp(this.position) && hasRight(this.position)){
                            this.direct = 'right'
                        }else if(!hasUp(this.position)){
                            this.direct = 'down'
                        }

                        // if(isCross(this.position)){
                        //     var ran = Math.floor(Math.random()*4)
                        //     var arr = ['down','up','left','rigth'];
                        //     this.direct = arr[ran]
                        // }
                        // console.log('up')
                    }else if(hasLeft(this.position)  && this.direct == 'left'){                    
                        this.position.x = this.position.x - 50
                        var newobj = JSON.parse(JSON.stringify(this.position))                
                        this.road.push(newobj)

                        if(!hasLeft(this.position) && hasUp(this.position)){
                            this.direct = 'up'
                        }else if(!hasLeft(this.position) && hasDown(this.position)){
                            this.direct = 'down'
                        }else if(!hasLeft(this.position)){
                            this.direct = 'right'

                        }

                        // if(isCross(this.position)){
                        //     var ran = Math.floor(Math.random()*4)
                        //     var arr = ['down','up','left','rigth'];
                        //     this.direct = arr[ran]
                        // }
                        // console.log('left')
                    }else if(hasRight(this.position)  && this.direct == 'right'){                    
                        this.position.x = this.position.x + 50
                        var newobj = JSON.parse(JSON.stringify(this.position))                
                        this.road.push(newobj)
                        
                        if(!hasRight(this.position) && hasDown(this.position)){
                            this.direct = 'down'
                        }else if(!hasRight(this.position) && hasUp(this.position)){
                            this.direct = 'up'
                        }else if(!hasRight(this.position)){
                            this.direct = 'left'
                        }     

                        // if(isCross(this.position)){
                        //     var ran = Math.floor(Math.random()*4)
                        //     var arr = ['down','up','left','rigth'];
                        //     this.direct = arr[ran]
                        // }                 
                        
                    } 
                }else if(threeCross(this.position) == 'noup'){
                    var ran = Math.floor(Math.random()*3)
                    var arr = ['down','left','right'];
                    this.direct = arr[ran]
                    if(hasDown(this.position) && this.direct == 'down'){
                        this.position.y = this.position.y + 50  
                        var newobj = JSON.parse(JSON.stringify(this.position)) 
                        this.road.push(newobj)

                        if(!hasDown(this.position) && hasLeft(this.position)){
                            this.direct = 'left'
                        }else if(!hasDown(this.position) && hasRight(this.position)){
                            this.direct = 'right'
                        }else if(!hasDown(this.position)){
                            this.direct = 'up'
                        }
                        // console.log('down')
                    }else if(hasLeft(this.position)  && this.direct == 'left'){                    
                        this.position.x = this.position.x - 50
                        var newobj = JSON.parse(JSON.stringify(this.position))                
                        this.road.push(newobj)

                        if(!hasLeft(this.position) && hasUp(this.position)){
                            this.direct = 'up'
                        }else if(!hasLeft(this.position) && hasDown(this.position)){
                            this.direct = 'down'
                        }else if(!hasLeft(this.position)){
                            this.direct = 'right'

                        }
                    }else if(hasRight(this.position)  && this.direct == 'right'){                    
                        this.position.x = this.position.x + 50
                        var newobj = JSON.parse(JSON.stringify(this.position))                
                        this.road.push(newobj)
                        
                        if(!hasRight(this.position) && hasDown(this.position)){
                            this.direct = 'down'
                        }else if(!hasRight(this.position) && hasUp(this.position)){
                            this.direct = 'up'
                        }else if(!hasRight(this.position)){
                            this.direct = 'left'
                        }                         
                    } 
                }else if(threeCross(this.position) == 'nodown'){
                    var ran = Math.floor(Math.random()*3)
                    var arr = ['up','left','right'];

                    this.direct = arr[ran]
                    if(hasUp(this.position)  && this.direct == 'up'){
                        this.position.y = this.position.y - 50 
                        var newobj = JSON.parse(JSON.stringify(this.position))                
                        this.road.push(newobj)

                        if(!hasUp(this.position) && hasLeft(this.position)){
                            this.direct = 'left'
                        }else if(!hasUp(this.position) && hasRight(this.position)){
                            this.direct = 'right'
                        }else if(!hasUp(this.position)){
                            this.direct = 'down'
                        }
                        // console.log('up')
                    }else if(hasLeft(this.position)  && this.direct == 'left'){                    
                        this.position.x = this.position.x - 50
                        var newobj = JSON.parse(JSON.stringify(this.position))                
                        this.road.push(newobj)

                        if(!hasLeft(this.position) && hasUp(this.position)){
                            this.direct = 'up'
                        }else if(!hasLeft(this.position) && hasDown(this.position)){
                            this.direct = 'down'
                        }else if(!hasLeft(this.position)){
                            this.direct = 'right'

                        }
                        // console.log('left')
                    }else if(hasRight(this.position)  && this.direct == 'right'){                    
                        this.position.x = this.position.x + 50
                        var newobj = JSON.parse(JSON.stringify(this.position))                
                        this.road.push(newobj)
                        
                        if(!hasRight(this.position) && hasDown(this.position)){
                            this.direct = 'down'
                        }else if(!hasRight(this.position) && hasUp(this.position)){
                            this.direct = 'up'
                        }else if(!hasRight(this.position)){
                            this.direct = 'left'
                        }     
                    } 
                }else if(threeCross(this.position) == 'noleft'){
                    var ran = Math.floor(Math.random()*3)
                    var arr = ['down','up','right'];
                    this.direct = arr[ran]
                    if(hasDown(this.position) && this.direct == 'down'){
                        this.position.y = this.position.y + 50  
                        var newobj = JSON.parse(JSON.stringify(this.position)) 
                        this.road.push(newobj)

                        if(!hasDown(this.position) && hasLeft(this.position)){
                            this.direct = 'left'
                        }else if(!hasDown(this.position) && hasRight(this.position)){
                            this.direct = 'right'
                        }else if(!hasDown(this.position)){
                            this.direct = 'up'
                        }
                        // console.log('down')
                    }else if(hasUp(this.position)  && this.direct == 'up'){
                        this.position.y = this.position.y - 50 
                        var newobj = JSON.parse(JSON.stringify(this.position))                
                        this.road.push(newobj)

                        if(!hasUp(this.position) && hasLeft(this.position)){
                            this.direct = 'left'
                        }else if(!hasUp(this.position) && hasRight(this.position)){
                            this.direct = 'right'
                        }else if(!hasUp(this.position)){
                            this.direct = 'down'
                        }
                    }else if(hasRight(this.position)  && this.direct == 'right'){                    
                        this.position.x = this.position.x + 50
                        var newobj = JSON.parse(JSON.stringify(this.position))                
                        this.road.push(newobj)
                        
                        if(!hasRight(this.position) && hasDown(this.position)){
                            this.direct = 'down'
                        }else if(!hasRight(this.position) && hasUp(this.position)){
                            this.direct = 'up'
                        }else if(!hasRight(this.position)){
                            this.direct = 'left'
                        }                 
                    } 
                }else if(threeCross(this.position) == 'noright'){
                    var ran = Math.floor(Math.random()*3)
                    var arr = ['down','left','up'];
                    this.direct = arr[ran]
                    if(hasDown(this.position) && this.direct == 'down'){
                        this.position.y = this.position.y + 50  
                        var newobj = JSON.parse(JSON.stringify(this.position)) 
                        this.road.push(newobj)

                        if(!hasDown(this.position) && hasLeft(this.position)){
                            this.direct = 'left'
                        }else if(!hasDown(this.position) && hasRight(this.position)){
                            this.direct = 'right'
                        }else if(!hasDown(this.position)){
                            this.direct = 'up'
                        }                         
                        // console.log('down')
                    }else if(hasUp(this.position)  && this.direct == 'up'){
                        this.position.y = this.position.y - 50 
                        var newobj = JSON.parse(JSON.stringify(this.position))                
                        this.road.push(newobj)

                        if(!hasUp(this.position) && hasLeft(this.position)){
                            this.direct = 'left'
                        }else if(!hasUp(this.position) && hasRight(this.position)){
                            this.direct = 'right'
                        }else if(!hasUp(this.position)){
                            this.direct = 'down'
                        }
                    }else if(hasLeft(this.position)  && this.direct == 'left'){                    
                        this.position.x = this.position.x - 50
                        var newobj = JSON.parse(JSON.stringify(this.position))                
                        this.road.push(newobj)

                        if(!hasLeft(this.position) && hasUp(this.position)){
                            this.direct = 'up'
                        }else if(!hasLeft(this.position) && hasDown(this.position)){
                            this.direct = 'down'
                        }else if(!hasLeft(this.position)){
                            this.direct = 'right'

                        }
                    }
                }else if(hasDown(this.position) && this.direct == 'down'){
                    this.position.y = this.position.y + 50  
                    var newobj = JSON.parse(JSON.stringify(this.position)) 
                    this.road.push(newobj)

                    if(!hasDown(this.position) && hasLeft(this.position)){
                        this.direct = 'left'
                    }else if(!hasDown(this.position) && hasRight(this.position)){
                        this.direct = 'right'
                    }else if(!hasDown(this.position)){
                        this.direct = 'up'
                    }
                    // console.log('down')
                }else if(hasUp(this.position)  && this.direct == 'up'){
                    this.position.y = this.position.y - 50 
                    var newobj = JSON.parse(JSON.stringify(this.position))                
                    this.road.push(newobj)

                    if(!hasUp(this.position) && hasLeft(this.position)){
                        this.direct = 'left'
                    }else if(!hasUp(this.position) && hasRight(this.position)){
                        this.direct = 'right'
                    }else if(!hasUp(this.position)){
                        this.direct = 'down'
                    }
                    // console.log('up')
                }else if(hasLeft(this.position)  && this.direct == 'left'){                    
                    this.position.x = this.position.x - 50
                    var newobj = JSON.parse(JSON.stringify(this.position))                
                    this.road.push(newobj)

                    if(!hasLeft(this.position) && hasUp(this.position)){
                        this.direct = 'up'
                    }else if(!hasLeft(this.position) && hasDown(this.position)){
                        this.direct = 'down'
                    }else if(!hasLeft(this.position)){
                        this.direct = 'right'

                    }
                    // console.log('left')
                }else if(hasRight(this.position)  && this.direct == 'right'){                    
                    this.position.x = this.position.x + 50
                    var newobj = JSON.parse(JSON.stringify(this.position))                
                    this.road.push(newobj)
                    
                    if(!hasRight(this.position) && hasDown(this.position)){
                        this.direct = 'down'
                    }else if(!hasRight(this.position) && hasUp(this.position)){
                        this.direct = 'up'
                    }else if(!hasRight(this.position)){
                        this.direct = 'left'
                    }     
                } 
            }

            this.test = function(){
                this.position.x = this.position.x +50
                var ex = this.position.x
                var ey = this.position.y + 50
                var newposition = {x:ex,y:ey}
            }

             var i = 0 


            // 移动
            this.move = function(){
                var that = this                
                var routeImg = getImg(building.route.img)
                this.timer = setInterval(() => {
                    that.getRoad()
                    if(that.road[i]){
                        ctx.drawImage(that.img,that.road[i].x,that.road[i].y,48,48)
                    }
                    if(i>=1){
                        ctx.drawImage(routeImg,that.road[i-1].x,that.road[i-1].y,48,48)
                    }
                    i++
                    that.arrive()
                    console.log(i)
                    console.log(this.target)
                    console.log(this.position)
                    console.log(this.road)
                }, 30)
            }

            // 到达目的地
            this.arrive = function(){
                var routeImg = getImg(building.route.img)
                if(this.position.x == building[this.target].position[0].x && this.position.y-50 == building[this.target].position[0].y){
                    clearInterval(this.timer)                   
                    setTimeout(() => {
                         ctx.drawImage(routeImg,this.position.x,this.position.y,48,48)   
                         console.log('成功了')
                         this.road = []                     
                    }, 1000);
                }                
            }
        }