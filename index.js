const test = (string) => {
  if(typeof string !== 'string'){
    throw{
      new TypeError('Input Error: Need String');
    }
  }

  return string.replace(/\s/g, "");
}
