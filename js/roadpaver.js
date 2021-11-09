		// 铺路
		function RoadPaver(){
            this.img = getImg('images/route.png')
			// this.roadlist = []
			this.canvas = document.getElementById('canvas')
			this.ctx = this.canvas.getContext('2d')
            var container = document.getElementsByClassName('container')[0]

			this.buildroad = function(){
				var that = this
                var temparr = []
				this.canvas.onmousedown = function(e){
                    // console.log(container.offsetLeft)
					that.canvas.onmousemove = (e)=>{
						var disX = Math.floor((e.pageX-container.offsetLeft)/50)*50
						var disY = Math.floor((e.pageY-container.offsetTop)/50)*50						
						var newroad = {x:disX,y:disY}
                        if(!isIn(roadlist,newroad) && !isIn(temparr,newroad) && !isIn(alreadySet,newroad)){
							temparr.push(newroad)
						} 
                        
                        // 画虚拟路径
                        clear(that.ctx,temparr)                        
                        draw(that.ctx,temparr,that.img,0.2)  				
                        
                        // 画布外释放
                        that.canvas.onmouseout = (e) => {
                            document.onmouseup = (e) => {
                                clear(that.ctx,temparr)
                                temparr = []
                                that.canvas.onmouseout = null
                                that.canvas.onmousemove = null
                                document.onmouseup = null
                                // console.log('aaa')
                            }
                        }                      

                        // 画布内释放
						that.canvas.onmouseup = (e)=>{
                            roadlist = roadlist.concat(temparr)                        
                            draw(that.ctx,roadlist,that.img,1)
                            temparr = []                            
							that.canvas.onmousemove = null
							// console.log(roadlist)
						}
					}			
				}			
			}

        }
        