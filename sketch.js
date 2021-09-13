tela = 0;
cont = 0;
cont_perg = 0;
posX = posY = 10
tamGride = 20;
capacidade = 30;
pontoX = [];
pontoY = [];
veloX = veloY = 0;
trilha = [];
cauda = 1;
colisao = false;
nivel = 1;
vidas = 3;
var telaAnterior = 1;
let snd, sndgo, sndm;
perg1 = [
   {
	   q: "1 + 2 = ?",
	   alt: [3,5,4],
	   r: 0   
	},
   {
	   q: "5 + 1 = ?",
	   alt: [11,6,4],
	   r: 1   
	},
	{ 
	   q: "4 + 3 = ?",
		alt: [12,14,7],
		r: 2
	},
	{
	   q: "7 + 2 = ?",
		alt: [9,12,5],
		r: 0
	 }, 
	{
	   q: "7 + 3 = ?",
		alt: [1,6,10],
		r: 2
	 },
	{
	   q: "8 + 6 = ?",
		alt: [14,5,12],
		r: 0 
	 },
	 {
	   q: "7 - 2 =  ?",
		alt: [5,9,3],
		r: 0
	  },
	 {
	   q: "4 - 1 = ?",
		alt: [9,3,5],
		r: 1  
	  },
	 {
	   q: "7 + 8 = ?",
	   alt: [4,15,8],
	   r: 2
	  },
	  {
		q: "15-9 = ?",
		alt: [6,20,16],
		r: 0  
		}  
		
]
perg2 = [
   {
	   q: "2 x 3 = ?",
	   alt: [5,10,6],
	   r: 2   
	},
   {
	   q: "1 x 2 = ?",
	   alt: [3,2,21],
	   r: 1   
	},
	{ 
	   q: "2 x 1 = ?",
		alt: [12,5,2],
		r: 2
	},
	{
	   q: "4 x 3 = ?",
		alt: [12,43,5],
		r: 0
	 }, 
	{
	   q: "5 x 2 = ?",
		alt: [11,15,10],
		r: 2
	 },
	{
	   q: "7 x 3 = ?",
		alt: [21,5,3],
		r: 0 
	 },
	 {
	   q: "9 x 4 = ?",
		alt: [36,1,28],
		r: 0
	  },
	 {
	   q: "10 / 2 = ?",
		alt: [12,5,20],
		r: 1  
	  },
	 {
	   q: "6 / 2 = ?",
	   alt: [233,124,223],
	   r: 2
	  },
	  {
		q: "20 / 5 = ?",
		alt: [4,2,15],
		r: 0  
		}  
		
]
perg3 = [
   {
	   q: "22 + 11 = ?",
	   alt: [35,15,33],
	   r: 2   
	},
   {
	   q: "78 + 12 = ?",
	   alt: [11,90,4],
	   r: 1   
	},
	{ 
	   q: "77 + 33 = ?",
		alt: [12,140,110],
		r: 2
	},
	{
	   q: "8 x 4 = ?",
		alt: [32,12,54],
		r: 0
	 }, 
	{
	   q: "21 / 7 = ?",
		alt: [28,15,3],
		r: 2
	 },
	{
	   q: "36 / 9 = ?",
		alt: [4,8,10],
		r: 0 
	 },
	 {
	   q: "6 x 5 = ?",
		alt: [30,11,15],
		r: 0
	  },
	 {
	   q: "5 x 5 = ?",
		alt: [12,37,9],
		r: 1  
	  },
	 {
	   q: "25 - 20 = ?",
	   alt: [23,2,5],
	   r: 2
	  },
	  {
		q: "500 + 500 = ?",
		alt: [1000,800,750],
		r: 0  
		}  	
]

