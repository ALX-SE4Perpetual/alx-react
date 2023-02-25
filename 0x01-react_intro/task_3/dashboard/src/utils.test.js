import React from 'react';
import { getFullYear, getFooterCopy, getLatestNotification } from './utils';
import { act } from "react-dom/test-utils";

// testing to check that getFullYear returns correct year
act('getFullYear returns correct year', () => {
    expect(getFullYear()).toBe(2023);
});

// testing to check that getFooterCopy returns correct string when true
act('getFooterCopy return correct string if true', () => {
    expect(getFooterCopy(true)).toBe('Holberton School');
});

// testing to check that getFooterCopy returns correct string when false
act('getFooterCopy return correct string if false', () => {
    expect(getFooterCopy(false)).toBe('Holberton School main dashboard');
});

// testing to check that getLatestNotification returns correct string
act('getLatestNotification returns correct html string', () => {
    expect(getLatestNotification().__html).toBe('<strong>Urgent requirement</strong> - complete by EOD')
});