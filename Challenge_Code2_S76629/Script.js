// -- AI ASSISTED CODE START --
// Logic for the eligibility check and DOM manipulation was assisted by AI tool (ChatGPT)
// -- AI ASSISTED CODE END --

// Define Multi-Dimensional Array studentData
// Format: [Name (String), Current GPA (Number), Credit Hours (Number)]
const studentData = [
    ["Ali Bin Ahmad", 3.75, 15],
    ["Bala A/L Muthu", 3.40, 12],
    ["Siti Nurhaliza", 4.00, 18],
    ["Wong Mei Ling", 3.50, 14],
    ["David Lee", 2.95, 10]
];

// Function to measure Dean's List eligibility
function checkEligibility(gpa) {
    return gpa >= 3.50 ? "Dean's List Eligible" : "Not Dean's List Eligible";
}

// Function to generate the output for all students
function generateResults() {
    let resultsHTML = '';

    studentData.forEach(student => {
        resultsHTML += `
            <div>
                <b>Name:</b> ${student[0]}<br>
                <b>Current GPA:</b> ${student[1].toFixed(2)}<br>
                <b>Credit Hours:</b> ${student[2]}<br>
                <b>Status:</b> ${checkEligibility(student[1])}<br>
                <hr style='border-top: 1px dotted #ccc;'>
            </div>
        `;
    });

    document.getElementById('student-results').innerHTML = resultsHTML;
}

// Event listener for the button click
document.getElementById('check-eligibility-btn').addEventListener('click', function() {
    // Get the input values from the form
    const name = document.getElementById('name').value;
    const creditHours = document.getElementById('credit-hours').value;
    const currentGpa = parseFloat(document.getElementById('current-gpa').value);

    // Check if all fields are filled
    if (!name || !creditHours || !currentGpa) {
        alert("Please fill in all fields.");
        return;
    }

    // Check eligibility
    const status = checkEligibility(currentGpa);

    // Add the new entry to the studentData array
    studentData.push([name, currentGpa, creditHours]);

    // Display the result in the output box
    const resultHTML = `
        <div>
            <b>Name:</b> ${name}<br>
            <b>Credit Hours:</b> ${creditHours}<br>
            <b>Current GPA:</b> ${currentGpa.toFixed(2)}<br>
            <b>Status:</b> ${status}<br>
        </div>
    `;
    document.getElementById('student-results').innerHTML = resultHTML;

    // Re-generate the full list
    generateResults();

    // Clear the form
    document.getElementById('student-form').reset();
});

// Call the function to generate results on page load
generateResults();
