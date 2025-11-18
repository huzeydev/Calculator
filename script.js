  if (this.id === "clear") {
    currentInput = "";
    display.value = "";
    return;
  }

  if (this.id === "equals") {
    try {
      currentInput = eval(currentInput).toString();
      display.value = currentInput;
    } catch (e) {
      display.value = "Error";
      currentInput = "";
    }
    return;
  }

  currentInput += value;
  display.value = currentInput;
});
