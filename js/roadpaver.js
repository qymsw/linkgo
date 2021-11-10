		// 铺路
		function RoadPaver(){
            this.img = getImg(building.route.img)			
            var container = document.getElementsByClassName('container')[0]
			this.buildroad = function(){
				var that = this
                var temparr = []
				canvas.onmousedown = function(e){
                    // console.log(container.offsetLeft)
					canvas.onmousemove = (e)=>{
						var disX = Math.floor((e.pageX-container.offsetLeft)/50)*50
						var disY = Math.floor((e.pageY-container.offsetTop)/50)*50						
						var newroad = {x:disX,y:disY}
                        if(!isIn(roadlist,newroad) && !isIn(temparr,newroad) && !isIn(alreadySet,newroad)){
							temparr.push(newroad)
						} 
                        
                        // 画虚拟路径
                        clear(temparr)                        
                        draw(temparr,that.img,0.2)  				
                        
                        // 画布外释放
                        canvas.onmouseout = (e) => {
                            document.onmouseup = (e) => {
                                clear(temparr)
                                temparr = []
                                canvas.onmouseout = null
                                canvas.onmousemove = null
                                document.onmouseup = null
                                // console.log('aaa')
                            }
                        }                      

                        // 画布内释放
						canvas.onmouseup = (e)=>{
                            roadlist = roadlist.concat(temparr)                        
                            draw(roadlist,that.img)
                            temparr = []                            
							canvas.onmousemove = null
							// console.log(roadlist)
						}
					}			
				}			
			}

        }
        