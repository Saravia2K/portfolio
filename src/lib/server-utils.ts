import { createServerOnlyFn } from "@tanstack/react-start";

// Get environment variables on server side
export const getEnv = createServerOnlyFn((key: string) => process.env[key]);
