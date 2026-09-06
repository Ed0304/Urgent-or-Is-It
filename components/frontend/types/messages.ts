export type MessageType = "Email" | "SMS"

export interface Message {
    sender: string;
    message: string;

    chapter: number;
    level: number;
    order: number;

    messageType: MessageType;

    // Email-specific
    subject?: string;
}