
document.getElementById('clearAll').addEventListener('click', function () {
    document.getElementById('mortgage-form').reset();
    document.getElementById('results').innerHTML = '';
});

function calculateRepayment() {
    const loanAmount = parseFloat(document.getElementById('loanAmount').value);
    const loanTerm = parseInt(document.getElementById('loanTerm').value);
    const interestRate = parseFloat(document.getElementById('loanInterest').value);
    const mortgageType = document.querySelector('input[name="mortgageType"]:checked') ? document.querySelector('input[name="mortgageType"]:checked').value : null;

    if (isNaN(loanAmount) || isNaN(loanTerm) || isNaN(interestRate) || !mortgageType) {
        alert("Please complete all the fields to calculate repayments.");
        return;
    }

    // Convert annual interest rate to monthly and term to months
    const monthlyInterestRate = (interestRate / 100) / 12;
    const totalMonths = loanTerm * 12;

    let monthlyRepayment;

    if (mortgageType === 'repayment') {
        if (monthlyInterestRate > 0) {
            monthlyRepayment = loanAmount * (monthlyInterestRate * Math.pow(1 + monthlyInterestRate, totalMonths)) / (Math.pow(1 + monthlyInterestRate, totalMonths) - 1);
        } else {
            monthlyRepayment = loanAmount / totalMonths;
        }
    } else if (mortgageType === 'interestOnly') {
        monthlyRepayment = loanAmount * monthlyInterestRate;
    }

    if (monthlyRepayment) {
        document.getElementById('results').innerHTML = `
            <h3>Monthly Repayment: £${monthlyRepayment.toFixed(2)}</h3>
            <p>Total Repayment over ${loanTerm} years: £${(monthlyRepayment * totalMonths).toFixed(2)}</p>
        `;
    } else {
        document.getElementById('results').innerHTML = `<h3>Monthly Repayment: £0.00</h3>`;
    }
}

































// function calculateRepayment() {

//     const mortgageAmount = parseFloat(document.getElementById('loanAmount').value);
//     const mortgageTerm = parseFloat(document.getElementById('loanTerm').value);
//     const loanInterest = parseFloat(document.getElementById('loanInterest').value) / 100;
//     const mortgageType = document.querySelector('input[name="mortgageType"]:checked').value;


//     let resultText = "";

//     if(mortgageType === 'repayment') {
//         const monthlyInterestRate = loanInterest / 12;
//         const numberOfPayments = mortgageTerm * 12;
//         const monthlyRepayment = (mortgageAmount * monthlyInterestRate) / 
//             (1 - Math.pow(1 + monthlyInterestRate, -numberOfPayments));

//         const totalRepayment = monthlyRepayment * numberOfPayments;
//         const totalInterest = totalRepayment - mortgageAmount;

//         resultText = `
//             Monthly Repayment: £${monthlyRepayment.toFixed(2)}<br>
//             Total Repayment: £${totalRepayment.toFixed(2)}<br>
//             Total Interest Paid: £${totalInterest.toFixed(2)}
//         `;
//     } else if(mortgageType === 'interestOnly') {
//         const yearlyInterest = mortgageAmount * loanInterest;
//         const totalInterest = yearlyInterest * mortgageTerm;
//         const totalRepayment = mortgageAmount + totalInterest;

//         resultText = `
//             Yearly Interest Payment: £${yearlyInterest.toFixed(2)}<br>
//             Total Repayment: £${totalRepayment.toFixed(2)}<br>
//             Total Interest Paid: £${totalInterest.toFixed(2)}
//         `;
//     }

//     document.getElementById('results').innerHTML = resultText;
// }




























