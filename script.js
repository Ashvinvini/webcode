
function handleButtonClick() {
  var nameInput = document.getElementById("name");
  var name = nameInput.value;
  fetchData(name)
}

const fetchData = async (name) => {
  try {
      const response = await fetch(`https://api.nationalize.io/?name=${name}`)
      const data = await response.json()
      let country = data.country
      let sortedCountry = country.sort((a, b) => b.probability - a.probability);
      const topTwo = sortedCountry.slice(0, 2)
      console.log("Top Two Countries", topTwo)
  } catch (error) {
      console.log("error", error)
  }
}
