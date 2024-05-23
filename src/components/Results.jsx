import React from "react";
import { calculateInvestmentResults, formatter } from "../util/investment";

const Results = ({ input }) => {
  const data = calculateInvestmentResults(input);
  const initialInvestment =
    data[0].valueEndOfYear - data[0].interest - data[0].annualInvestment;

  return (
    <>
      <table id="result">
        <thead>
          <tr>
            <th>Year</th>
            <th>investment</th>
            <th>interest</th>
            <th>total interest</th>
            <th>invested capital</th>
          </tr>
        </thead>
        <tbody>
          {data.map((yearData, i) => {
            const totalInvestment =
              yearData.valueEndOfYear -
              yearData.annualInvestment * yearData.year -
              initialInvestment;

            const amountInvested = yearData.valueEndOfYear - totalInvestment;

            return (
              <tr key={yearData.year}>
                <td>{yearData.year}</td>
                <td>{formatter.format(yearData.valueEndOfYear)}</td>
                <td>{formatter.format(yearData.interest)}</td>
                <td>{formatter.format(totalInvestment)}</td>
                <td>{formatter.format(amountInvested)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default Results;
