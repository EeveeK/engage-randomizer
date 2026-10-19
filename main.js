
//Const Vars

let savedDlcHave;
let savedUnitGenNum;
let savedGender;
let savedBoostPersClass;
let savedPersClassBiasNum;
let savedSortType;

// Modal Code



const modal = document.getElementById("modal");
// comment/uncomment the line below as needed to show/hide the modal on page load
modal.showModal();



function closeModal() {
  modal.close();
}

const closeButton = document.getElementById("x-button");

closeButton.addEventListener("click", closeModal);

function closeModal() {
  modal.close();
}

/* The updateProfile function will be run automatically after the response is received from the server. */
/* WRITE THE CODE THAT YOU NEED TO UPDATE THE PROFILE CARD INSIDE THIS FUNCTION. */


function updateProfile(data) {
  // The data variable will be an object with the submitted user profile information.
  console.log(data);

  // Getting variables from data
  //Form Data

  const gender = data["gender"];

  let unitGenNum = data["numUnit"];

  const dlcHave = data["dlc"];

  const sortType = data["sort"];

  if (dlcHave == "true") {
    if (unitGenNum > units.length + dlcUnits.length) {
      unitGenNum = units.length + dlcUnits.length;
    }
  } else {
    if (unitGenNum > units.length) {
      unitGenNum = units.length;
    }
  }


  //const btnValue = document.getElementById("Reroll").value;


  const boostPersClass = data["uniq"];
  console.log("persclass:" + boostPersClass);

  // -----------------------------------MATH FOR PERSONAL CLASS BIAS--------------------------------------------

  let N;
  if (dlcHave == "true") {
    N = classes.length + dlcClasses.length;
  } else {
    N = classes.length;
  }

  const s = boostPersClass / 100; //Percentage

  let PERSCLASSBIASNUM;
  if (boostPersClass != "100") {
    PERSCLASSBIASNUM = Math.round(N * (s / (1 - s)));
  }

  savedDlcHave = dlcHave;
  savedUnitGenNum = unitGenNum;
  savedGender = gender;
  savedBoostPersClass = boostPersClass;
  savedPersClassBiasNum = PERSCLASSBIASNUM;


  Randomizer(dlcHave, unitGenNum, gender, boostPersClass, PERSCLASSBIASNUM, sortType);

}

function Reroll() {

  if (savedDlcHave != null) {
    Randomizer(savedDlcHave, savedUnitGenNum, savedGender, savedBoostPersClass, savedPersClassBiasNum, savedSortType);
  } else {
    alert("Please Choose Settings Before Rolling");
  }
}


/* --- DO NOT EDIT ANYTHING BELOW THIS LINE --- */

/* This section of code handles form submission to the server and waits for the response. */

const profileForm = document.getElementById("profile-form");

profileForm.addEventListener("submit", async () => {
  const data = await handleForm(profileForm);
  updateProfile(data);
  modal.close();
});

