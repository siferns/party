import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";

function CustomDatePicker() {
  const [date, setDate] = useState(new Date());

  return (
    <DatePicker
      selected={date}
      onChange={(date) => setDate(date)}
      dateFormat="dd/MM/yyyy"
      className="w-full pl-3 py-1.5 rounded-sm border border-gray-600 text-sm font-semibold"
    />
  );
}

export default CustomDatePicker;