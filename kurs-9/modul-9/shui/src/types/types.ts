export interface MessageData {
  id: string;
  text: string;
  username: string;
  date: string;
}

export type MessagesResponse =
  | {
      status: 'success';
      data: {
        messages: MessageData[];
      };
    }
  | {
      status: 'error';
      data: null;
    };
