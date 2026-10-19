class FinishedUnit {
  constructor() {
    this.id = 0;
    this.name = null;
    this.image = null;
    this.class = null;
  }
}

function Randomizer(dlcHave, unitGenNum, gender, boostPersClass, PERSCLASSBIASNUM, sortType) {

  // Applying data from form to final profile output

  // Predone Alear

  const classPath = document.createElement("tr");

  // First cell — the image
  const unitCell = document.createElement("td");
  const unitImg = document.createElement("img");


  const unitName = document.createElement("h1");

  if (gender == "female") {
    unitImg.src = "images/FEE_Portraits/Portrait_alear_f_fe17.png";
    unitName.textContent = "F!Alear";
  } else if (gender == "male") {
    unitImg.src = "images/FEE_Portraits/Portrait_alear_m_fe17.png";
    unitName.textContent = "M!Alear";
  }



  unitCell.appendChild(unitImg);
  unitCell.appendChild(unitName);
  classPath.appendChild(unitCell);

  const randContainer = document.getElementById("rand-container");

  randContainer.innerHTML = "";   // clears out everything from the previous generation

  const tbody = document.createElement("tbody");
  randContainer.appendChild(tbody);

  /* 
   
  Start of Alear Randomizer!!!!!!!!!!
   
  */

  let validClassSet = [];

  //Gets the valid class list for Alear
  // all classes plus Divine Dragon

  if (boostPersClass == "100") {
    validClassSet.push("Divine Dragon");
  } else if (boostPersClass != "0") {
    for (let j = 0; j < PERSCLASSBIASNUM; j++) {
      validClassSet.push("Divine Dragon");
    }

  }

  if (boostPersClass != "100") {
    for (let i = 0; i < classes.length; i++) {
      validClassSet.push(classes[i].className);

    }
    if (dlcHave == "true") {
      for (let i = 0; i < dlcClasses.length; i++) {
        validClassSet.push(dlcClasses[i].className);
      }
    }

    if (!validClassSet.includes("Divine Dragon")) {

      validClassSet.push("Divine Dragon");
    }
  }




  var randNum2 = Math.floor(Math.random() * validClassSet.length);

  let classDisplayed = validClassSet[randNum2];

  const finalClassCell = document.createElement("td");
  const className = document.createElement("h1");
  className.textContent = classDisplayed;
  finalClassCell.appendChild(className);
  classPath.appendChild(finalClassCell);
  //End of class section

  classPath.dataset.index = 0;
  tbody.appendChild(classPath);

  // End of Alear finish  


  /* 
   
  Start of procedural randomizer!!!!!!!!!!
   
  */

  // Adds Dlc characters to the units array.

  let validUnitsSet = [];

  for (k = 0; k < units.length; k++) {
    validUnitsSet.push(units[k]);
  }

  if (dlcHave == "true") {
    for (k = 0; k < dlcUnits.length; k++) {
      validUnitsSet.push(dlcUnits[k]);
    }

  }

  // Makes sure there are no duplicates
  const used = [];


  let finishedRandArray = [];

  for (let i = 0; i < unitGenNum; i++) {

    // Duplicate Prevention Logic
    var invalid = true;
    var randNum = Math.floor(Math.random() * validUnitsSet.length);


    if (used.includes(randNum)) {

      while (invalid) {
        randNum = Math.floor(Math.random() * validUnitsSet.length);
        if (!used.includes(randNum)) {
          invalid = false;
        }
      }
    }
    // Adds to page
    used.push(randNum);

    const unit = validUnitsSet[randNum];

    let savedIndex = randNum;



    // Second cell — the class




    let validClassSet = [];

    //Gets the valid class list for each unit which is 
    // all classes plus unique one


    let uniqueClassHaver = false;

    // Checks if boost class is active if so biases selection pool
    for (let i = 0; i < uniqueClasses.length; i++) {
      if (unit.unitName == uniqueClasses[i].uniqueClass) {
        uniqueClassHaver = true;
        if (boostPersClass != 0 && boostPersClass != 100) {
          for (let j = 0; j < PERSCLASSBIASNUM; j++) {
            validClassSet.push(uniqueClasses[i].className);
          }
        } else {
          validClassSet.push(uniqueClasses[i].className);
        }
      }
    }


    if (uniqueClassHaver && boostPersClass != 100) {
      for (let i = 0; i < classes.length; i++) {
        validClassSet.push(classes[i].className);
      }
    } else if (!uniqueClassHaver) {
      for (let i = 0; i < classes.length; i++) {
        validClassSet.push(classes[i].className);
      }
    }



    //Randomization logic

    var randNum2 = Math.floor(Math.random() * validClassSet.length);

    let classDisplayed = validClassSet[randNum2];

    const finishedRandUnit = new FinishedUnit();
    finishedRandUnit.name = unit.unitName;
    finishedRandUnit.id = unit.id;
    finishedRandUnit.image = unit.unitImg;
    finishedRandUnit.class = classDisplayed;

    finishedRandArray.push(finishedRandUnit);

  }


  if (sortType == "ABC") {
    finishedRandArray.sort((a, b) => a.name.localeCompare(b.name));
  } else {
    finishedRandArray.sort((a, b) => Number(a.id) - Number(b.id));
  }




  for (let i = 0; i < finishedRandArray.length; i++) {


    const classPath = document.createElement("tr");

    // First cell — the image
    const unitCell = document.createElement("td");
    const unitImg = document.createElement("img");
    unitImg.src = finishedRandArray[i].image;

    const unitName = document.createElement("h1");
    unitName.textContent = finishedRandArray[i].name;

    unitCell.appendChild(unitImg);
    unitCell.appendChild(unitName);
    classPath.appendChild(unitCell);

    //Second Cell Class
    const finalClassCell = document.createElement("td");
    const className = document.createElement("h1");
    className.textContent = finishedRandArray[i].class;
    finalClassCell.appendChild(className);
    classPath.appendChild(finalClassCell);

    //End of class section

    classPath.dataset.index = finishedRandArray[i].id;
    tbody.appendChild(classPath);


  }

}

