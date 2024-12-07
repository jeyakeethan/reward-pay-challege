
# RewardPay Finance Metrics Calculator

## Overview

This program calculates key financial metrics from a provided dataset (`data.json`). It processes the data and prints the results in a readable format. The metrics include:

- **Revenue**
- **Expenses**
- **Gross Profit Margin**
- **Net Profit Margin**
- **Working Capital Ratio**

## How to Run

### Prerequisites
Ensure you have the following installed:
- Node.js (v14.x or later)
- npm (Node Package Manager)

### Steps to Run
1. Clone this repository:
   ```bash
   git clone https://github.com/jeyakeethan/reward-pay-challege.git
   cd reward-pay-challege
   ```

2. Install the required dependencies:
   ```bash
   npm install
   ```

3. Start the program:
   ```bash
   npm start
   ```

4. The output will display the calculated metrics in the terminal.

### Example Output
```plaintext
> reward-pay-challege@1.0.0 start
> node program.js

Metrics:
Revenue: $32,431
Expenses: $36,530
Gross Profit Margin: 0.0%
Net Profit Margin: -12.6%
Working Capital Ratio: 118.8%
```

## Code Structure

- **`program.js`**: The main file containing logic to parse data and calculate metrics.
- **`data.json`**: The dataset used for calculations.
- **`package.json`**: Defines project metadata and dependencies.

## Metrics Calculation

- **Revenue**: Sum of all `total_value` fields with `account_category: revenue`.
- **Expenses**: Sum of all `total_value` fields with `account_category: expense`.
- **Gross Profit Margin**: Calculated as:
  ```math
  (Sales Revenue - Cost of Goods Sold) / Revenue * 100
  ```
- **Net Profit Margin**: Calculated as:
  ```math
  (Revenue - Expenses) / Revenue * 100
  ```
- **Working Capital Ratio**: Calculated as:
  ```math
  Total Current Assets / Total Current Liabilities
  ```

Refer to the comments in `program.js` for detailed implementation.

## Formatting

- **Currency**: Displayed in the format `$xx,xxx`.
- **Percentages**: Displayed with one decimal point, e.g., `12.6%`.

## Dependencies

This project uses:
- Node.js core modules like `fs` for file handling.

Install dependencies with:
```bash
npm install
```

## Contributing

Feel free to fork this repository, make your changes, and submit a pull request.

## License

Open license.

## Author

Developed by Jeyakeethan.
