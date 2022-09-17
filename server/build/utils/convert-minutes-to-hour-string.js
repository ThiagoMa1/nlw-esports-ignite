"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertMinutesToHourString = void 0;
const convertMinutesToHourString = function (minutesAmount) {
    const hours = Math.floor(minutesAmount / 60);
    const minutes = minutesAmount % 60;
    return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}`;
};
exports.convertMinutesToHourString = convertMinutesToHourString;
