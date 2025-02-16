function convertCGPA() {
    let cgpa = parseFloat(document.getElementById("cgpa").value);
    if (isNaN(cgpa) || cgpa < 0 || cgpa > 10) {
        document.getElementById("result").innerText = "Please enter a valid CGPA between 0 and 10.";
        return;
    }
    let gpa = (cgpa / 10) * 4; // Basic conversion formula
    document.getElementById("result").innerText = `Equivalent GPA: ${gpa.toFixed(2)} / 4.0`;
}
