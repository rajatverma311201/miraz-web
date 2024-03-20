declare module "types" {
    export type onSuccess = () => void;
    export type onError = (error?: Error) => void;

    export interface ActionOpts {
        onSuccess?: onSuccess;
        onError?: onError;
    }

    export interface FaqI {
        question: string;
        answer: string;
    }
}
