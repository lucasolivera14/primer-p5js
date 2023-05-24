function setup() {
    createCanvas(500, 500);
  background('red'); //fondo rojo}
    
    ellipse(250, 250, 200, 200)// ojo cículo más grande
    fill(color(0, 0, 255))// relleno azul círculo intermedio- ojo
    ellipse(250, 250, 150, 150)// ojo círulo intermedio
    fill (0) // relleno del círculo más chico - ojo
    ellipse(250, 250, 100, 100)// ojo círculo más chico
     
    line(490, 480, 10, 20)//línea que atraviesa el ojo
    ellipse(490, 480, 10, 20) //círculito en donde empieza esa línea
  
    triangle(600, 450, 350, 300, 600, 550); //triángulo esq.inf.derecha
    
    line(600, 0, 350, 250);
    line(500, 0, 350, 200);//líneas de la esq.sup. derecha
    fill(300);//relleno blanco del círculito adentro del ojo
    ellipse(280, 250, 10, 10);//círculito adentro del ojo
   
    rect(30, 20, 55, 55);//cuadrado superior blanco
    fill(0) //relleno del cuadrado de abajo
    rect(60, 40, 60, 60) // cuadrado negro de abajo
    line(30, 20, 85, 75) //línea del cuadrado blanco 
    
    rect(460, 30, 30, 90);
    fill("white")
      rect(465, 35, 20, 20);
      rect(465, 60, 20, 20);
      rect(465, 90, 20, 25);//rec. con cuadrados blancos
  
    fill("blue")//relleno del círculo de este
     ellipse(100, 370, 50, 50)//círculo grande esq.inf.izq
    fill("white")
     ellipse(100, 370, 40, 40)//círculo encerrado en el azul
     ellipse(100, 400, 40, 40)//círculo intermedio
    fill("black")
     ellipse(100, 400, 20, 20)//círculo chico esq.inf.izq
    
    line(10, 480, 20, 20)//línea esq.izquierda
   
    //quería agregarle más cosas pero ya no sigo más porque me aburrí
    
    
  }
  
  function draw() {
    
  }