const fs = require('fs');

function formatCurrency(value) {
    return `$${value.toLocaleString('en-US', { maximumFractionDigits: 0 })}`;
}

function formatPercentage(value) {
    return `${(value * 100).toFixed(1)}%`;
}

function calculateMetrics(data) {
    let revenue = 0;
    let expenses = 0;
    let salesTotal = 0;

    let assetsDebit = 0;
    let assetsCredit = 0;

    let liabilitiesCredit = 0;
    let liabilitiesDebit = 0;

    // Process the data
    data.forEach((entry) => {
        const { account_category, total_value, account_type, value_type } = entry;

        if (account_category === 'revenue') {
            revenue += total_value;
        }

        if (account_category === 'expense') {
            expenses += total_value;
        }

        if (account_category === 'assets') {
            if (['current', 'bank', 'current_accounts_receivable'].includes(account_type)) {
                if (value_type === 'debit') assetsDebit += total_value;
                if (value_type === 'credit') assetsCredit += total_value;
            }
        }

        if (account_category === 'liability') {
            if (['current', 'current_accounts_payable'].includes(account_type)) {
                if (value_type === 'credit') liabilitiesCredit += total_value;
                if (value_type === 'debit') liabilitiesDebit += total_value;
            }
        }

        if (account_type === 'sales' && value_type === 'debit') {
            salesTotal += total_value;
        }
    });

    // Calculate metrics
    const grossProfitMargin = salesTotal / revenue;
    const netProfitMargin = (revenue - expenses) / revenue;
    const assets = assetsDebit - assetsCredit;
    const liabilities = liabilitiesCredit - liabilitiesDebit;
    const workingCapitalRatio = assets / liabilities;

    return {
        revenue: formatCurrency(revenue),
        expenses: formatCurrency(expenses),
        grossProfitMargin: formatPercentage(grossProfitMargin),
        netProfitMargin: formatPercentage(netProfitMargin),
        workingCapitalRatio: formatPercentage(workingCapitalRatio),
    };
}

function main() {
    fs.readFile('./data.json', 'utf8', (err, data) => {
        if (err) {
            console.error(`Unable to read file: ${err.message}`);
        } else {
            try {
                const jsonData = JSON.parse(data).data;
                const metrics = calculateMetrics(jsonData);

                console.log('Metrics:');
                console.log(`Revenue: ${metrics.revenue}`);
                console.log(`Expenses: ${metrics.expenses}`);
                console.log(`Gross Profit Margin: ${metrics.grossProfitMargin}`);
                console.log(`Net Profit Margin: ${metrics.netProfitMargin}`);
                console.log(`Working Capital Ratio: ${metrics.workingCapitalRatio}`);
            } catch (parseError) {
                console.error(`Error parsing JSON: ${parseError.message}`);
            }
        }
    });
}

main();
