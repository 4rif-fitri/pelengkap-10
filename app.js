document.addEventListener("DOMContentLoaded", function () {
	let pilihanContainer = document.querySelector(".pilihanContainer");
	let pilihans = document.querySelectorAll(".pilihan");
	let pilihanTxt = document.querySelectorAll(".pilihanTxt");
	let cencelBtn = document.querySelector(".cencelBtn");
	let popBack = document.querySelector(".popBack");
	let popBtn = document.querySelector(".popBtn");
	let petakJwp = document.querySelector(".jwp");
	let boxJwp = document.querySelector(".boxJwp");
	let buttonCheck = document.querySelector(".buttonCheck");
	let boxNum1 = document.getElementById("num1");
	let boxNum2 = document.getElementById("num2");
	let boxNum3 = document.getElementById("num3");
  	let num1, num2, num3;
   let randomPoss;
	let popTxt = document.querySelector(".popTxt p");
	let popBtnTxt = document.querySelector(".popBtnTxt");
	let isBetul = false
	let popContent = document.querySelector(".popContent");


  petakJwp.addEventListener("click", (e) => {
    pilihanContainer.classList.remove("hide");
    e.stopPropagation();
  });

  pilihans.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      pilihanContainer.classList.add("hide");

		boxJwp.textContent = e.target.textContent;
		buttonCheck.classList.remove("hide");
    });
  });

  cencelBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    pilihanContainer.classList.add("hide");
  });

  document.addEventListener("click", e => {
	    e.stopPropagation();
      pilihanContainer.classList.add("hide");
  })

  buttonCheck.addEventListener("click", e => {
	let pilihanUser = boxJwp.textContent
	pilihanUser = parseInt(pilihanUser);
	// console.log(pilihanUser);
	if(num2 === pilihanUser){
		console.log("betul");
		popTxt.textContent = "Betul!"
		popBtnTxt.textContent = "Next!"
		popContent.style.backgroundColor = "lightgreen";
		isBetul = true
		popBack.classList.remove("hide")
	}else{
		popTxt.textContent = "Salah!";
      popBtnTxt.textContent = "Cuba Lagi!";
		popContent.style.backgroundColor = "lightcoral";
		isBetul = false;
		popBack.classList.remove("hide");
	}
	
  })

  popBtn.addEventListener("click", e => {
	if(isBetul){
		init();
	}else{

	}
	boxJwp.textContent = null;
	buttonCheck.classList.add("hide")
	popBack.classList.add("hide");
  })


    function randomPosision() {
      return ~~(Math.random() * 4);
    }

    function random() {
      return ~~(Math.random() * 9 + 1);
    }
    function init() {
      num1 = random();
      num3 = 10;
      num2 = num3 - num1;
      randomPoss = randomPosision();
		
		boxNum1.textContent = num1;
		boxNum3.textContent = num3;

		pilihanTxt.forEach((btn,index) => {

      	if (index == randomPoss){
      		btn.textContent = num2;
      	}else{
				let num = random();

				if (num2 == num) 	btn.textContent = random()
				else 					btn.textContent = num;
      	}

      });

    }
    init();
});
