import jsonfile from "jsonfile";
import {revenueCalculation, expensesCalculation, grossProfitMarginCalculation} from "./calculations"

// Path for the data file
const filePath = "./data/data.json";

// Synchronous reading raw data from the json file, avoiding undefined
const jsonData = jsonfile.readFileSync(filePath);

// Fetching the 'data' section from the raw data
const data = jsonData.data;

// Calculating the revenue
const revenue = revenueCalculation(data);

// Calculating the expenses
const expenses = expensesCalculation(data);

// Calculating the gross profit margin
const grossProfitMargin = grossProfitMarginCalculation(data, revenue);
console.log(grossProfitMargin);


