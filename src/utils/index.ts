const handlePreventKeys = (event: any, typeValidation: string) => {
  const pattNum = typeValidation === "number"
    ? new RegExp("^0$|^[1-9]{1}[\\d]{0,}$") : new RegExp("^s*([a-zA-Z ]+)*$");
  if (!pattNum.test(event.key)) {
    event.preventDefault();
    return false;
  }
};

export { handlePreventKeys };