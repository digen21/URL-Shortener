declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: "development" | "production";
      PORT?: number;
      LOCAL_MONGO_URI: string;
      CLOUD_MONGO_URI: string;
    }
  }
}

export {};
