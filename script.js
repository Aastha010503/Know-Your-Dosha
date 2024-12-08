// JavaScript to handle quiz submission and calculate the dominant dosha

const doshaCategories = {
    Vata: [
      "Dry", "Rough", "Cold", "Dark", // Skin
      "Thin", "Dry", "Straight", "Soft", // Hair
      "Gray", "Small", "Dull", "Light Brown", // Eyes
      "Grayish", "Dry", "Brittle", "Tendency to Bite Nails" // Nails
    ],
    Pitta: [
      "Freckled", "Moist", "Warm", "Reddish", // Skin
      "Brown", "Black", "Thick", "Silky", // Hair
      "Green", "Yellow Sclera", "Almond Shaped", "Blue", // Eyes
      "Clear", "Pink", "Pliable", "Well Formed" // Nails
    ],
    Kapha: [
      "Soft", "Oily", "Pale", "Clear", // Skin
      "Jet Black", "Oily", "Wavy", "Shiny", // Hair
      "Black", "Thick Lashes", "Big", "Blue", // Eyes
      "Pale", "Strong", "Square", "Even" // Nails
    ]
  };

// Function to calculate the dominant dosha
function calculateDominantDosha(selectedOptions) {
    let scores = { Vata: 0, Pitta: 0, Kapha: 0 };
  
    console.log("Selected options:", selectedOptions);  // Debugging
  
    // Increment dosha scores based on selected options
    selectedOptions.forEach(option => {
      if (doshaCategories.Vata.includes(option)) {
        scores.Vata++;
        console.log(`Vata score increased for: ${option}`);
      }
      if (doshaCategories.Pitta.includes(option)) {
        scores.Pitta++;
        console.log(`Pitta score increased for: ${option}`);
      }
      if (doshaCategories.Kapha.includes(option)) {
        scores.Kapha++;
        console.log(`Kapha score increased for: ${option}`);
      }
    });
  
    console.log("Scores:", scores);  // Debugging
  
    // Find the maximum score
    const maxScore = Math.max(scores.Vata, scores.Pitta, scores.Kapha);
  
    // Find the doshas that have the maximum score
    const dominantDoshas = Object.keys(scores).filter(dosha => scores[dosha] === maxScore);
  
    // Handle tie scenario by displaying multiple doshas if there is a tie
    if (dominantDoshas.length === 1) {
      return `Your dominant dosha is: ${dominantDoshas[0]}`;
    } else {
      return `Your dominant doshas are: ${dominantDoshas.join(" and ")}`;
    }
}

// Event listener for the Submit button
document.getElementById("submitQuiz").addEventListener("click", () => {
    // Get all selected options
    const selectedOptions = Array.from(document.querySelectorAll("input[type='checkbox']:checked")).map(input => input.value);
  
    // Validate that at least one option is selected
    if (selectedOptions.length === 0) {
      alert("Please select at least one option!");
      return;
    }
  
    // Calculate the dominant dosha
    const resultText = calculateDominantDosha(selectedOptions);
  
    // Display the result on the web page
    const resultContainer = document.querySelector(".result");
    resultContainer.innerHTML = `<h2>${resultText}</h2>`;
    
    // Ensure the result container is visible
    resultContainer.style.display = "block"; // This will make it visible
});

