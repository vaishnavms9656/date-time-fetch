option();
function dateTime() {
  let timezone = document.getElementById("country").value;
  try {
    fetch(`https://worldtimeapi.org/api/timezone/${timezone}`)
      .then((data) => data.json())
      .then((data) => {
        displaydata(data);
      });
  } catch {
    throw new Error("Cant Fetch timezone link");
  }
}
function option() {
  try {
    let select = document.getElementById("country");
    fetch(`https://worldtimeapi.org/api/timezone`)
      .then((data) => data.json())
      .then((data) => {
        for (country of data) {
          output = `<option class="fw-medium" value="${country}">${country}</option>`;
          select.innerHTML += output;
        }
      });
  } catch {
    (error) => console.log("Cannot select options");
  }
}
function displaydata(data) {
  try {
    let result = document.getElementById("result");
    const newdate = data.datetime
    result.innerHTML = `Date and Time is : ${newdate}`;
  } catch {
    (error) => console.log("Cannot Display date and time ", error);
  }
}
