function makeAlert() {
  alert("hellow mama ki khobor");
}
function makeConfirm() {
  const result = confirm("pres ok / cancel");
  if (result === true) {
    alert("mama okay press korco!!");
  } else {
    alert("no press korco keno");
  }
}
function makePrompt() {
  const prompting = prompt();
  if (prompting === "Yes") {
    alert("its working mama");
  } else {
    alert("not working your prompting");
  }
}
