function maskEmail(email, maskChar = "*") {
  const atIndex = email.indexOf("@");
  if (atIndex === -1) return email;
  const username = email.slice(0, atIndex);
  const domain = email.slice(atIndex);      
  if (username.length <= 2) {
    return username + domain;
  }
  const firstChar = username[0];
  const lastChar = username[username.length - 1];
  const maskedMiddle = maskChar.repeat(username.length - 2);

  return firstChar + maskedMiddle + lastChar + domain;
}

const email = "info@test.dev"

console.log(maskEmail(email));