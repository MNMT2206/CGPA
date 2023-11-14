document.getElementById("calculate-btn").addEventListener("click", function () {
    const gpas = [];
    for (let i = 1; i <= 6; i++) {
        const gpa = parseFloat(document.getElementById("semester" + i).value);
        if (!isNaN(gpa)) {
            gpas.push(gpa);
        }
    }
    
    if (gpas.length === 6) {
        const credits = [19, 18, 22, 23, 23,19];  // Credits for each semester
        const totalQualityPoints = gpas.reduce((sum, gpa, index) => sum + gpa * credits[index], 0);
        const totalCreditsSum = credits.reduce((sum, credit) => sum + credit, 0);
        const cgpa = totalQualityPoints / totalCreditsSum;
        
        document.getElementById("result").innerHTML = "CGPA: " + cgpa.toFixed(2);
    } else {
        document.getElementById("result").innerHTML = "Please provide all GPAs.";
    }
});
