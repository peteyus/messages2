import { Person } from "./person";

export interface Conversation {
    conversationId: number;
    messageCount?: number;
    people: Person[];
}