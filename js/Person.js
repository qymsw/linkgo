        // 市民
        function Person(){
            this.canvas = document.getElementById('canvas')
			this.ctx = this.canvas.getContext('2d')    
            this.img = getImg('images/nav.png')
            this.target = ''           
            this.position = {}
            this.road = []
            this.direct = 'down'
            this.timer = []

            this.getTarget = function(){
                var ran = Math.floor(Math.random()*3)
                var arr = ['sun','moon','star'];
                this.target = arr[ran]
            }
            // 获取路径
            this.getRoad = function(){ 
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

                    if(isCross(this.position)){
                        var ran = Math.floor(Math.random()*4)
                        var arr = ['down','up','left','rigth'];
                        this.direct = arr[ran]
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

                    if(isCross(this.position)){
                        var ran = Math.floor(Math.random()*4)
                        var arr = ['down','up','left','rigth'];
                        this.direct = arr[ran]
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

                        if(isCross(this.position)){
                            var ran = Math.floor(Math.random()*4)
                            var arr = ['down','up','left','rigth'];
                            this.direct = arr[ran]
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

                        if(isCross(this.position)){
                            var ran = Math.floor(Math.random()*4)
                            var arr = ['down','up','left','rigth'];
                            this.direct = arr[ran]
                        }                 
                        console.log(this.road)
                }
                // if(this.road[this.road.length-1])
                // console.log(this.road)
                // console.log(this.position)
                // console.log(building[this.target].position[0])
                var targetbuild = building[this.target].position[0]
                // console.log(targetbuild.x,targetbuild.y,this.position.x,this.position.y)

                if(targetbuild.x == this.road[this.road.length-1].x && targetbuild.y == this.road[this.road.length-1].y-50){
                    // console.log(this.road)
                    this.timer.forEach(function(item){
                        clearInterval(item)                        
                    })
                }
            }

            this.test = function(){
                this.position.x = this.position.x +50
                var ex = this.position.x
                var ey = this.position.y + 50
                var newposition = {x:ex,y:ey}
            }
            // 移动
            this.move = function(){
                var that = this                
                var routeImg = getImg(building.route.img)
                var i = 0 
                this.timer.push(setInterval(() => {
                    that.getRoad()
                    // that.getRoad()
                    // console.log(that.road[i].x,that.road[i].y)
                    if(that.road[i]){
                        that.ctx.drawImage(that.img,that.road[i].x,that.road[i].y,48,48)
                    }
                    // // console.log(that.road[i].y)
                    if(i>=1){
                        that.ctx.drawImage(routeImg,that.road[i-1].x,that.road[i-1].y,48,48)
                    }
                    i++
                    // console.log(scene.alreadyIn)
                    // console.log(that.target)
                    that.arrive()
                }, 30))
            }

            // 到达目的地
            this.arrive = function(){
                var routeImg = getImg(building.route.img)
                if(this.position.x == building[this.target].position[0].x && this.position.y-50 == building[this.target].position[0].y){
                    // alert('ok')
                    setTimeout(() => {
                         this.ctx.drawImage(routeImg,this.position.x,this.position.y,48,48)                        
                    }, 1000);
                }
                // console.log(this.position.x,building[this.target].position[0].x,this.position.y-50,building[this.target].position[0].y)
            }
        }