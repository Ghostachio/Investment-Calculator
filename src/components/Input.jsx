import { useState } from "react";

const Input = ({ initial, annual, expected, duration, change }) => {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label htmlFor="Initial">Initial investment</label>
          <input
            type="number"
            name="InitialInvestment"
            id="Initial"
            value={initial}
            required
            onChange={(e) => change("initialInvestment", e.target.value)}
          />
        </p>
        <p>
          <label htmlFor="annual">Annual investment</label>
          <input
            type="number"
            name="annualInvestment"
            id="annual"
            value={annual}
            required
            onChange={(e) => change("annualInvestment", e.target.value)}
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="expected">expected Return</label>
          <input
            type="number"
            name="expectedReturn"
            id="expected"
            value={expected}
            required
            onChange={(e) => change("expectedReturn", e.target.value)}
          />
        </p>
        <p>
          <label htmlFor="Duration">Duration</label>
          <input
            type="number"
            name="duration"
            id="duration"
            value={duration}
            required
            min={0}
            max={100}
            onChange={(e) => change("duration", e.target.value)}
          />
        </p>
      </div>
    </section>
  );
};

export default Input;
