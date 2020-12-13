// Import stylesheets
import "./style.css";

// Write TypeScript code!

function changeCase(str: string): string {
  if (str.length <= 1) {
    return str;
  }

  if (str.charAt(0) == "-") {
    return str.charAt(1).toUpperCase() + changeCase(str.substr(2));
  }

  return str.charAt(0) + changeCase(str.substr(1));
}

document.getElementById("app").innerHTML = changeCase("abc-def-ghi-jkl");