function telaJogo() {
 
  if(playsound()){
    sndm.stop();
    snd.play();
    snd.loop();
    snd.setVolume(0.01);
    
}
  if (tela == 3) {
        image(img2,0,0);
        fill(255); 
        textSize(25);
        textAlign(CENTER)
        text(p.q, 200, 30);
        cont++;
    
  if (cont % 10 == 0) {
            posX = posX + veloX;
            posY = posY + veloY;
            trilha.push({
                x: posX,
                y: posY
            });
            while (trilha.length > cauda) {
                trilha.shift();
            }

            for (i = 0; i < trilha.length - 1; i++) {
                if (trilha[i].x == posX && trilha[i].y == posY) {
                    cauda = cauda - 2;
                }
            }
	
        }
        
        if (posX < 0)
            posX = capacidade - 1;
        if (posX > capacidade - 1)
            posX = 0;
        if (posY < 0)
            posY = capacidade - 1;
        if (posY > capacidade - 1)
            posY = 0;
        for (var i = 0; i < trilha.length; i++) {
            rect(trilha[i].x * tamGride, trilha[i].y * tamGride, tamGride-2, tamGride-2);
        }


        if (keyIsDown(LEFT_ARROW)) {
            veloX = -1;
            veloY = 0;
        }
        if (keyIsDown(RIGHT_ARROW)) {
            veloX = 1;
            veloY = 0;
        }
        if (keyIsDown(UP_ARROW)) {
            veloX = 0;
            veloY = -1;
        }
        if (keyIsDown(DOWN_ARROW)) {
            veloX = 0;
            veloY = 1;
        }
                
		for (i=0; i<3; i++) {
			if (pontoX[i] == posX && pontoY[i] == posY) {
				if (i == p.r ) {
					cauda += 1;
                  } else {
					vidas--;
				}
				colisao = true;
				cont_perg++;  
				
				if (nivel == 1){ 
					if (cont_perg < perg1.length) {
						p = perg1[cont_perg];
					}
					else {
						nivel++;
						cont_perg = 0;
					}	
				}
				
				if (nivel == 2){ 
					if (cont_perg < perg2.length) {
						p = perg2[cont_perg];
					}
					else {
						nivel++;
						cont_perg = 0;
					}	
				}		
				
				if (nivel == 3){ 
					if (cont_perg < perg3.length) {
						p = perg3[cont_perg];
					}
					else {
						nivel++;
						cont_perg = 0;
					}	
				}						
					
				break;
			} 
        }    


        if (colisao) { 
			 colisao = false;
			 pontoX[0] = getRndInteger(1,6);
			 pontoY[0] = getRndInteger(5,19);    
			 pontoX[1] = getRndInteger(7,13);
			 pontoY[1] = getRndInteger(5,19); 
			 pontoX[2] = getRndInteger(13,19);
			 pontoY[2] = getRndInteger(5,19);  
        }
        for (i=0; i<3; i++) {
			fill(255);
			rect(pontoX[i] * tamGride, pontoY[i] * tamGride, tamGride, tamGride);
			textAlign(CENTER, CENTER);
			textSize(15);
			fill(0);
			text(p.alt[i], pontoX[i] * tamGride+10, pontoY[i] * tamGride+10);     
          textAlign(CENTER, CENTER);
            textSize(15);
            text( "Vidas: " + vidas,40,15)
          if (vidas == 0){
            snd.stop();
            sndm.stop();
            sndgo.play();
            snd.setVolume(10);
			tela = 4
          if ("voltar") {
			vidas = 3;
			cauda = 1;
			nivel = 1;
            tela = 4;
        }
      }
    }
  }
}


function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min) ) + min;
}

function telaGameover(){
  background(220);
  image(img2, 0, 0);
   textSize(36);
  textAlign(CENTER);
  fill(255, 255, 255);
  text("Game Over!!", 200, 200);
  textSize(26);
  textAlign(CENTER);
  fill(255, 255, 255);
  text("Não Desista, Tente Novamente =)", 60, 300, 300);
  
  fill(25, 25, 112);
  rect(10, 540, 60, 50, 10);
  textSize(18);
  textAlign(CENTER);
  fill(255, 255, 255);
  text("Voltar", 40, 570);
  
}
function telaCreditos() {
  background(220);
  image(img2, 0, 0);
  image(img3, 10, 260);
  textSize(36);
  textAlign(CENTER);
  fill(255, 255, 255);
  text("Créditos", 200, 70);
  textSize(18);
  textAlign(CENTER);
  text("Desconhecido (Colabeduc)", 280, 110);
  textSize(16);
  textAlign(CENTER);
  text("Função: Educador", 280, 130);
  textSize(16);
  textAlign(CENTER);
  text("Desconhecido", 280, 160);

  textSize(18);
  textAlign(CENTER);
  text("Everton da Costa Silva", 280, 300);
  textSize(16);
  textAlign(CENTER);
  text("Função: Programador ", 280, 320);
  textSize(16);
  textAlign(CENTER);
  text(
    "Estudante do Bacharelado em Ciência e tecnológia na UFRN",
    150,
    350,
    270
  );

  fill(25, 25, 112);
  rect(10, 440, 60, 50, 10);
  textSize(18);
  textAlign(CENTER);
  fill(255, 255, 255);
  text("Voltar", 40, 470);
}

