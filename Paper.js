class Paper
{
	constructor(x,y,w,h)
	{
		var options={
			isStatic:false,		
            restituition:0.3,
            friction:0,	
            density:1.2
			}
            this.image=loadImage("paper.png")
		this.w=w
		this.h=h
		this.body=Bodies.rectangle(x, y, w, h , options);
 		World.add(world, this.body);

	}
	display()
	{
			
			var groundPos=this.body.position;		

			push()
			translate(groundPos.x, groundPos.y);
			rotate(this.body.angle)
			imageMode(CENTER)
			//strokeWeight(4);
			fill(128,128,128)
			image(this.image,0,0,80, 80);
			pop()
			
	}

}