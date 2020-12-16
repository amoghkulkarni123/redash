import React from "react";
import DatePicker from "antd/lib/date-picker";
import { clientConfig } from "@/services/auth";
// @ts-expect-error ts-migrate(6133) FIXME: 'Moment' is declared but its value is never read.
import { Moment } from "@/components/proptypes";

type Props = {
    // @ts-expect-error ts-migrate(2749) FIXME: 'Moment' refers to a value, but is being used as a... Remove this comment to see the full error message
    defaultValue?: Moment;
    // @ts-expect-error ts-migrate(2749) FIXME: 'Moment' refers to a value, but is being used as a... Remove this comment to see the full error message
    value?: Moment;
    withSeconds?: boolean;
    onSelect?: (...args: any[]) => any;
    className?: string;
};

const DateTimeInput = React.forwardRef<any, Props>(({ defaultValue, value, withSeconds, onSelect, className, ...props }, ref) => {
  // @ts-expect-error ts-migrate(2339) FIXME: Property 'dateFormat' does not exist on type '{}'.
  const format = (clientConfig.dateFormat || "YYYY-MM-DD") + (withSeconds ? " HH:mm:ss" : " HH:mm");
  const additionalAttributes = {};
  if (defaultValue && defaultValue.isValid()) {
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'defaultValue' does not exist on type '{}... Remove this comment to see the full error message
    additionalAttributes.defaultValue = defaultValue;
  }
  if (value === null || (value && value.isValid())) {
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'value' does not exist on type '{}'.
    additionalAttributes.value = value;
  }
  return (
    <DatePicker
      ref={ref}
      className={className}
      showTime
      {...additionalAttributes}
      format={format}
      placeholder="Select Date and Time"
      onChange={onSelect}
      {...props}
    />
  );
});

DateTimeInput.defaultProps = {
  defaultValue: null,
  value: undefined,
  withSeconds: false,
  onSelect: () => {},
  className: "",
};

export default DateTimeInput;