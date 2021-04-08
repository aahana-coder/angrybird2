class Slingshot{
    constructor(bodyA,pointB){
        var options={
        bodyA:bodyA,
        pointB:pointB,
        stiffness:0.04,
        length:10
       } 
       this.sling1=loadImage("pic-main/sling1.png") 
       this.sling2=loadImage("pic-main/sling2.png") 
       this.sling3=loadImage("pic-main/sling3.png")

        this.pointB=pointB
       
        this.sling=Constraint.create(options);
        World.add(world,this.sling);
    }

    attach(body){   
    this.sling.bodyA=body;

    }

fly(){
    this.sling.bodyA=null
};

        


    display(){
 image(this.sling1,200,22)
 image(this.sling2,172,17)


        if(this.sling.bodyA){
            var bodyA=this.sling.bodyA.position
            var pointB=this.pointB  
        strokeWeight(4);
        stroke(48,22,8)
        if (bodyA.x<220){

        
        line(bodyA.x-20,bodyA.y,pointB.x-10,pointB.y)
        line(bodyA.x-20,bodyA.y,pointB.x+30,pointB.y)
    image(this.sling3,bodyA.x-30,bodyA.y-10,15,30)
        }
        else{
            line(bodyA.x+25,bodyA.y,pointB.x-10,pointB.y)
            line(bodyA.x+25,bodyA.y,pointB.x+30,pointB.y)       
        image(this.sling3,bodyA.x+25,bodyA.y-10,15,30)
        }
//line(this.sling.bodyA.position.x,this.sling.bodyA.position.y,this.pointB.x,this.pointB.y);
    };
    };
};



















