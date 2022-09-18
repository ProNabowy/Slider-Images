// ================================================Create Array to includs imgs
let imges = Array.from(document.querySelectorAll("img"));


// ================================================ Create length of Imges
const imgesLength = imges.length;

// ================================================ Loop For Imges To Set attrbuite
for (let i = 0; i < imgesLength; i++) {
    imges[i].setAttribute("id" , (i + 1));
};


// ================================================ Create Number Slider
const controlNumbers = document.querySelector(".control-numbers");

// ================================================ Add Spans to Control Numbers

for (let i = 1; i <= imgesLength; i++) {
    const span = document.createElement("span");
    span.setAttribute("data-id" , i);
    span.appendChild(document.createTextNode(i));
    
    
// ================================================ Append Span To ContrloNumber
    controlNumbers.appendChild(span);
};


// ================================================ Create Array For includ control Number Spans

const arrOfSpans = Array.from(controlNumbers.children);


// ================================================ Create Index Variable To Control Of All Functions

let index = 1 ;


// ================================================ Select Previous and Next Button and they Functionalty

const nextButton = document.querySelector(".next");
const prevButton = document.querySelector(".previous");

// ================================================ Functionalty Of next and Pervious Buttons

nextButton.onclick = nextIndex;
prevButton.onclick = prevIndex;

function nextIndex() {
    if(nextButton.classList.contains("disabled")) {
        
        return false;
        
    }else {

        index++

        check();

    }
}

function prevIndex() {
    if(prevButton.classList.contains("disabled")) {
        
        return false;
        
    }else {

        index--

        check();

    }
};


// ================================================ Create Function To Check For The Index Eelemnt

function check() {
    // ================================================ Select slide-number
    const slideNumber = document.querySelector(".slide-number");
    slideNumber.innerHTML = `Slide #${index} Of ${imgesLength}`;

        // ================================================ Remove All Active Class
        removeActiveClass();

        // ================================================ add Active class Array Of Index
        
        imges[index - 1].classList.add("active-img");

        // ================================================ add Active class Controls Number Of Index

        arrOfSpans[index - 1].classList.add("active");


        // ================================================ Check If index = 1 to add Disapled class
        if(index == 1) {

            prevButton.classList.add("disabled");

        }else {

            prevButton.classList.remove("disabled");

        }

        // ================================================ Check If index = last one of Array of Imgs to add Disapled class
        if(index == imgesLength) {

            nextButton.classList.add("disabled");

        }else {

            nextButton.classList.remove("disabled");

        }
};
check();

    // ================================================ Remover All Active Class

function removeActiveClass() {
        // ================================================ Remover All Active Class From imgs
    imges.forEach(img => {
        img.classList.remove("active-img");
    });


        // ================================================ Remover All Active Class From controlNumbers

        arrOfSpans.forEach( span => {
            span.classList.remove("active");
        });
    
};

        // ================================================ Create Function To Active Controls Numbers

function acticeControls() {

    // Loop For Array Of Spans To Set Index Controls

    for (let i = 0; i < arrOfSpans.length; i++) {

        arrOfSpans[i].onclick = function() {

            index = parseInt(arrOfSpans[i].getAttribute("data-id"));
            
            check();

        }
    }
};

acticeControls();
