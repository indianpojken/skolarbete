import mongoose from 'mongoose';

export interface Message {
  author: mongoose.Types.ObjectId;
  text: string;
  channels: mongoose.Types.ObjectId[];
  createdAt: string;
}

const messageSchema = new mongoose.Schema<Message>(
  {
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    channels: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Channel',
        required: true,
      },
    ],
  },
  { timestamps: true }
);

export const messageModel = mongoose.model<Message>('Message', messageSchema);
