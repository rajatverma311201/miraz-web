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

    export interface SponsorI {
        name: string;
        image: string;
        link: string;
    }

    export interface MirazTeamMemberI{
        name: string;
        email: string;
        role: string;
    }

    export interface KeyTalkI{
        title: string;
        time: string;
    }
    
    export interface SpeakerI{
        name: string;
        image: string;
        link: string;
        qualification: string;
        bio: string;
        keytalkId?: string;
    }
    
}
