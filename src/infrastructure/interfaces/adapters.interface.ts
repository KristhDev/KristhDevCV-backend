export interface LoggerOptions {
    logsDir?: string;
    logsFileName?: string;
    renderLogsInConsole?: boolean;
    uploadLogsToService?: boolean;
    writeLogsInFile?: boolean;
}

export interface UserAgentParsed {
    browser?: string;
    device?: string;
    os?: string;
    userAgent: string;
}