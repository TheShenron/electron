// src/main/utils/logger.ts
import fs from 'fs';
import path from 'path';

const logFile = path.join(__dirname, '../../logs/app.log');

export function logInfo(message: string) {
    const logMessage = `[INFO] ${new Date().toISOString()}: ${message}\n`;
    fs.appendFileSync(logFile, logMessage);
    console.log(logMessage);
}

export function logError(error: Error) {
    const logMessage = `[ERROR] ${new Date().toISOString()}: ${error.stack ?? error.message}\n`;
    fs.appendFileSync(logFile, logMessage);
    console.error(logMessage);
}
