const generateResponse = () => {


  // let input = document.getElementById("input").value;
  let input = document.querySelector("#input").value;

  if (!input) return;

  const url = "https://api.openai.com/v1/completions";

  const options = {
    "model": "text-davinci-003",
    "prompt": input,
    "max_tokens": 700,
    "temperature": 0.7,
    "top_p": 1,
    "n": 1,
    "stream": false,
    "stop": ""
  };

  const headers = {
    "content-Type": "application/json",
    "authorization": " Bearer --"
  }

  document.getElementById("wait").style.display = "";


  axios.post(url, options, { headers: headers }).then(response => {
    document.querySelector("#wait").style.display = "none";
    document.querySelector("#input").value = "";

    document.querySelector("#output").insertAdjacentHTML("afterbegin", `
    <br/>
    <div class="question"> ${input} </div>
    <div> ${response.data.choices[0].text} </div>`);

    console.log(response.data.choices[0].text)
  }).catch(error => console.log(error))
}