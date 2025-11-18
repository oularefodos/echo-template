declare module "@react-native-community/datetimepicker" {
	import type { Component } from "react";
	import type { ViewProps } from "react-native";

	export interface DateTimePickerEvent {
		type: string;
		nativeEvent: {
			timestamp?: number;
			utcOffset?: number;
		};
	}

	export type IOSMode = "date" | "time" | "datetime" | "countdown";
	export type AndroidMode = "date" | "time";
	export type WindowsMode = "date" | "time";

	export type DateTimePickerMode = IOSMode | AndroidMode | WindowsMode;

	export interface BaseProps extends ViewProps {
		value: Date;
		onChange?: (event: DateTimePickerEvent, date?: Date) => void;
		maximumDate?: Date;
		minimumDate?: Date;
		timeZoneOffsetInMinutes?: number;
		timeZoneOffsetInSeconds?: number;
		testID?: string;
		disabled?: boolean;
	}

	export interface IOSProps extends BaseProps {
		mode?: IOSMode;
		display?: "default" | "spinner" | "compact" | "inline";
		minuteInterval?: 1 | 2 | 3 | 4 | 5 | 6 | 10 | 12 | 15 | 20 | 30;
		locale?: string;
		is24Hour?: boolean;
		textColor?: string;
	}

	export interface AndroidProps extends BaseProps {
		mode?: AndroidMode;
		display?: "default" | "spinner" | "calendar" | "clock";
		is24Hour?: boolean;
		firstDayOfWeek?: number;
		minuteInterval?: number;
	}

	export interface WindowsProps extends BaseProps {
		mode?: WindowsMode;
		is24Hour?: boolean;
		firstDayOfWeek?: number;
		dateFormat?: "day" | "dayofweek" | "longdate" | "shortdate";
		timeFormat?: "longtime" | "shorttime";
		placeholderText?: string;
	}

	export type DateTimePickerProps = IOSProps | AndroidProps | WindowsProps;

	export default class DateTimePicker extends Component<DateTimePickerProps> {}
}