function telaInstruçoes() {
  background(220);
  image(img2, 0, 0);
  textSize(36);
  fill(255, 255, 255);
  text("Instruções", 200, 70);
  textSize(16);
  text(
    "- Use os direcionais do teclado para movimenta a cobra. ",
    20,
    120,
    360
  );
  text(
    "- Coma o valor correto para fazer com que sua Cobra cresça. ",
    20,
    170,
    360
  );
  text(
    "- Ao comer um valor incorreto, você perderá uma vida de um total de 3. ",
    20,
    220,
    360
  );

  fill(25, 25, 112);
  rect(10, 440, 60, 50, 10);
  textSize(18);
  textAlign(CENTER);
  fill(255, 255, 255);
  text("Voltar", 40, 470);
}

function telaMenu() {
  
  if(playsound()){
    sndgo.stop();
    snd.stop();
    sndm.play();
    sndm.loop();
    sndm.setVolume(0.1);
  }
  background(255, 255, 255);
  image(img, 0, 0);

  noStroke();

  fill(25, 25, 112);

  rect(100, 250, 200, 50, 10);
  rect(100, 320, 200, 50, 10);
  rect(100, 390, 200, 50, 10);

  textSize(26);
  textAlign(CENTER);
  fill(220, 220, 200);
  text("Jogar", 200, 280);
  text("Instruções", 200, 350);
  text("Créditos", 200, 420);

  noFill();
  stroke(0, 255, 0);
  rect(100, borda, 200, 50, 10);
}

function mousePressed() {
  
  if (mouseX >= 10 && mouseX <= 70 && mouseY >= 540 && mouseY <= 590) {
    tela = 0;
  }
  else if (mouseX >= 100 && mouseX <= 300 && mouseY >= 250 && mouseY <= 300) {
    borda = 250;
    tela = 3;
  } else if (mouseX >= 100 && mouseX <= 300 && mouseY >= 320 && mouseY <= 370) {
    borda = 320;
    tela = 1;
  } else if (mouseX >= 100 && mouseX <= 300 && mouseY >= 390 && mouseY <= 440) {
    borda = 390;
    tela = 2;
  } else if (mouseX >= 10 && mouseX <= 70 && mouseY >= 440 && mouseY <= 490) {
    tela = 0;
  }
}

let borda = 250;

function preload() {
  img = loadImage("imagens/menu.png");
  img2 = loadImage("imagens/fundo.png");
  img3 = loadImage("imagens/everton.jpg");
  snd = loadSound("sons/wild_poco.mp3");
  sndgo = loadSound("sons/gameover.wav");
  sndm = loadSound("sons/menu.wav");
}

function playsound(){
  if(tela == telaAnterior){
    return false;
    }else{
    telaAnterior = tela; return true;
    }
}

function setup() {  
  createCanvas(400, 600);
  p = perg1[0];
	pontoX[0] = getRndInteger(1,6);
	pontoY[0] = getRndInteger(5,19);    
	pontoX[1] = getRndInteger(7,13);
	pontoY[1] = getRndInteger(5,19); 
	pontoX[2] = getRndInteger(13,19);
	pontoY[2] = getRndInteger(5,19);  
}

function draw() {
  if (tela == 0) {
    telaMenu();
  }
  if (tela == 1) {
    telaInstruçoes();
  }
  if (tela == 2) {
    telaCreditos();
  }
  if (tela == 3) {
    telaJogo();
  }
  if(tela==4){
    telaGameover();
  }
}